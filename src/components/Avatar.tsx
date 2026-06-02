import { getInitials, getAvatarColor } from '../lib/utils'

interface Props {
  name: string
  size?: 'sm' | 'md'
}

export default function Avatar({ name, size = 'md' }: Props) {
  const initials = getInitials(name)
  const { bg, text } = getAvatarColor(name)
  const dim = size === 'sm' ? 'w-8 h-8 text-xs' : 'w-9 h-9 text-sm'

  return (
    <div
      className={`${dim} rounded-full flex items-center justify-center font-semibold shrink-0`}
      style={{ backgroundColor: bg, color: text }}
    >
      {initials}
    </div>
  )
}
