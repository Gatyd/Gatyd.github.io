import type { NavigationMenuItem } from '@nuxt/ui'

export const useNavLinks = () => {
  const { t } = useI18n()
  
  return computed<NavigationMenuItem[]>(() => [{
    label: t('nav.home'),
    icon: 'i-lucide-home',
    to: '/'
  }, {
    label: t('nav.projects'),
    icon: 'i-lucide-folder',
    to: '/projects'
  }, {
    label: t('nav.about'),
    icon: 'i-lucide-user',
    to: '/about'
  }])
}
