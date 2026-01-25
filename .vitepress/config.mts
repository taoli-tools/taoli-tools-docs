import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Taoli Tools 使用手册",
  description: "Taoli Tools 半自动化对冲交易工具使用手册",
  base: '/',
  srcDir: 'docs',

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '官网', link: 'https://taoli.tools' },
      { text: 'Telegram群', link: 'https://t.me/taoli_tools' }
    ],

    sidebar: [
      {
        text: '开始使用',
        items: [
          { text: 'VIP等级区别及价格', link: '/VIP等级区别及价格' },
          { text: '解除浏览器跨域限制', link: '/解除浏览器跨域限制' },
          { text: '安装部署', link: '/安装部署' },
        ]
      },
      {
        text: '使用说明',
        items: [
          { text: '交易所设置说明', link: '/交易所设置说明' },
          { text: '设置页面说明', link: '/设置页面说明' },
          { text: '交易页面说明', link: '/交易页面说明' },
          { text: '下单操作说明', link: '/下单操作说明' },
        ]
      },
      {
        text: '其他信息',
        items: [
          { text: '风险提示', link: '/风险提示' },
          { text: '常见问题', link: '/常见问题' },
          { text: 'DEX常见问题', link: '/DEX常见问题' },
          { text: 'Taoli Tools Signer', link: '/Taoli Tools Signer' },
          { text: '小技巧', link: '/小技巧' },
          { text: '基础知识', link: '/基础知识' },
          { text: '开发者激励计划', link: '/开发者激励计划' },
          { text: '信息收集与多开限制', link: '/信息收集与多开限制' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/taoli-tools/taoli-tools-docs' }
    ],

    search: {
      provider: 'local'
    }
  }
})
