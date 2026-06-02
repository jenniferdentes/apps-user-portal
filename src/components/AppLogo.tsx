import { getInitials } from '../lib/utils'

interface Props {
  name: string
  logoColor: string
  size?: 'sm' | 'md' | 'lg'
  withBorder?: boolean
}

export default function AppLogo({ name, logoColor, size = 'md', withBorder = false }: Props) {
  const initials = getInitials(name)
  const dim =
    size === 'sm' ? 'w-9 h-9 text-xs rounded-lg' :
    size === 'lg' ? 'w-[72px] h-[72px] text-lg rounded-2xl' :
    'w-12 h-12 text-sm rounded-xl'

  return (
    <div
      className={`${dim} flex items-center justify-center font-bold text-white shrink-0${withBorder ? ' border border-[#eaecf0]' : ''}`}
      style={{ backgroundColor: logoColor }}
    >
      {initials}
    </div>
  )
}
