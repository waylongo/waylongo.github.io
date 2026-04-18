# waylongo's log

这是我的个人主页仓库，基于 Astro 构建，用来发布文章、记录想法和学习笔记。
这个项目是在 [satnaing/astro-paper](https://github.com/satnaing/astro-paper) 的基础上修改而成。

## 本地开发

```bash
npm install
npm run dev
```

默认本地地址是 `http://localhost:4321`。

## 常用命令

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

## 内容位置

- 首页与站点配置：`src/config.ts`、`src/pages/index.astro`
- About 页面：`src/pages/about.md`
- 文章内容：`src/data/blog`
- 导航与页脚：`src/components`

## 部署

当前站点配置为发布到 `https://waylongo.github.io/`。
