import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Taoli Tools 使用手册",
  description: "Taoli Tools 半自动化对冲套利工具使用手册",
  base: '/',
  srcDir: 'docs',

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      light: '/logo-light.svg',
      dark: '/logo-dark.svg'
    },

    nav: [
      { text: '资金费率', link: 'https://taoli.tools' },
      { text: '开始交易', link: 'https://taoli.tools/trade' },
      { text: 'Telegram 群', link: 'https://t.me/taoli_tools' }
    ],

    sidebar: [
      {
        text: '开始使用',
        items: [
          { text: '安装部署', link: '/安装部署' },
          { text: '解除浏览器跨域限制', link: '/解除浏览器跨域限制' },
          { text: 'VIP 等级区别及价格', link: '/VIP等级区别及价格' },
          { text: '基础知识', link: '/基础知识' },
        ]
      },
      {
        text: '使用说明',
        items: [
          {
            text: '交易所设置说明',
            link: '/交易所设置说明',
            collapsed: true,
            items: [
              {
                text: 'CEX',
                collapsed: true,
                items: [
                  { text: 'Binance', link: '/交易所设置说明/Binance' },
                  { text: 'Coinbase', link: '/交易所设置说明/Coinbase' },
                  { text: 'Bybit', link: '/交易所设置说明/Bybit' },
                  { text: 'OKX', link: '/交易所设置说明/OKX' },
                  { text: 'Bitget', link: '/交易所设置说明/Bitget' },
                  { text: 'Backpack', link: '/交易所设置说明/Backpack' },
                  { text: 'Gate', link: '/交易所设置说明/Gate' },
                  { text: 'KuCoin', link: '/交易所设置说明/KuCoin' },
                  { text: 'MEXC', link: '/交易所设置说明/MEXC' },
                ]
              },
              {
                text: 'Perp DEX',
                collapsed: true,
                items: [
                  { text: 'Hyperliquid', link: '/交易所设置说明/Hyperliquid' },
                  { text: 'Aster', link: '/交易所设置说明/Aster' },
                  { text: 'Lighter', link: '/交易所设置说明/Lighter' },
                  { text: 'Grvt', link: '/交易所设置说明/Grvt' },
                  { text: 'Ethereal', link: '/交易所设置说明/Ethereal' },
                  { text: 'Paradex', link: '/交易所设置说明/Paradex' },
                  { text: 'Pacifica', link: '/交易所设置说明/Pacifica' },
                  { text: 'Extended', link: '/交易所设置说明/Extended' },
                  { text: 'StandX', link: '/交易所设置说明/StandX' },
                  { text: 'Apex Omni', link: '/交易所设置说明/Apex Omni' },
                ]
              },
              {
                text: 'DEX',
                collapsed: true,
                items: [
                  { text: 'OKX DEX', link: '/交易所设置说明/OKX DEX' },
                  { text: 'LI.FI', link: '/交易所设置说明/LI FI' },
                  { text: 'EVM Router', link: '/交易所设置说明/EVM Router' },
                  { text: 'Jupiter', link: '/交易所设置说明/Jupiter' },
                  { text: '1inch', link: '/交易所设置说明/1inch' },
                  { text: 'Uniswap V3', link: '/交易所设置说明/Uniswap V3' },
                  { text: 'PancakeSwap V3', link: '/交易所设置说明/PancakeSwap V3' },
                  { text: 'Odos', link: '/交易所设置说明/Odos' },
                  { text: 'Hyperion', link: '/交易所设置说明/Hyperion' },
                ]
              }
            ]
          },
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
    }
  }
})
