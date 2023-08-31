import { Box, BoxProps } from "@mui/material";

interface MultiTextWrapperProps extends BoxProps {
    ltr? : boolean | undefined 
};


const MultiTextWrapper : React.FC<MultiTextWrapperProps> = ({children, ltr} : MultiTextWrapperProps)  => (
    <Box display="flex" dir = {ltr ? "ltr" : "rtl"} alignItems="center" gap={0.5}>
        {children}
    </Box>
    );

export default MultiTextWrapper;
