# vue3-ts-template

一个vue3+TS——Vite的基础项目开发模板，可以用来快速作为vue3项目搭建，减少更多的配置过程。

## 小特性

1. 集成ESlint+Prettier
2. 状态管理Pinia
3. 基于axios封装了网络请求
4. 集成scss
5. 区分了开发环境和生产环境
6. 添加了代理配置文件，直接配置代理

## 运行项目

使用node 16.0及以上的版本

### 安装依赖

```sh
npm install
```

### 编译重新加载开发

```sh
npm run dev
```

### 编译使用正式环境地址

编译使用正式环境接口地址，方便查看正式环境数据

```sh
npm run dev:production
```

### 打包生产环境

```sh
npm run build
```

### 打包测试环境

项目需要部署到测试环境服务器上，使用它可以使用测试环境接口地址

```sh
npm run build:test
```

### 预览

```sh
npm run preview
```

### 代码格式化 [ESLint](https://eslint.org/)

```sh
npm run lint
```

## License

vue3-ts-template is MIT.
