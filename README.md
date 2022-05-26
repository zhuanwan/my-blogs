## vscode 中代码自动修复、格式化

### 1、安装扩展

vscode 安装扩展 ESLint、Stylelint，Prettier 在 setting.json 中添加配置

```js
// 保存时修复
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true // js/jsx/tsx
    "source.fixAll.stylelint": true // less/css
}

// 保存时格式化
"editor.formatOnSave": true,

// ts使用prettier格式化
"[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
}
// json使用prettier格式化
"[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

### 2、配置.eslintrc.json、.stylelintrc.json、.tsconfig.json、.prettierrc.js

- 在根目录下新建.eslintrc.json
- eslint 可以配置 parser 来支持不同语法，这里对 TypeScript 进行设置，parserOptions 用.tsconfig.json 里面的配置
- eslint 中配置 prettier, 用于格式化，有冲突的地方在 rule 配置
- 配置 stylelintrc.json，用于 less/css

## 代码提交时验证“文件/提交信息”是否规范

### 1、安装 husky

- husky 可以用于实现各种 Git Hook

```js
yarn add husky -D
```

### 2、检测代码范围

- 只检测暂存区的代码，安装 lint-staged

```js
yarn add lint-staged -D
```

### package 配置

```js
  "scripts": {
    "prepare": "npx husky install", // 这里yarn安装包的时候会自动初始化husky,在根目录下新建.husky文件夹
    ...,
    "lint-staged": "lint-staged",
    "lint-staged:js": "eslint",
    "lint-staged:css": "stylelint",
  },
  "lint-staged": {
    "**/*.{less,css}": "lint-staged:css",
    "**/*.{js,jsx,ts,tsx}": "yarn lint-staged:js",
    "**/*.{js,jsx,tsx,ts,md,json}": [
      "prettier --write"
    ]
  },
```

### 3、添加 pre-commit 文件

会在.husky 文件夹下新建 pre-commit 文件，git 提交前会执行 yarn lint-staged,执行 package 中 lint-staged 命令,检查文件

```js
 npx husky add .husky/pre-commit "yarn lint-staged"
```

### 5、添加验证信息包

```js
 yarn add @commitlint/config-conventional @commitlint/cli -D
```

### 6、添加验证信息配置文件

在根目录下新建 commitlint.config.js，配置

### 7、添加 commit-msg 文件

会在.husky 文件夹下新建 commit-msg 文件,提交时验证提交信息

```js
 npx husky add .husky/commit-msg "npx commitlint --edit $1"
```

修改完代码后，提交信息，例：fix: 修复 xx

```js
build // 主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交
ci // 主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交
docs // 文档更新
feat // 新增功能
fix // bug 修复
perf // 性能优化
refactor // 重构代码(既没有新增功能，也没有修复 bug)
style // 不影响程序逻辑的代码修改(修改空白字符，补全缺失的分号等)
test // 新增测试用例或是更新现有测试
revert // 回滚某个更早之前的提交
chore // 不属于以上类型的其他类型(日常事务)
```

- 有个问题：有时提交时报错，结果把文件都还原了，暂未找到原因
