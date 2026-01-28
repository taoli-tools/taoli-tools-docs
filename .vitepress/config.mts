import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Taoli Tools 使用手册",
  description: "Taoli Tools 半自动化 U 本位对冲套利工具使用手册",
  base: '/',
  srcDir: 'docs',
  lang: 'zh-CN',
  lastUpdated: true,
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ['link', { rel: 'canonical', href: 'https://docs.taoli.tools' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['meta', { name: 'author', content: 'Taoli Tools' }],
    ['meta', { name: 'keywords', content: '对冲套利,资金费套利,加密货币交易,U本位,跨所搬砖,DEX,CEX,永续合约,Taoli Tools' }],
    // Open Graph
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ['meta', { property: 'og:site_name', content: 'Taoli Tools' }],
    ['meta', { property: 'og:title', content: 'Taoli Tools 使用手册 - 半自动化对冲套利工具' }],
    ['meta', { property: 'og:description', content: 'Taoli Tools 是一个半自动化的 U 本位对冲套利工具,支持跨所搬砖套利、永续合约资金费套利,支持数十家 CEX, DEX 和 Perp DEX' }],
    ['meta', { property: 'og:url', content: 'https://docs.taoli.tools' }],
    ['meta', { property: 'og:image', content: 'https://docs.taoli.tools/og-image.png' }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { property: 'og:image:alt', content: 'Taoli Tools - 半自动化对冲套利工具' }],
    // Twitter Card
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@taoli_tools' }],
    ['meta', { name: 'twitter:creator', content: '@taoli_tools' }],
    ['meta', { name: 'twitter:title', content: 'Taoli Tools 使用手册 - 半自动化对冲套利工具' }],
    ['meta', { name: 'twitter:description', content: 'Taoli Tools 是一个半自动化的 U 本位对冲套利工具,支持跨所搬砖套利、永续合约资金费套利' }],
    ['meta', { name: 'twitter:image', content: 'https://docs.taoli.tools/og-image.png' }],
    ['meta', { name: 'twitter:image:alt', content: 'Taoli Tools - 半自动化对冲套利工具' }],
    // Structured Data (JSON-LD)
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Taoli Tools',
      applicationCategory: 'FinanceApplication',
      description: 'Taoli Tools 是一个半自动化的 U 本位对冲套利工具,支持跨所搬砖套利、永续合约资金费套利,支持数十家 CEX、DEX 和 Perp DEX',
      url: 'https://taoli.tools',
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'USD',
        lowPrice: '0',
        highPrice: '1920',
        offerCount: '7'
      },
      operatingSystem: 'Web Browser',
      author: {
        '@type': 'Organization',
        name: 'Taoli Tools',
        url: 'https://taoli.tools',
        logo: 'https://docs.taoli.tools/logo-light.svg',
        sameAs: [
          'https://x.com/taoli_tools',
          'https://t.me/taoli_tools',
          'https://github.com/taoli-tools'
        ]
      }
    })]
  ],
  sitemap: {
    hostname: 'https://docs.taoli.tools',
    transformItems: (items) => {
      return items.map(item => ({
        ...item,
        changefreq: 'weekly',
        priority: (item.url === '/' || item.url === '') ? 1.0 : 0.8
      }))
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      light: '/logo-light.svg',
      dark: '/logo-dark.svg',
      alt: 'Taoli Tools Logo'
    },

    nav: [
      { text: '资金费率', link: 'https://taoli.tools' },
      { text: '开始交易', link: 'https://taoli.tools/trade' },
    ],

    sidebar: [
      {
        text: '开始使用',
        items: [
          { text: '快速开始', link: '/quick-start' },
          {
            text: '安装部署',
            link: '/installation',
            collapsed: false,
            items: [
              { text: '本地运行', link: '/installation/local-setup' },
              { text: 'Windows 服务器', link: '/installation/windows-server' },
              { text: 'Linux 服务器', link: '/installation/linux-server' },
            ]
          },
          { text: '基础知识', link: '/basics' },
          {
            text: '解除浏览器跨域限制',
            link: '/disable-browser-cors',
            collapsed: false,
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
            collapsed: false,
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
                  { text: 'HTX', link: '/exchange-setup/htx' },
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
          { text: '设置页面', link: '/settings-page-guide' },
          { text: '交易页面', link: '/trading-page-guide' },
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
          { text: '开发者激励计划', link: '/developer-incentive-program' },
          { text: '信息收集与多开限制', link: '/data-collection-and-multi-instance-limits' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/taoli-tools' },
      { icon: 'x', link: 'https://x.com/taoli_tools' },
      { icon: 'telegram', link: 'https://t.me/taoli_tools' }
    ],

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索'
              },
              modal: {
                displayDetails: '显示详细列表',
                resetButtonTitle: '重置搜索',
                backButtonTitle: '关闭搜索',
                noResultsText: '没有结果',
                footer: {
                  selectText: '选择',
                  selectKeyAriaLabel: '输入',
                  navigateText: '导航',
                  navigateUpKeyAriaLabel: '上箭头',
                  navigateDownKeyAriaLabel: '下箭头',
                  closeText: '关闭',
                  closeKeyAriaLabel: 'esc'
                }
              }
            }
          }
        }
      }
    },

    externalLinkIcon: true
  }
})
