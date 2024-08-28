import { execaCommand } from 'execa';
import type { Options } from 'execa';
/**
 * 获取此次 commit 修改的文件列表
 * @param options
 */
export const getCommitFiles = async (options: Options = {}): Promise<string[]> => {
  try {
    const { stdout } = await execaCommand(
      'git diff --staged --diff-filter=ACMR --name-only --ignore-submodules',
      {
        ...options,
        all: true,
        cwd: options.cwd || process.cwd(),
      },
    );

    return stdout ? (stdout as string).split(/\s/).filter(Boolean) : [];
  } catch (e) {
    return [];
  }
};

/**
 * 获取未 add 的修改文件数量
 * @param options
 */
export const getAmendFiles = async (options: Options = {}): Promise<string> => {
  try {
    const { stdout } = await execaCommand(
      'git diff --name-only',
      {
        ...options,
        all: true,
        cwd: options.cwd || process.cwd(),
      },
    );

     // 将 stdout 转换为 string 类型
     return stdout as string;
  } catch (e) {
    return '';
  }
};
