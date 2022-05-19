## vscode中代码自动修复
### 1、vscode 安装扩展 ESLlint
在setting.json中添加配置
``` js
"editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }
```
### 2、配置.eslintrc.json
* 在根目录下新建.eslintrc.json
* eslint 可以配置parser来支持不同语法，这里对TypeScript进行设置
* 因为js、json等配置和ts,tsx等不同，所以这里使用了overrides写法
