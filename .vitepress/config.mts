import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Taoli Tools 使用手册",
  description: "Taoli Tools 半自动化对冲交易工具使用手册",
  base: '/',

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
          { text: 'VIP等级区别及价格', link: '/Taoli Tools 使用手册/VIP等级区别及价格 1ce64b000c25809e809edeb311aa01dc' },
          { text: '解除浏览器跨域限制', link: '/Taoli Tools 使用手册/解除浏览器跨域限制 19764b000c2580e1b8e7c06fa3d53f6c' },
          { text: '安装部署', link: '/Taoli Tools 使用手册/安装部署 27d64b000c258020a818db1691f7d939' },
        ]
      },
      {
        text: '使用说明',
        items: [
          { text: '交易所设置说明', link: '/Taoli Tools 使用手册/交易所设置说明 18d64b000c25808e9eb3fab39b370d0b' },
          { text: '设置页面说明', link: '/Taoli Tools 使用手册/设置页面说明 23364b000c2580348dd1ea251b0a940a' },
          { text: '交易页面说明', link: '/Taoli Tools 使用手册/交易页面说明 1ac64b000c258099bdcec9f942c58e66' },
          { text: '下单操作说明', link: '/Taoli Tools 使用手册/下单操作说明 18e64b000c258088a402cb8a55046824' },
        ]
      },
      {
        text: '其他信息',
        items: [
          { text: '风险提示', link: '/Taoli Tools 使用手册/风险提示 18d64b000c2580b0a325ecb6e6896941' },
          { text: '常见问题', link: '/Taoli Tools 使用手册/常见问题 19164b000c25807fbbb5e1aef9d8af2d' },
          { text: 'DEX常见问题', link: '/Taoli Tools 使用手册/DEX常见问题 1fd64b000c258093a771de0028b8e9c4' },
          { text: 'Taoli Tools Signer', link: '/Taoli Tools 使用手册/Taoli Tools Signer 20f64b000c2580eda7f2f6fbb357da94' },
          { text: '小技巧', link: '/Taoli Tools 使用手册/小技巧 19364b000c2580f3a367f09799a765ec' },
          { text: '基础知识', link: '/Taoli Tools 使用手册/基础知识 19b64b000c2580858603ccfe98c1e895' },
          { text: '开发者激励计划', link: '/Taoli Tools 使用手册/开发者激励计划 1e564b000c2580969d0bc8d17bf00cce' },
          { text: '信息收集与多开限制', link: '/Taoli Tools 使用手册/信息收集与多开限制 21364b000c2580e9b086e50fad7fed93' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yourusername/taoli-tools-docs' }
    ],

    search: {
      provider: 'local'
    }
  }
})
