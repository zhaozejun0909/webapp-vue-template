# webapp-vue-template

Vue 3 SSR in Vite.

## 技术栈

Node v20.17.0 + pnpm + Vite 5 + Vue 3 + TypeScript 5

## 命令

```sh
# 常规命令
pnpm run install
pnpm run dev
pnpm run build
pnpm run prod
pnpm run lint
```

## 规范

### 目录规范和文件命名规范：

* 项目公共的代码和资源: src/components/、src/styles/、src/base/ 等，这些目录修改有严格要求，公用且必要的文件才可添加进来，非必要不要随便修改
* 项目使用 SSR 框架 Vike，了解其目录结构规范：[Vike](https://vike.dev/)
* vue 页面级目录命名使用小写的单个单词，避免大写字母，可以使用 smartline 而不是 smartLine，多单词使用 kebab-case 风格
* vue 自定义组件统一使用 PascalBase 风格，大写字母开头，比如：LoginButton、MyToast，组件所在的目录也应该如此命名，比如 src/components/LoginButton/
* js、css、ts 文件命名统一使用 camelCase 驼峰命名法，比如 payUtils.js、backgroundLogo.css
* 图片可以使用 camelCase 驼峰命名或者 kebab-case 风格，禁止包含中文

### 代码规范

- 必须使用 ESLint 插件，目的是协助开发者规范和优化自己的编码习惯，增强团队代码可维护性
- ESLint：主要用来检查 JS TS VUE 等的语法规范，代码的风格格式不做强制统一规范
    - 使用开源配置方案：[@antfu/eslint-config](https://github.com/antfu/eslint-config)
    - vscode 需设置 "eslint.experimental.useFlatConfig": true
- 代码风格
    - 宽松：重要的是有规范，而不是用哪一套规范，各人可以有自己的喜好
    - 格式化工具：（选择自己喜欢的格式化工具，甚至可以不用工具）
        - ESLint：在插件设置里打开格式化开关设置即可使用 (此风格固执己见，配置固定)
        - prettier or dprint：git 忽略了相关的配置文件，以便各自有自己的风格配置
        - Vue-Official：vue 官方的 vscode 插件也提供了代码格式化
    - vscode 配置（非必需）：
        - 如果 ESLint 的规则不符合你的习惯，可忽略代码格式相关的报错，参考：[配置](https://github.com/antfu/eslint-config?tab=readme-ov-file#ide-support-auto-fix-on-save)
        - 关闭 Detect Indentation 设置，避免缩进受各种插件的影响
        - 慎用保存自动格式化功能，我们各自有不同的风格，避免相互影响
        - 请不要使用自动在文件头部生成注释的插件

### Git 规范

- commit 和 merge request 都必须写清楚提交内容
- 日志格式不做要求，但必须看得懂
- 需求分支从 master 新建，需求上线以后删除
- 需求分支反向合并 master，能用 rebase 就不要用 merge
- 解决冲突，需要通知冲突相关的开发人员一起解决，推荐手动解决冲突

## VSCode

推荐插件：
    - [Vue-Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
    - [Vue DevTools](https://devtools.vuejs.org/)
    - [ESLint](https://eslint.org/)
    - [GitHub Copilot](https://github.com/features/copilot)
