import React from 'react'
import { Box, Card, CardContent, CardProps, IconButton, Typography } from '@mui/material'
export interface LessonCardProps extends CardProps {
    lessonId : number,
    lessonName : string,
    lessonStartTime: string ,
    lessonEndTime: string
}
const LessonCard :React.FC<LessonCardProps>  = ({ lessonId , lessonName , lessonStartTime , lessonEndTime} ) => {
  return (
    <Card className='flex flex-row bg-purple-300 rounded-lg absolute inset-0 z-10 h-inherit' key={lessonId}>
      <Box className='flex flex-row justify-between'>
        <Box className='flex-1 flex-shrink-0'>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: 'text.secondary' }}
          >
            {lessonName}
          </Typography>
        </Box>
        <Box className='flex-1 flex-shrink-0 flex flex-col'>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: 'text.secondary' }}
          >
            {`${lessonStartTime} - ${lessonEndTime}`}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
        </Box>
      </Box>
    </Card>
  )
}

export default LessonCard
