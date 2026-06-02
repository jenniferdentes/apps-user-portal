import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import CompanyApps from './pages/apps/CompanyApps'
import AppDetail from './pages/apps/AppDetail'
import MyApps from './pages/apps/MyApps'
import MyAppDetail from './pages/apps/MyAppDetail'
import Marketplace from './pages/apps/Marketplace'
import MarketplaceDetail from './pages/apps/MarketplaceDetail'
import ChampionTasks from './pages/ChampionTasks'
import ChampionTaskDetail from './pages/ChampionTaskDetail'
import { SidebarProvider } from './lib/sidebar-context'
import './index.css'

export default function App() {
  return (
    <SidebarProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/my-apps" replace />} />
        <Route path="/my-apps" element={<MyApps />} />
        <Route path="/my-apps/:appId" element={<MyAppDetail />} />
        <Route path="/apps" element={<CompanyApps />} />
        <Route path="/apps/:appId" element={<AppDetail />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/marketplace/:appId" element={<MarketplaceDetail />} />
        <Route path="/champion-tasks" element={<ChampionTasks />} />
        <Route path="/champion-tasks/:taskId" element={<ChampionTaskDetail />} />
        <Route path="*" element={<Navigate to="/my-apps" replace />} />
      </Routes>
    </BrowserRouter>
    </SidebarProvider>
  )
}
