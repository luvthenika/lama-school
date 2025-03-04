export const generateHoursArray = (from : number = 0, to : number = 24) => {
    return Array.from({ length: 24 }, (_, i) => 
        `${String(i).padStart(2, '0')}:00`
      ).slice(from , to)
}
export const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
