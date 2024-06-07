import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: 'https://berserkerlan.github.io',
  title: 'Rusab Tech Blog',
  subtitle: 'A tech blog where I write opinions and helpful articles',
  lang: 'en-US',
  description: 'A tech blog for personal opinions and articles',
  author: {
    avatar: '/assets/avatar.png',
    name: 'Rusab',
    status: '💻',
    bio: 'A senior software engineer who loves to make fun projects.'
  },
  themeColor: '#3D4451'
}
