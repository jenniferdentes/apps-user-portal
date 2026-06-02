import { Ticket, Users } from 'lucide-react'
import { useSidebar } from '../lib/sidebar-context'

export default function Header() {
  const { expanded } = useSidebar()

  return (
    <header
      className="fixed top-0 right-0 h-[80px] bg-white border-b border-gray-200 flex items-center justify-end px-6 gap-3 z-20 transition-[left] duration-300 ease-in-out"
      style={{ left: expanded ? 238 : 68 }}
    >
      <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium text-[#202938] hover:bg-gray-50 transition-colors">
        <Ticket size={16} className="text-[#616a7e]" />
        Submit a Ticket
      </button>

      <button className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 text-sm font-medium text-[#202938] hover:bg-gray-50 transition-colors">
        <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center">
          <Users size={12} className="text-purple-600" />
        </div>
        RiverStone Insurance
      </button>

      <button className="w-9 h-9 rounded-full bg-amber-400 flex items-center justify-center text-white text-sm font-bold hover:bg-amber-500 transition-colors">
        GH
      </button>
    </header>
  )
}
