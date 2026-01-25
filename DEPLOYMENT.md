# 部署到 Cloudflare Pages

本文档介绍如何将 Taoli Tools 使用手册部署到 Cloudflare Pages。

## 方法一：通过 Cloudflare Pages 控制台部署（推荐）

### 1. 准备工作

确保你的代码已推送到 GitHub 仓库。

### 2. 在 Cloudflare Pages 中创建项目

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 选择你的账户，进入 **Workers & Pages**
3. 点击 **Create application** → **Pages** → **Connect to Git**
4. 授权 Cloudflare 访问你的 GitHub 账户
5. 选择包含本项目的仓库

### 3. 配置构建设置

在 Cloudflare Pages 的配置页面中，设置以下参数：

- **项目名称**: `taoli-tools-docs` (或你喜欢的名称)
- **生产分支**: `main` (或你的主分支名称)
- **构建命令**: `npm run docs:build`
- **构建输出目录**: `.vitepress/dist`
- **根目录**: `/` (保持默认)

### 4. 环境变量

无需设置任何环境变量。

### 5. 部署

点击 **Save and Deploy** 按钮，Cloudflare Pages 将自动：
- 安装依赖 (`npm install`)
- 运行构建命令 (`npm run docs:build`)
- 部署到 CDN

部署完成后，你会获得一个 `*.pages.dev` 的域名。

## 方法二：使用 Wrangler CLI 部署

### 1. 安装 Wrangler

```bash
npm install -g wrangler
```

### 2. 登录 Cloudflare

```bash
wrangler login
```

### 3. 构建项目

```bash
npm run docs:build
```

### 4. 部署

```bash
wrangler pages deploy .vitepress/dist --project-name=taoli-tools-docs
```

## 自定义域名

1. 在 Cloudflare Pages 项目页面，点击 **Custom domains**
2. 点击 **Set up a custom domain**
3. 输入你的域名并按照指示配置 DNS

## 自动部署

当你推送代码到 GitHub 的主分支时，Cloudflare Pages 会自动触发新的部署。

## 本地预览

在部署前，你可以本地预览构建结果：

```bash
# 本地开发
npm run docs:dev

# 预览构建结果
npm run docs:build
npm run docs:preview
```

## 注意事项

- 所有文档文件和文件夹名称保持不变
- VitePress 会自动处理文件路径
- 构建产物在 `.vitepress/dist` 目录中
- 不要提交 `node_modules` 和 `.vitepress/dist` 到 Git

## 故障排查

如果部署失败，检查：
1. 构建日志中的错误信息
2. 确保 `package.json` 中的脚本正确
3. 确保所有链接的文件都存在
4. Node.js 版本兼容（推荐使用 Node.js 18 或更高版本）
