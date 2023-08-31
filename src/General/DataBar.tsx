import { Box, Card, Paper, Typography } from "@mui/material";
import { siteData, userData } from "../assets/interfaces/General";
import React, { useState, useEffect } from "react";


const DataBar: React.FC = () => {
    const brokenKettleData : userData = {
        username: "brokenKettle",
        factorPoints: 2000,
        invitations: 9,
        seedingCount: 1300,
        downloadingCount: 10,
        seedAmount: 12123123,
        downloadAmount: 392133,
        factorPerHour: 90
    };

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate()+10);

    const freeleech: siteData = {
        type: "FREELEECH",
        color: "lightgreen",
        endDate: tomorrow
    };


    const SiteDataCounter: React.FC<siteData> = ({type, color, endDate}) => {
        const [timeDifference, setTimeDifference] = useState<number>(endDate.getTime() - (new Date()).getTime());
        useEffect(() => {
            const interval = setInterval(() => {
              setTimeDifference(endDate.getTime() - new Date().getTime());
            }, 1000);
        
            return () => clearInterval(interval);
          }, [endDate]);
          const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
          const hours = Math.floor(
            (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        
        
        return (
            <Box display="flex" flexDirection="column" justifyContent="center" textAlign="center">
                <Typography variant="body2" fontWeight="bold" color={color}>{type}</Typography>
                <Typography fontSize="small" variant="body2">{`${days}:${hours}:${minutes}:${seconds}`}</Typography>
            </Box>
        );

    };

    return (
        <Paper sx={{display: "flex", flexDirection: "row", height: 70}}>
            {/* freeleech card */}
            <Card sx={{
                display: "flex",
                flexDirection: "row",
                flex: 1
            }}>
                    <Typography>hello</Typography>
                    <Typography>hello</Typography>
                    <Typography>hello</Typography>
                    <Typography>hello</Typography>
            </Card>

            <Card sx={{
                display: "flex",
                flexDirection: "row",
                flex: 1,
                gap: 2
            }}>
                <SiteDataCounter {...freeleech} />
                <SiteDataCounter {...freeleech} />
                <SiteDataCounter {...freeleech} />
                <SiteDataCounter {...freeleech} />
                <SiteDataCounter {...freeleech} />
            </Card>
        </Paper>
    );
};

export default DataBar;