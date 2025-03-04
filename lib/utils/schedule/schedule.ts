'use client'
import { createElement, useEffect, useState } from "react";
import { generateDaysHeader, generateEmptySlot, generateHoursHeader, generateScheduleSlots, generateScheduleSlotsWithLesson, } from '../../../app/components/ScheduleSlot/ScheduleItem';
import  LessonCard  from "../../../app/components/LessonCard/LessonCard";
import { ScheduleSlotsColor } from "@/app/constants/slotsColors";
import { days, generateHoursArray } from "./generateSlotsData";
import { DayEnum } from "@/app/enums/daysOfTheWeek";
import { weekDays } from "@/app/constants/daysOfWeek";
import { lessons } from "@/lib/lessons/mockLesson";
import moment from 'moment' // require
moment().format(); 
export const generateSchedule = (daysNumber: number, hoursNumber: number , currentDate : Date) => {
    const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

    const handleResize = () => {
        setScreenWidth(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);

    const headers = [];
    const finalDaysNumber = daysNumber + 1
    let daysCount = 0;
    let hoursCount = 0;
    let daysRowCount = 0;
    let hoursColumnCount = 0;
    let filteredLessons = lessons.filter(lesson => {
        return moment(lesson.date).isoWeek() === moment(currentDate).isoWeek();
    });
    
    console.log(filteredLessons)
    const hours = generateHoursArray(8 , 17)
    let day = ''
    const numberOfSlots = (daysNumber + 1) * hoursNumber
    let lessonsCount = 0;
    if (daysNumber === 0 || hoursNumber === 0) return []
    for (let i = 0; i < numberOfSlots; i++) {
        console.log(lessonsCount)
        if (i === 0) {
            let slot = generateEmptySlot(ScheduleSlotsColor.emptySlot, i)
            headers.push(
                slot
            )
        }
        else if (i < finalDaysNumber) {
            let slot = generateDaysHeader(ScheduleSlotsColor.columnHeader ,i, days[daysCount]  )
            headers.push(
                slot
            )
            daysCount++;
            day = days[daysCount]
        }
        else if(i % finalDaysNumber === 0){
            let slot = generateHoursHeader(ScheduleSlotsColor.rowHour , i, hours[hoursCount])
            headers.push(
                slot
            )
            hoursCount++            
        }
        else if(weekDays[new Date(filteredLessons[lessonsCount]?.date)?.getDay()] === days[daysRowCount] && hours[hoursColumnCount] === filteredLessons[lessonsCount].startTime && currentDate.getFullYear() === new Date(filteredLessons[lessonsCount].date).getFullYear() && currentDate.getMonth() === new Date(filteredLessons[lessonsCount].date).getMonth()){
            let slot = generateScheduleSlotsWithLesson(ScheduleSlotsColor.slot, i, LessonCard , {
                lessonId: i,
                lessonName: filteredLessons[lessonsCount].name,
                lessonStartTime: filteredLessons[lessonsCount].startTime,
                lessonEndTime: filteredLessons[lessonsCount].endTime
            })
            headers.push(
                slot
            )
            daysRowCount++;
            lessonsCount++;
        }
        else {
            let slot = generateScheduleSlots(ScheduleSlotsColor.slot, i)
            headers.push(
                slot
            )
            daysRowCount++;
        }
        if(daysRowCount === days.length - 1){
            daysRowCount = 0;
            hoursColumnCount++;

        }
    }

    return headers;
};
