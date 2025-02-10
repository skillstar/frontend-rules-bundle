import { _ as s, c as t, o as a, a4 as e } from './chunks/framework.C5sNhGtk.js';
const y = JSON.parse(
    '{"title":"frb-stylelint-config","description":"","frontmatter":{"title":"frb-stylelint-config","categories":["工程规范"],"tags":["工程规范"],"author":{"name":"Anson","link":"https://github.com/skillstar/frontend-rules-bundle"}},"headers":[],"relativePath":"npm/stylelint.md","filePath":"npm/stylelint.md"}',
  ),
  i = { name: 'npm/stylelint.md' },
  n = e(
    `<h1 id="frb-stylelint-config" tabindex="-1">frb-stylelint-config <a class="header-anchor" href="#frb-stylelint-config" aria-label="Permalink to &quot;frb-stylelint-config&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>FRB CSS 规范</p></div><p>支持配套的 <a href="https://stylelint.io/user-guide/configure" target="_blank" rel="noreferrer">stylelint 可共享配置</a>。</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p>需要先行安装 <a href="https://www.npmjs.com/package/stylelint" target="_blank" rel="noreferrer">stylelint</a> 和 <a href="https://www.npmjs.com/package/stylelint-scss" target="_blank" rel="noreferrer">stylelint-scss</a>：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> frb-stylelint-config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stylelint</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stylelint-scss</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --save-dev</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><p>在 <code>.stylelintrc</code> 中继承本包:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;extends&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;frb-stylelint-config&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,
    9,
  ),
  l = [n];
function r(o, p, h, c, d, k) {
  return a(), t('div', null, l);
}
const f = s(i, [['render', r]]);
export { y as __pageData, f as default };
