import { _ as s, c as i, o as a, a4 as n } from './chunks/framework.C5sNhGtk.js';
const E = JSON.parse(
    '{"title":"frb-eslint-plugin","description":"","frontmatter":{"title":"frb-eslint-plugin","categories":["工程规范"],"tags":["工程规范"],"author":{"name":"Anson","link":"https://github.com/skillstar/frontend-rules-bundle"}},"headers":[],"relativePath":"npm/eslint-plugin.md","filePath":"npm/eslint-plugin.md"}',
  ),
  e = { name: 'npm/eslint-plugin.md' },
  t = n(
    `<h1 id="frb-eslint-plugin" tabindex="-1">frb-eslint-plugin <a class="header-anchor" href="#frb-eslint-plugin" aria-label="Permalink to &quot;frb-eslint-plugin&quot;">​</a></h1><p>除了本包，你需要同时安装 <a href="https://eslint.org/" target="_blank" rel="noreferrer">ESlint</a></p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> frb-eslint-plugin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eslint</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --save-dev</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><h3 id="引入插件" tabindex="-1">引入插件 <a class="header-anchor" href="#引入插件" aria-label="Permalink to &quot;引入插件&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// .eslintrc.js</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  plugin: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;frb-eslint-config&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  rules: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;frb-eslint-plugin/no-secret-info&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;error&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><h3 id="使用-presets" tabindex="-1">使用 presets <a class="header-anchor" href="#使用-presets" aria-label="Permalink to &quot;使用 presets&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// .eslintrc.js</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  extends: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;plugin:frb-eslint-plugin/recommended&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><h2 id="支持的规则" tabindex="-1">支持的规则 <a class="header-anchor" href="#支持的规则" aria-label="Permalink to &quot;支持的规则&quot;">​</a></h2><h3 id="no-broad-semantic-versioning" tabindex="-1"><code>no-broad-semantic-versioning</code> <a class="header-anchor" href="#no-broad-semantic-versioning" aria-label="Permalink to &quot;\`no-broad-semantic-versioning\`&quot;">​</a></h3><p>不要在 <code>package.json</code> 中使用太过宽泛的版本指定方式，包括 <code>*</code>、<code>x</code> 和 <code>&gt; x</code> 。</p><h4 id="规则内容" tabindex="-1">规则内容 <a class="header-anchor" href="#规则内容" aria-label="Permalink to &quot;规则内容&quot;">​</a></h4><p>参照 <a href="https://docs.npmjs.com/about-semantic-versioning" target="_blank" rel="noreferrer">https://docs.npmjs.com/about-semantic-versioning</a>。</p><p>使用 <code>*</code>、 <code>x</code> 和 <code>&gt; x</code> 指定版本会被警告。</p><h3 id="no-http-url" tabindex="-1"><code>no-http-url</code> <a class="header-anchor" href="#no-http-url" aria-label="Permalink to &quot;\`no-http-url\`&quot;">​</a></h3><p>推荐将 HTTP 链接换为 HTTPS 链接。</p><h4 id="规则内容-1" tabindex="-1">规则内容 <a class="header-anchor" href="#规则内容-1" aria-label="Permalink to &quot;规则内容&quot;">​</a></h4><p><strong>错误代码</strong>示例:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> test </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;http://frontend-rules-bundle.com&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> jsx </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://frontend-rules-bundle.com&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span></code></pre></div><h4 id="何时不适用" tabindex="-1">何时不适用 <a class="header-anchor" href="#何时不适用" aria-label="Permalink to &quot;何时不适用&quot;">​</a></h4><p>如果你的网站只支持 HTTP 时。</p><h3 id="no-js-in-ts-project" tabindex="-1"><code>no-js-in-ts-project</code> <a class="header-anchor" href="#no-js-in-ts-project" aria-label="Permalink to &quot;\`no-js-in-ts-project\`&quot;">​</a></h3><p>不推荐在项目中同时存在 <code>JS</code> 和 <code>TS</code> 文件。</p><h4 id="规则内容-2" tabindex="-1">规则内容 <a class="header-anchor" href="#规则内容-2" aria-label="Permalink to &quot;规则内容&quot;">​</a></h4><p><strong>错误示例</strong>，TS 项目中包含 JS 文件:</p><div class="language-Bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> index.ts</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> home.js</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">└──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tsconfig.json</span></span></code></pre></div><p><strong>正确示例</strong>:</p><div class="language-Bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> index.ts</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> home.ts</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">└──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tsconfig.json</span></span></code></pre></div><h4 id="规则选项" tabindex="-1">规则选项 <a class="header-anchor" href="#规则选项" aria-label="Permalink to &quot;规则选项&quot;">​</a></h4><p>默认当存在 <code>commitlint.config.js</code>, <code>eslintrc.js</code>, <code>prettierrc.js</code>, <code>stylelintrc.js</code> 文件时不会报错，支持自定义设置文件白名单。</p><h3 id="no-secret-info" tabindex="-1"><code>no-secret-info</code> <a class="header-anchor" href="#no-secret-info" aria-label="Permalink to &quot;\`no-secret-info\`&quot;">​</a></h3><p>不在代码中直接通过纯文本值设置 <code>password</code> <code>token</code> 和 <code>secret</code> 信息。</p><h4 id="规则内容-3" tabindex="-1">规则内容 <a class="header-anchor" href="#规则内容-3" aria-label="Permalink to &quot;规则内容&quot;">​</a></h4><p>在包含 <code>password</code> <code>token</code> and <code>secret</code> 名称的 key 中禁止使用纯文本值。</p><p><strong>错误</strong>代码示例:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> accessKeySecret </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;xxxx&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> client </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  accessKeyToken: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;xxxx&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><p><strong>正确</strong>代码示例:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> accessKeySecret </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> process.env.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ACCESS_KEY_SECRET</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> client </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  accessKeyToken: process.env.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ACCESS_KEY_SECRET</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div>`,
    38,
  ),
  l = [t];
function h(p, k, r, d, o, c) {
  return a(), i('div', null, l);
}
const y = s(e, [['render', h]]);
export { E as __pageData, y as default };
