import fg from 'fast-glob';
import { readFile, writeFile } from 'fs-extra';
import { extname, join } from 'path';
import prettier from 'prettier';
import { ScanOptions } from '../../types';
import { PRETTIER_FILE_EXT, PRETTIER_IGNORE_PATTERN } from '../../utils/constants';

export interface DoPrettierOptions extends ScanOptions {}

export async function doPrettier(options: DoPrettierOptions) {

  //1.找到需要扫描的文件
  let files: string[] = [];
  if (options.files) {
    //过滤，只留下需要扫描文件， 通过后缀名匹配
    files = options.files.filter((name) => PRETTIER_FILE_EXT.includes(extname(name)));
  } else {
    const pattern = join(
      options.include,
      //最终得到的文件模式类似于**/*.{js,ts,css}，表示匹配所有包含在options.include目录下或其子目录中的JavaScript、TypeScript和CSS文件。
      `**/*.{${PRETTIER_FILE_EXT.map((t) => t.replace(/^\./, '')).join(',')}}`,
    );
    files = await fg(pattern, {
      cwd: options.cwd,
      ignore: PRETTIER_IGNORE_PATTERN,
    });
  }
  await Promise.all(files.map(formatFile));
}

async function formatFile(filepath: string) {
  const text = await readFile(filepath, 'utf8');
  const options = await prettier.resolveConfig(filepath);
  const formatted = await prettier.format(text, { ...options, filepath });
  await writeFile(filepath, formatted, 'utf8');
}