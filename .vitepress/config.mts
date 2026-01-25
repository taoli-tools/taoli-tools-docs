import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Taoli Tools 使用手册",
  description: "Taoli Tools 半自动化对冲套利工具使用手册",
  base: '/',
  srcDir: 'docs',
  sitemap: {
    hostname: 'https://docs.taoli.tools'
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      light: '/logo-light.svg',
      dark: '/logo-dark.svg'
    },

    nav: [
      { text: '资金费率', link: 'https://taoli.tools' },
      { text: '开始交易', link: 'https://taoli.tools/trade' },
      { text: 'Telegram', link: 'https://t.me/taoli_tools' },
      { text: 'X', link: 'https://x.com/taoli_tools' }
    ],

    sidebar: [
      {
        text: '开始使用',
        items: [
          { text: '快速开始', link: '/快速开始' },
          {
            text: '安装部署',
            link: '/安装部署',
            collapsed: true,
            items: [
              { text: '本地运行', link: '/安装部署/本地运行' },
              { text: 'Windows Server', link: '/安装部署/Windows Server' },
              { text: 'Linux Server', link: '/安装部署/Linux Server' },
            ]
          },
          { text: '基础知识', link: '/基础知识' },
          {
            text: '解除浏览器跨域限制',
            link: '/解除浏览器跨域限制',
            collapsed: true,
            items: [
              { text: '浏览器插件', link: '/解除浏览器跨域限制/浏览器插件' },
              { text: '命令行禁用', link: '/解除浏览器跨域限制/命令行禁用' },
            ]
          },
          { text: 'VIP 等级区别及价格', link: '/VIP等级区别及价格' },
        ]
      },
      {
        text: '使用说明',
        items: [
          {
            text: '交易所设置',
            link: '/交易所设置',
            collapsed: true,
            items: [
              {
                text: 'CEX',
                collapsed: true,
                items: [
                  { text: 'Binance', link: '/交易所设置/Binance' },
                  { text: 'Coinbase', link: '/交易所设置/Coinbase' },
                  { text: 'Bybit', link: '/交易所设置/Bybit' },
                  { text: 'OKX', link: '/交易所设置/OKX' },
                  { text: 'Bitget', link: '/交易所设置/Bitget' },
                  { text: 'Backpack', link: '/交易所设置/Backpack' },
                  { text: 'Gate', link: '/交易所设置/Gate' },
                  { text: 'KuCoin', link: '/交易所设置/KuCoin' },
                  { text: 'MEXC', link: '/交易所设置/MEXC' },
                ]
              },
              {
                text: 'DEX',
                collapsed: true,
                items: [
                  { text: 'OKX DEX', link: '/交易所设置/OKX DEX' },
                  { text: 'LI.FI', link: '/交易所设置/LI FI' },
                  { text: 'EVM Router', link: '/交易所设置/EVM Router' },
                  { text: 'Jupiter', link: '/交易所设置/Jupiter' },
                  { text: '1inch', link: '/交易所设置/1inch' },
                  { text: 'Uniswap V3', link: '/交易所设置/Uniswap V3' },
                  { text: 'PancakeSwap V3', link: '/交易所设置/PancakeSwap V3' },
                  { text: 'Odos', link: '/交易所设置/Odos' },
                  { text: 'Hyperion', link: '/交易所设置/Hyperion' },
                ]
              },
              {
                text: 'Perp DEX',
                collapsed: true,
                items: [
                  { text: 'Hyperliquid', link: '/交易所设置/Hyperliquid' },
                  { text: 'Aster', link: '/交易所设置/Aster' },
                  { text: 'Lighter', link: '/交易所设置/Lighter' },
                  { text: 'Grvt', link: '/交易所设置/Grvt' },
                  { text: 'Ethereal', link: '/交易所设置/Ethereal' },
                  { text: 'Paradex', link: '/交易所设置/Paradex' },
                  { text: 'Pacifica', link: '/交易所设置/Pacifica' },
                  { text: 'Extended', link: '/交易所设置/Extended' },
                  { text: 'StandX', link: '/交易所设置/StandX' },
                  { text: 'Apex Omni', link: '/交易所设置/Apex Omni' },
                ]
              }
            ]
          },
          { text: '设置页面', link: '/设置页面' },
          { text: '交易页面', link: '/交易页面' },
          { text: '下单操作', link: '/下单操作' },
          { text: '风险提示', link: '/风险提示' },
        ]
      },
      {
        text: '其他信息',
        items: [
          { text: '常见问题', link: '/常见问题' },
          { text: 'DEX 常见问题', link: '/DEX常见问题' },
          { text: 'Taoli Tools Signer', link: '/Taoli Tools Signer' },
          { text: '小技巧', link: '/小技巧' },
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
    },

    externalLinkIcon: true
  }
})
