export type LocationResponse = {
  current_country_id: number
  locations: Location[]
}

export interface Location {
  id: number
  title: string
  content: string
  opened: boolean
  mask: Permission
  towel: Permission
  fountain: Permission
  locker_room: Permission
  schedules: Schedule[]
}

type Schedule = {
  weekdays: string
  hour: string
}

export type Permission = 'required' | 'closed' | 'partial' | 'allowed' | 'recommended' | 'not_allowed'