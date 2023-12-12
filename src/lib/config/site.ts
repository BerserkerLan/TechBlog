import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'urara-demo.netlify.app',
  title: 'PandaTech',
  subtitle: 'A tech blog where I write opinions and helpful articless',
  lang: 'en-US',
  description: 'Heavily based on Urara Sveltekit',
  author: {
    avatar: '/assets/pixel_art_typing_panda.jpg',
    name: 'CodePanda',
    status: '💻',
    bio: 'A windows user that uses Linux periodically.'
  },
  themeColor: '#3D4451'
}
