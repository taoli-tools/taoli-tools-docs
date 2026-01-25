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
          { text: '快速开始', link: '/quick-start' },
          {
            text: '安装部署',
            link: '/installation',
            collapsed: true,
            items: [
              { text: '本地运行', link: '/installation/local-setup' },
              { text: 'Windows Server', link: '/installation/windows-server' },
              { text: 'Linux Server', link: '/installation/linux-server' },
            ]
          },
          { text: '基础知识', link: '/basics' },
          {
            text: '解除浏览器跨域限制',
            link: '/disable-browser-cors',
            collapsed: true,
            items: [
              { text: '浏览器插件', link: '/disable-browser-cors/browser-extension' },
              { text: '命令行禁用', link: '/disable-browser-cors/command-line' },
            ]
          },
          { text: 'VIP 等级区别及价格', link: '/vip-levels-and-pricing' },
        ]
      },
      {
        text: '使用说明',
        items: [
          {
            text: '交易所设置',
            link: '/exchange-setup',
            collapsed: true,
            items: [
              {
                text: 'CEX',
                collapsed: true,
                items: [
                  { text: 'Binance', link: '/exchange-setup/binance' },
                  { text: 'Coinbase', link: '/exchange-setup/coinbase' },
                  { text: 'Bybit', link: '/exchange-setup/bybit' },
                  { text: 'OKX', link: '/exchange-setup/okx' },
                  { text: 'Bitget', link: '/exchange-setup/bitget' },
                  { text: 'Backpack', link: '/exchange-setup/backpack' },
                  { text: 'Gate', link: '/exchange-setup/gate' },
                  { text: 'KuCoin', link: '/exchange-setup/ku-coin' },
                  { text: 'MEXC', link: '/exchange-setup/mexc' },
                ]
              },
              {
                text: 'DEX',
                collapsed: true,
                items: [
                  { text: 'OKX DEX', link: '/exchange-setup/okx-dex' },
                  { text: 'LI.FI', link: '/exchange-setup/li-fi' },
                  { text: 'EVM Router', link: '/exchange-setup/evm-router' },
                  { text: 'Jupiter', link: '/exchange-setup/jupiter' },
                  { text: '1inch', link: '/exchange-setup/1inch' },
                  { text: 'Uniswap V3', link: '/exchange-setup/uniswap-v3' },
                  { text: 'PancakeSwap V3', link: '/exchange-setup/pancake-swap-v3' },
                  { text: 'Odos', link: '/exchange-setup/odos' },
                  { text: 'Hyperion', link: '/exchange-setup/hyperion' },
                ]
              },
              {
                text: 'Perp DEX',
                collapsed: true,
                items: [
                  { text: 'Hyperliquid', link: '/exchange-setup/hyperliquid' },
                  { text: 'Aster', link: '/exchange-setup/aster' },
                  { text: 'Lighter', link: '/exchange-setup/lighter' },
                  { text: 'Grvt', link: '/exchange-setup/grvt' },
                  { text: 'Ethereal', link: '/exchange-setup/ethereal' },
                  { text: 'Paradex', link: '/exchange-setup/paradex' },
                  { text: 'Pacifica', link: '/exchange-setup/pacifica' },
                  { text: 'Extended', link: '/exchange-setup/extended' },
                  { text: 'StandX', link: '/exchange-setup/stand-x' },
                  { text: 'Apex Omni', link: '/exchange-setup/apex-omni' },
                ]
              }
            ]
          },
          { text: '设置页面', link: '/settings-page' },
          { text: '交易页面', link: '/trading-page' },
          { text: '下单操作', link: '/order-operations' },
          { text: '风险提示', link: '/risk-warning' },
        ]
      },
      {
        text: '其他信息',
        items: [
          { text: '常见问题', link: '/faq' },
          { text: 'DEX 常见问题', link: '/dex-faq' },
          { text: 'Taoli Tools Signer', link: '/taoli-tools-signer' },
          { text: '小技巧', link: '/tips-and-tricks' },
          { text: '开发者激励计划', link: '/developer-incentive-program' },
          { text: '信息收集与多开限制', link: '/data-collection-and-multi-instance-limits' },
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
