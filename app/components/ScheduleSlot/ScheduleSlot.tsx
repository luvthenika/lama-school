import { ScheduleSlotsColor } from "@/app/constants/slotsColors";
import { Box, BoxProps, Typography } from "@mui/material";
import { allowedColors } from "@/app/constants/colors";
interface ItemProps extends BoxProps {
    color: ScheduleSlotsColor,
    index: number,
    text?: string | null | undefined,
   // date: Date | null | undefined
}

export const Item = (props: ItemProps) => {
    const {  color , index, text, children } = props;
    return (
      <Box key={index} className={`h-24 w-full ${allowedColors[color]} || 'bg-gray-100'} border text-xs md:text-lg align-center flex items-center justify-center cursor-pointer relative z-0`}>
        <Typography variant="h6" className="text-lg font-semibold text-gray-500">{text || ''}</Typography>
            {children}
        </Box>
    )
}