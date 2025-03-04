import { Button, ButtonProps } from "@mui/material";
import Icon from '@mui/material/Icon'

interface AppButtonProps extends ButtonProps {
  icon: boolean,
  iconName: string,
  text: string,
  handleClick(): void;
}

export const AppButton: React.FC<AppButtonProps> = ({ children, icon, iconName , text , handleClick}) => {
  return (
    <Button variant="contained" color="primary" onClick={handleClick}>
      {icon && iconName ? <Icon>iconName</Icon> : children}
    </Button>
  );
};
