export const SCHEDULE: schedule = {
  'morning': {
    start: '6h',
    end: '12h'
  },
  'afternoon': {
    start: '12h',
    end: '18h'
  },
  'night': {
    start: '18h',
    end: '23h'
  }
}

interface schedule {
  [key: string]: period
}

interface period {
  start: string
  end: string
}

export const getCurrentDay = (day: number) => {
  switch(day) {
    case 0:
      return 'Dom.';
    case 6:
      return 'Sáb.';
    default:
      return 'Seg. à Sex.'
  } 
}

export const createDate =  (input: string): Date => {
  const genericDate = new Date()
  const currentYear = genericDate.getFullYear()
  const month = genericDate.getMonth()
  const day = genericDate.getDate()

  const match = input.match(/^(\d{1,2})h(\d{2})$/)
  if(match) {
    const hour = parseInt(match[1], 10)
    const minutes = parseInt(match[2], 10)

    return new Date(currentYear, month, day, hour, minutes)
  }
  
  const hour = input.match(/^(\d{1,2})h$/)
  console.log(input)
  console.log(hour)
  const hourInt = parseInt(hour![1], 10)
  return new Date(currentYear, month, day, hourInt, 0)
}