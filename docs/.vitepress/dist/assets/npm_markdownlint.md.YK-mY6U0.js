import { _ as a, c as n, o as s, a4 as i } from './chunks/framework.C5sNhGtk.js';
const g = JSON.parse(
    '{"title":"frb-markdownlint-config","description":"","frontmatter":{"title":"frb-markdownlint-config","categories":["工程规范"],"tags":["工程规范"],"author":{"name":"Anson","link":"https://github.com/skillstar/frontend-rules-bundle"}},"headers":[],"relativePath":"npm/markdownlint.md","filePath":"npm/markdownlint.md"}',
  ),
  t = { name: 'npm/markdownlint.md' },
  e = i(
    `<h1 id="frb-markdownlint-config" tabindex="-1">frb-markdownlint-config <a class="header-anchor" href="#frb-markdownlint-config" aria-label="Permalink to &quot;frb-markdownlint-config&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>FRB 文档 规范</p></div><p>支持配套的 <a href="https://www.npmjs.com/package/markdownlint#optionsconfig" target="_blank" rel="noreferrer">markdownlint 可共享配置</a>。</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p>需要先行安装 <a href="https://www.npmjs.com/package/markdownlint" target="_blank" rel="noreferrer">markdownlint</a>：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> frb-markdownlint-config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> markdownlint</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --save-dev</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><p>在 <code>.markdownlint.json</code> 中继承本包:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;extends&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;frb-markdownlint-config&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,
    9,
  ),
  o = [e];
function l(r, p, d, h, c, k) {
  return s(), n('div', null, o);
}
const f = a(t, [['render', l]]);
export { g as __pageData, f as default };
