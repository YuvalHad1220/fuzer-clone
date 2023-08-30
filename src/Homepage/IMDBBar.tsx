import { Box, CircularProgress, Divider, Fab, Paper, Typography } from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import React, { useRef, useState } from "react";
import { ImageLoader } from "../assets/interfaces/Image";
// import axios from "axios";

const scrollSteps = 10;
const scrollSpeed = 70;


// IDEA: simplify the code
const LoadableImage: React.FC<ImageLoader> = ({imageURL, height, width, paddingY}) => {
    const [isImageLoaded, setImageLoaded] = useState<boolean>(false);
    const onImageLoad = () => setImageLoaded(true); 
    const containerHeight = height + (paddingY * 2);
    const imageHeight = height - (paddingY * 2);
    const containerSX = {
        display: "flex", 
        flexDirection:"row", 
        alignContent: "center", 
        alignItems: "center", 
        paddingY: paddingY, 
        height: containerHeight, 
        minWidth: width
        };
    return (
        <Box sx={containerSX}>
            {!isImageLoaded && <CircularProgress/>}
            <img style={{display: isImageLoaded ? "block" : "none", height: imageHeight}} src={imageURL} onLoad={onImageLoad}/>
        </Box>
    );
}

const IMDBBar: React.FC = () => {
    const scrollableBox = useRef<HTMLElement>();

    let scrollInterval: NodeJS.Timeout;

    const itemList = Array.from({ length: 20 }, (_) => "https://m.media-amazon.com/images/M/MV5BMDgxOTdjMzYtZGQxMS00ZTAzLWI4Y2UtMTQzN2VlYjYyZWRiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg");

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
            <Paper sx={{position: 'relative' }}>
                <Typography textAlign="center" fontWeight="bold">מומלצים</Typography>
                <Divider />
                <Fab size="small" color="primary" onMouseEnter={() => scroll("left")} onMouseLeave={stopScroll} aria-label="גלול שמאלה" sx={{position: "absolute", top: "50%", right: 8, transform: "translateY(-50%)"}}><ChevronLeftIcon/></Fab>
                <Fab size="small" color="primary" onMouseEnter={() => scroll("right")} onMouseLeave={stopScroll} aria-label="גלול ימינה" sx={{position: "absolute", top: "50%", left: 8, transform: "translateY(-50%)" }}><ChevronRightIcon/></Fab>
                <Box
                    ref={scrollableBox}
                    display="flex"
                    flexDirection="row"
                    gap={1.5}
                    sx={{ overflowX: 'hidden', scrollBehavior: 'smooth', paddingX: 7}}>
                    {itemList.map((item, i) =>  <LoadableImage key={i} height={200} width={133} imageURL={item} paddingY={5} />)}
                </Box>
            </Paper>
            // </>


    );
};

export default IMDBBar;