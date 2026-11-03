import{Ft as e,St as t,bt as n,ht as r,qt as i,t as a,vt as o,xt as s,zt as c}from"./chunks/framework.B0CLzZNn.js";import"./chunks/assets.2zH0uHwH.js";var l=JSON.parse(`{"title":"文件读写","description":"","frontmatter":{},"headers":[],"relativePath":"guide/model-plugin-system/file-io.md","filePath":"v1/guide/model-plugin-system/file-io.md","lastUpdated":1793342047000}`),u={name:`guide/model-plugin-system/file-io.md`};function d(a,l,u,d,f,p){let m=c(`NolebasePageProperties`),h=c(`VPNolebaseInlineLinkPreview`),g=c(`chat-message`),_=c(`chat-panel`),v=c(`NolebaseGitChangelog`);return e(),o(`div`,null,[l[9]||=r(`h1`,{id:`文件读写`,tabindex:`-1`},[s(`文件读写 `),r(`a`,{class:`header-anchor`,href:`#文件读写`,"aria-label":`Permalink to “文件读写”`},`​`)],-1),t(m),l[10]||=r(`p`,null,`此工具为模型提供了在本地文件系统中任意读写文件，搜索目录的能力。`,-1),l[11]||=r(`h2`,{id:`配置`,tabindex:`-1`},[s(`配置 `),r(`a`,{class:`header-anchor`,href:`#配置`,"aria-label":`Permalink to “配置”`},`​`)],-1),r(`ul`,null,[r(`li`,null,[l[1]||=s(`参考 `,-1),t(h,{href:`./introduction.html`},{default:i(()=>[...l[0]||=[s(`介绍`,-1)]]),_:1}),l[2]||=s(` 中的配置方法，启用 `,-1),l[3]||=r(`code`,null,`plugin-common`,-1),l[4]||=s(` 插件。`,-1)]),l[5]||=r(`li`,null,[s(`按照下图配置在 `),r(`code`,null,`plugin-common`),s(` 插件中启用 `),r(`code`,null,`fs`),s(` 功能。`)],-1)]),l[12]||=n(`<p><img src="/images/image-38.png" alt="alt text" width="1005" height="234" loading="lazy"></p><h2 id="测试" tabindex="-1">测试 <a class="header-anchor" href="#测试" aria-label="Permalink to “测试”">​</a></h2><p>将当前房间设置为 Agent 模式，即可询问模型阅读，编写文件。</p><p>当文件阅读内容成功时，则说明工具启用成功。</p><div class="warning custom-block"><p class="custom-block-title">警告</p><p>目前文件工具只能阅读纯文本内容，对于二进制文件暂时无法读取！</p></div><p>例如:</p>`,6),t(_,null,{default:i(()=>[t(g,{nickname:`User`},{default:i(()=>[...l[6]||=[s(`chatluna.chat.text 阅读 koishi.yml，分析文件内容`,-1)]]),_:1}),t(g,{nickname:`Bot`},{default:i(()=>[...l[7]||=[s(` {`,-1),r(`br`,null,null,-1),s(` \xA0\xA0tool: 'read_file',`,-1),r(`br`,null,null,-1),s(` \xA0\xA0arg: '{"input":"koishi.yml"}'`,-1),r(`br`,null,null,-1),s(` } `,-1)]]),_:1}),t(g,{nickname:`Bot`},{default:i(()=>[...l[8]||=[s(` # koishi.yml 文件内容分析 `,-1),r(`pre`,null,[r(`code`,null,`文件结构:
- plugins:
  - group: 分组，包含多个插件

分析各组内容:

1. **group:server**
   - 包含服务器配置，如 \`server:qtdlib\` 和 \`server-satori\` 等。

2. **group:basic**
   - 基础插件配置，包括 \`admin\`, \`bind\`, \`commands\`, \`help\`, \`http\`, \`inspect\` 等。

3. **group:console**
   - 控制台相关插件配置，如 \`actions\`, \`analytics\`, \`auth\` 等。

4. **group:storage**
   - 存储插件配置，包括不同的数据库配置如 \`database-mongo\`, \`database-mysql\` 等。

5. **group:adapter**
   - 适配器配置，如 \`adapter-dingtalk\`, \`adapter-discord\`, \`adapter-kook\` 等。

6. **osu-funny**
   - osu! API 配置。

7. **group-manage**
   - 管理插件，如 \`blockingRules\` 和其他群组管理规则。

8. **group:mxb5vv**
   - chatluna 配置，主要包括各种 chatluna 相关功能及参数设置。

9. **group:develop**
   - 开发环境相关插件 \`hmr\`。

10. **cache-redis**
    - Redis 缓存配置。

11. **其他插件**
    - 例如 \`shutdown\`, \`anti-repeater\`, \`ping\`, \`waifu\` 等。

12. **prefix**
    - 命令前缀配置。

13. **logger**
    - 日志级别设置。

14. **i18n**
    - 国际化配置，支持的语言和输出方式。
    
总结:
\`koishi.yml\` 是一个多功能配置文件，配置了不同分组的插件和其具体的参数设置，从基础功能、适配器、存储到特定服务支持场景如chatluna、osu等。文件详细而系统，分组明确，适用于 \`Koishi\` 框架管理多种功能。
`)],-1)]]),_:1})]),_:1}),t(v)])}var f=a(u,[[`render`,d]]);export{l as __pageData,f as default};