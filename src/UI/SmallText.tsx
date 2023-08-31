import { Typography, TypographyProps } from "@mui/material"

interface smallTextProps extends TypographyProps {
    bold? : boolean | undefined 
};

const SmallText : React.FC<smallTextProps> = ({children, bold, ...rest}) => (
    <Typography variant="body2" fontWeight={bold ? "bold" : "regular"} {...rest}>
        {children}
    </Typography>
    );

export default SmallText;
