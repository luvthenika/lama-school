export const handleWeekIncrement = (date: Date) => {
    const newDate = new Date(date)
    newDate.setDate(newDate.getDate() + 7);
    return newDate; 
};

export const handleWeekDecrement = (date: Date) => {
    const newDate = new Date(date)
    newDate.setDate(newDate.getDate() - 7);
    return newDate; 
};

export const formatDateToString = (date : Date) => {
    const today = new Date();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const formattedDate = date.getDate();
    return `${month}/${formattedDate}/${year}`;
  }
