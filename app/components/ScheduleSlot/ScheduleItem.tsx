import { Item } from "@/app/components/ScheduleSlot/ScheduleSlot"
import { ScheduleSlotsColor } from "@/app/constants/slotsColors";
import React, { ReactNode } from "react";
import { LessonCardProps } from "../LessonCard/LessonCard";

export const generateEmptySlot = (backgroundColor : ScheduleSlotsColor , i : number) => {
    return (
        <Item color={backgroundColor} index={i}></Item>
    )
}

export const generateDaysHeader = (backgroundColor : ScheduleSlotsColor , i : number, text : string) => {
    return (
        <Item color={backgroundColor} text={text} index={i}></Item>
    )
}
export const generateHoursHeader = (backgroundColor : ScheduleSlotsColor , i : number , text : string) => {
    return (
        <Item color={backgroundColor} index={i} text={text}></Item>
    )
}
export const generateScheduleSlots = (backgroundColor: ScheduleSlotsColor, i: number) => {
    return (
        <> <Item color={backgroundColor} index={i}>
            </Item>
           
            </>
        
    )
}
export const generateScheduleSlotsWithLesson = (backgroundColor : ScheduleSlotsColor , i : number , LessonCard : React.ComponentType<LessonCardProps>, props : LessonCardProps) => {
    return (
        <> <Item color={backgroundColor} index={i}>
             <LessonCard {...props}></LessonCard>
            </Item>
           
            </>
        
    )
}
