import { Ref, ref } from "vue"
import { Location, LocationResponse } from "../appointment/types"
import { SCHEDULE, getCurrentDay, createDate } from "../common/logic/date"

const filterByPeriod = (locations: Location[], period: string) => {
  const result = locations.filter(location => {
    if (!location.schedules)
      return true

    const day = new Date().getDay()
    const currentDay = getCurrentDay(day)

    for (let i = 0; i < location.schedules.length; i++) {
      const schedule = location.schedules[i]

      if (schedule.weekdays === currentDay && schedule.hour !== 'Fechada') {
        const filterHour = SCHEDULE[period]
        const [hourStart, hourEnd] = schedule.hour.split(' às ')

        const dateStart = createDate(hourStart)
        const dateEnd = createDate(hourEnd)
        
        const dateStartFilter = createDate(filterHour.start)
        const dateEndFilter = createDate(filterHour.end)
        if (dateStartFilter <= dateStart && dateEndFilter >= dateEnd)
          return true
      }
      else
        return false
    }

  })

  return result
}

export async function useAppointments(period: string = '', showClosed: boolean = false): Promise<Ref<Location[]>> {

  const locations = ref<Location[]>([])
  const url = 'https://test-frontend-developer.s3.amazonaws.com/data/locations.json'

  const response = await fetch(url)
  const result: LocationResponse = await response.json()

  locations.value = showClosed
    ? result.locations
    : result.locations.filter(location => location.opened)

  if (period) {
    locations.value = filterByPeriod(locations.value, period)
    return locations;
  }

  return locations;

}