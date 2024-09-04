import{_ as s,c as a,o as i,a5 as n}from"./chunks/framework.DoXWjROl.js";const g=JSON.parse('{"title":"文档规范","description":"","frontmatter":{"title":"文档规范","categories":["工程规范"],"tags":["工程规范"],"author":{"name":"Anson","link":"https://github.com/yangsheng8/frontend-rules-bundle"}},"headers":[],"relativePath":"engineering/doc.md","filePath":"engineering/doc.md"}'),l={name:"engineering/doc.md"},e=n(`<h1 id="文档-规范" tabindex="-1">文档 规范 <a class="header-anchor" href="#文档-规范" aria-label="Permalink to &quot;文档 规范&quot;">​</a></h1><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>在撰写文档的时候如果能遵循一点良好的规约，将能<strong>提升所有人的阅读体验</strong>。</p><p>在此，文档的含义非常广泛，可以指代任何供人类阅读的文本材料。包括但不限于：<code>Readme</code>、<code>Changelog</code>、代码注释、上手指南、<code>Issue</code> 说明和<code>PPT</code> 分享等。</p><h2 id="_1-空格" tabindex="-1">1. 空格 <a class="header-anchor" href="#_1-空格" aria-label="Permalink to &quot;1. 空格&quot;">​</a></h2><ul><li><p>1.1.【强制】中英文之间需要增加空格</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- bad --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">HTML定义网页的结构与内容，CSS定义其格式与样式，而JavaScript则为网页增加可交互性，创作功能丰富的Web应用。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- good --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">HTML 定义网页的结构与内容，CSS 定义其格式与样式，而 JavaScript 则为网页增加可交互性，创作功能丰富的 Web 应用。</span></span></code></pre></div></li><li><p>1.2.【强制】中英文与数字之间需要增加空格</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- bad --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">截至2012年，所有的现代浏览器都完整的支持 ECMAScript5.1，旧版本的浏览器至少支持 ECMAScript3 标准。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- good --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">截至 2012 年，所有的现代浏览器都完整的支持 ECMAScript 5.1，旧版本的浏览器至少支持 ECMAScript 3 标准。</span></span></code></pre></div></li><li><p>1.3.【强制】全角标点与其他字符之间不加空格</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- bad --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">不像 UDP， HTTP 是一个不会静默丢失消息的协议。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- good --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">不像 UDP，HTTP 是一个不会静默丢失消息的协议。</span></span></code></pre></div></li><li><p>1.4.【强制】半角标点与其他字符之间需要增加空格</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- bad --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Cookie 主要用于以下三个方面：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">1.会话状态管理（如用户登录状态、购物车、游戏分数或其它需要记录的信息）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">2.个性化设置（如用户自定义设置、主题等）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">3.浏览器行为跟踪（如跟踪分析用户行为等）</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- good --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Cookie 主要用于以下三个方面：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 会话状态管理（如用户登录状态、购物车、游戏分数或其它需要记录的信息）</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 个性化设置（如用户自定义设置、主题等）</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">3.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 浏览器行为跟踪（如跟踪分析用户行为等）</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- bad --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">我+你=世界。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- good --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">我 + 你 = 世界。</span></span></code></pre></div></li><li><p>1.5.【推荐】链接文字前后不需要增加空格</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- bad --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">了解更多</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">https://developer.mozilla.org/zh-CN/docs/Web</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) 开发技术相关知识。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- good --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">了解更多</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">https://developer.mozilla.org/zh-CN/docs/Web</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)开发技术相关知识。</span></span></code></pre></div></li></ul><h2 id="_2-标点符号" tabindex="-1">2. 标点符号 <a class="header-anchor" href="#_2-标点符号" aria-label="Permalink to &quot;2. 标点符号&quot;">​</a></h2><ul><li><p>2.1.【推荐】正确使用引号</p><p>中文句子内夹用英文句子时，该英文句子用中文双引号标示，保留英文句子内部的英文标点符号，句末使用中文标点。</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- bad - 英文句子不建议使用英文引号标示 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">他写的是 &quot;Hello, world!&quot;。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- bad - 英文句子不建议使用中文单引号标示 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">他写的是‘Hello, world!’。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- bad - 英文句子内部的标点符号建议保留英文标点符号 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">他写的是“Hello，world！”。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- good --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">他写的是“Hello, world!”。</span></span></code></pre></div></li><li><p>2.2.【推荐】正确使用省略号</p><p>中文省略号的形式为“……”（中文输入法下 SHIFT + 6），6 个居中小圆点；英文省略号的形式为“...”，3 个齐线小圆点。</p><p>夹用英文的中文句子里，英文内部的省略使用英文省略号；中文内部的省略使用中文省略号。</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- bad --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">省略号是 3 个小圆点...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">省略号是 6 个齐线小圆点......</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">省略号是 6 个句号。。。。。。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- good --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">省略号是 6 个居中小圆点，占两个全角空格……</span></span></code></pre></div></li><li><p>2.3.【推荐】正确使用破折号</p><p>中文破折号的形式为“——”，长度相当于两个汉字的长度。</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- bad - 破折号不推荐使用两个中横线 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">第三方框架和库--用来快速构建网站和应用。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- good --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">第三方框架和库——用来快速构建网站和应用。</span></span></code></pre></div></li></ul><h2 id="_3-全角和半角" tabindex="-1">3. 全角和半角 <a class="header-anchor" href="#_3-全角和半角" aria-label="Permalink to &quot;3. 全角和半角&quot;">​</a></h2><ul><li><p>3.1.【强制】中文标点符号使用全角</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- bad - 中文句子冒号未使用全角 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">前端框架: React、Vue、Angular。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- bad - 中文句子内夹用并列的英文单词时使未使用顿号分隔 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">前端框架：React, Vue, Angular。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- good --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">前端框架：React、Vue、Angular。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- bad - 中文句子括号未使用全角 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">至少熟悉一门非前端的语言(如 Java、PHP、C、C++、Python、Ruby)，并有实践经验！</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- good --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">至少熟悉一门非前端的语言（如 Java、PHP、C、C++、Python、Ruby），并有实践经验！</span></span></code></pre></div></li><li><p>3.2.【强制】英文和数字使用半角</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- bad - 英文和数字不应该使用全角 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">该版本正式名称为 ＥＣＭＡＳｃｒｉｐｔ ２０１５，但通常被称为 ＥＣＭＡＳｃｒｉｐｔ ６ 或者 ＥＳ６。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- good --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">该版本正式名称为 ECMAScript 2015，但通常被称为 ECMAScript 6 或者 ES6。</span></span></code></pre></div></li><li><p>3.3.【强制】完整的英文整句和特殊名词使用半角标点</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- bad --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">乔布斯那句话是怎么说的？「Stay hungry，stay foolish。」</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">推荐你阅读《Hackers＆Painters：Big Ideas from the Computer Age》，非常的有趣。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- good --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">乔布斯那句话是怎么说的？「Stay hungry, stay foolish.」</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">推荐你阅读《Hackers &amp; Painters: Big Ideas from the Computer Age》，非常的有趣。</span></span></code></pre></div></li></ul><h2 id="_4-名词" tabindex="-1">4. 名词 <a class="header-anchor" href="#_4-名词" aria-label="Permalink to &quot;4. 名词&quot;">​</a></h2><ul><li><p>4.1.【强制】正确地拼写英文专有词汇</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- bad --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">我们需要一位熟悉 Js、h5，至少理解一种框架（如 backbone、angular、RJS 等）的 FED。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- good --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">我们需要一位熟悉 JavaScript、HTML5，至少理解一种框架（如 Backbone.js、AngularJS、React 等）的前端开发者。</span></span></code></pre></div></li></ul><h2 id="附录" tabindex="-1">附录 <a class="header-anchor" href="#附录" aria-label="Permalink to &quot;附录&quot;">​</a></h2><p>前端常用专有名词：</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">HTML, CSS, JavaScript/JS, AJAX, JSON, DOM, BOM, Less, HTTP, HTTPS, WebSocket, ECMAScript, ECMAScript 2015, ECMAScript 6, ES6, ES2015</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">jQuery, jQuery UI, jQuery Mobile, YUI, Zepto, Dojo</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">React, React Native, Bootstrap, RequireJS, Sea.js, AngularJS, Backbone.js</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Gulp, Grunt, webpack, Yeoman, npm, spm, Babel</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Mocha, Jasmine, Should.js</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">PHP, Java, Node.js</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">MySQL, MongoDB, Redis</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Apache, Nginx</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">GitHub, GitLab, GitCafe</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Chrome, Firefox, Safari, Internet Explore/IE, IE 7, Opera, UC</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Android, iOS, Windows, OS X, Ubuntu, Linux, Debian</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">PC, Mobile, H5</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">MacBook, MacBook Pro, MacBook Air, iMac, Mac Pro, Mac mini</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">iPad Air, iPad Air 2, iPad mini, iPhone, iPhone 6s, iPhone 6s Plus, Apple Watch</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">FPS, UI, URL, URI, URLs, URIs</span></span></code></pre></div><h2 id="参考资料" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料" aria-label="Permalink to &quot;参考资料&quot;">​</a></h2><ul><li><a href="https://github.com/sparanoid/chinese-copywriting-guidelines" target="_blank" rel="noreferrer">《中文文案排版指北》</a></li><li><a href="http://www.moe.gov.cn/ewebeditor/uploadfile/2015/01/13/20150113091548267.pdf" target="_blank" rel="noreferrer">《标点符号用法》</a></li><li><a href="http://www.moe.gov.cn/ewebeditor/uploadfile/2015/01/13/20150113092346124.pdf" target="_blank" rel="noreferrer">夹用英文的中文文本的标点符号用法（草案）</a></li><li><a href="https://www.w3.org/TR/clreq/" target="_blank" rel="noreferrer">《中文排版需求》</a></li></ul>`,17),p=[e];function t(h,k,d,r,o,c){return i(),a("div",null,p)}const u=s(l,[["render",t]]);export{g as __pageData,u as default};
