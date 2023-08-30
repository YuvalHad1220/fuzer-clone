import { Box, Fab, Paper } from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useRef } from "react";

const scrollSteps = 10;
const scrollSpeed = 70;

const IMDBBar: React.FC = () => {
    const scrollableBox = useRef<HTMLElement>();

    let scrollInterval: NodeJS.Timeout;

    const itemList = Array.from({ length: 20 }, (_, index) => `item ${index + 1}`);

    const scroll = (dir: string) => {
        scrollInterval = setInterval(() => {
            if (!scrollableBox || !scrollableBox.current)
            return;
            if (dir === "left")
                scrollableBox.current.scrollLeft -= scrollSteps;

            else if (dir === "right")
                scrollableBox.current.scrollLeft += scrollSteps;

        }, scrollSpeed)

    };

    const stopScroll = () => {
        clearInterval(scrollInterval)
    }

        return (
            // <>
            // <Box display="flex" flexDirection="row" justifyContent="space-between" position="relative" top="100px" zIndex={2} >
            //     <Fab size="small" color="primary" onMouseEnter={() => scroll("right")} onMouseLeave={stopScroll} aria-label="גלול ימינה"><ChevronRightIcon/></Fab>
            //     <Fab size="small" color="primary" onMouseEnter={() => scroll("left")} onMouseLeave={stopScroll} aria-label="גלול שמאלה"><ChevronLeftIcon/></Fab>
            // </Box>
            <Paper sx={{position: 'relative' }}>
                <Fab size="small" color="primary" onMouseEnter={() => scroll("left")} onMouseLeave={stopScroll} aria-label="גלול שמאלה" sx={{position: "absolute", top: "50%", right: 8, transform: "translateY(-50%)"}}><ChevronLeftIcon/></Fab>
                <Fab size="small" color="primary" onMouseEnter={() => scroll("right")} onMouseLeave={stopScroll} aria-label="גלול ימינה" sx={{position: "absolute", top: "50%", left: 8, transform: "translateY(-50%)" }}><ChevronRightIcon/></Fab>
                <Box
                    ref={scrollableBox}
                    display="flex"
                    flexDirection="row"
                    gap={4}
                    sx={{ overflowX: 'hidden', scrollBehavior: 'smooth', paddingX: 7}}>
                    {itemList.map((item, i) => <h1 key={i}>{item}</h1>)}
                </Box>
            </Paper>
            // </>


    );
};

export default IMDBBar;