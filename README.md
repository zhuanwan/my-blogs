## vscode中代码自动修复、格式化
### 1、安装扩展
vscode 安装扩展 ESLint、Stylelint，Prettier在setting.json中添加配置
``` js
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
* 在根目录下新建.eslintrc.json
* eslint 可以配置parser来支持不同语法，这里对TypeScript进行设置，parserOptions用.tsconfig.json里面的配置
* eslint 中配置prettier, 用于格式化，有冲突的地方在rule配置
* 配置stylelintrc.json，用于less/css

## 代码提交时验证
### 1、安装husky和lint-staged
* husky可以用于实现各种 Git Hook。这里主要用到 pre-commit这个 hook，在执行 commit 之前，运行一些自定义操作
* lint-staged 用于对 Git 暂存区中的文件执行代码检测
``` js
npm install husky lint-staged -D
```
### 2、配置package.json
``` js
 "husky": {
    "hooks": {
      "pre-commit": "npm run lint-staged"
    }
  },
  "lint-staged": {
    "src/**/*.{tsx,ts,d.ts,js,jsx}": [
      "eslint --fix",
      "git add"
    ],
    "src/**/*.{less,css,html}": [
      "stylelint --fix",
      "git add"
    ]
  },
```