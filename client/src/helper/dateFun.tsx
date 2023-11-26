import { format, getDate, getMonth, getYear, parseISO } from "date-fns"
export const getDayMonthAndYear = (time:string)=>{
    const dateObj =  parseISO(time)
    const  year = format(dateObj,'yyyy');
    const  month = format(dateObj,"MMMM");
    const day = format(dateObj,"dd");
    return `${day} ${month},  ${year}`
}