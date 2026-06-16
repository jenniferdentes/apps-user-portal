import type { AppStatus } from '../types'

const STATUS_CONFIG: Record<AppStatus, { dot: string; label: string; style: React.CSSProperties }> = {
  active: {
    dot: 'bg-[var(--mui-palette-success-main)]',
    label: 'Active',
    style: {
      color: 'var(--portal-accent8-dark)',
      backgroundColor: 'var(--portal-accent2)',
    },
  },
  configuring: {
    dot: 'bg-[var(--mui-palette-warning-main)]',
    label: 'Configuring',
    style: {
      color: 'var(--portal-accent1-dark)',
      backgroundColor: 'var(--portal-accent1-light)',
    },
  },
  inactive: {
    dot: 'bg-[var(--portal-icon-subtle)]',
    label: 'Inactive',
    style: {
      color: 'var(--portal-icon-base)',
      backgroundColor: 'var(--portal-elevation-1)',
    },
  },
}

export default function StatusBadge({ status }: { status: AppStatus }) {
  const { dot, label, style } = STATUS_CONFIG[status]
  return (
    <span
      className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold"
      style={style}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
      {label}
    </span>
  )
}
