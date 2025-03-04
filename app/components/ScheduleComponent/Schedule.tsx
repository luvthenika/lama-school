'use client'
import { generateSchedule } from '@/lib/utils/schedule/schedule';
import { useState } from 'react';
import { AppButton } from '../App-Button/AppButton';
import { handleWeekIncrement , handleWeekDecrement, formatDateToString } from '@/lib/date/Dates';
import { Box, BoxProps } from '@mui/material';

type ScheduleProps = {
    daysNumber?: number;
    hoursNumber?: number; 
    date?: Date;
    weekHeaderBgColor?: string;
    weekHeaderTextColor?: string;
    hourColumnBgColor?: string;
    hourColumnTextColor?: string;
    data?: any[];
  };
  const Schedule: React.FC<ScheduleProps> = ({
    daysNumber = 5,
    hoursNumber = 8,
    date = new Date(),
    weekHeaderBgColor = "#f0f0f0",
    weekHeaderTextColor = "#333",
    hourColumnBgColor = "#fff",
    hourColumnTextColor = "#000",
    data = [],
  }) => {
    const [currentDate, setCurrentDate] = useState<Date>(new Date());
    const headers = generateSchedule(daysNumber, hoursNumber,currentDate)
    return (
        <>
      <div>
      <AppButton icon={true} iconName={'ArrowBackIosIcon '} text={''}  handleClick={() => setCurrentDate(prev => handleWeekDecrement(prev))}></AppButton>
      <span>{formatDateToString(currentDate)}</span>
      <AppButton icon={true} iconName={'ArrowForwardIosIcon '} text={''}  handleClick={() => setCurrentDate(prev => handleWeekIncrement(prev))}></AppButton>
    </div>
     <Box sx={{ display: 'grid',gridTemplateColumns: '0.5fr repeat(5, 1fr)' }}>
  {headers}
</Box>
</>
        
    )
    
  };

export default Schedule


