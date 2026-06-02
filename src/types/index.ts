export interface TaskStep {
  id: string
  title: string
  completed: boolean
}

export interface InstructionStep {
  id: string
  title: string
  subSteps: string[]
}

export interface CommonIssue {
  question: string
  answer: string
}

export interface ChampionTaskItem {
  id: string
  appId: string
  appName: string
  taskType: 'onboarding' | 'offboarding'
  userName: string
  userEmail: string
  userJobTitle: string
  userDepartment: string
  dueDate: string
  steps: TaskStep[]
  instructions: InstructionStep[]
  commonIssues: CommonIssue[]
}

export type AppStatus = 'active' | 'configuring' | 'inactive'
export type ProvisioningType = 'champion' | 'automatic' | 'saml'
export type ChampionRole = 'primary' | 'backup'
export type TaskStatus = 'completed' | 'overdue' | 'pending'
export type TaskType = 'onboarding' | 'offboarding'
export type EntityType = 'organization' | 'department' | 'role'
export type ViewMode = 'grid' | 'list'

export interface Champion {
  id: string
  name: string
  email: string
  role: ChampionRole
}

export interface AppUser {
  id: string
  name: string
  email: string
  site: string
  jobTitle: string
  departments: string[]
}

export interface ChampionTask {
  id: string
  type: TaskType
  status: TaskStatus
  championName: string
  userName: string
  date: string
}

export interface AppliesTo {
  id: string
  name: string
  type: EntityType
}

export interface App {
  id: string
  name: string
  vendor: string
  logoColor: string
  logoInitials: string
  status: AppStatus
  primaryChampion: string
  userCount: number
  lastSync: string
  provisioning: ProvisioningType
  appliesTo: AppliesTo[]
  recentTasks: ChampionTask[]
  champions: Champion[]
  users: AppUser[]
  description?: string
  categories?: string[]
  overviewText?: string
  appUrl?: string
  supportUrl?: string
  pricing?: string
  builtBy?: string
  resources?: Array<{ label: string; url: string }>
  isTopChoice?: boolean
  integration?: {
    provisioning: string
    authentication: string
    setupTime: string
    planRequired: string
  }
  howItWorks?: Array<{
    type: 'scim' | 'champion'
    label: string
    description: string
  }>
}
