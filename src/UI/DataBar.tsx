import { Box, Divider, Grid, Paper, Typography } from "@mui/material";
import { siteData, userData } from "../assets/interfaces/General";
import FileUploadIcon from '@mui/icons-material/FileUpload';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import React, { useState, useEffect, } from "react";
import SmallText from "./SmallText";
import MultiTextWrapper from "./MultiTextWrapper";
import { humanFileSize } from "../assets/helpers/bytesToText";


const DataBar: React.FC = () => {
    const brokenKettleData : userData = {
        username: "brokenKettle",
        role: "Gold user",
        factorPoints: 2000,
        hnr: 213,
        invitations: 9,
        seedingCount: 1300,
        downloadingCount: 10,
        seedAmount: 12123123,
        downloadAmount: 392133,
        factorPerHour: 90,
        messagesAmount: 21
    };

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate()+10);

    const freeleech: siteData = {
        type: "FREELEECH",
        color: "lightgreen",
        endDate: tomorrow
    };

    const CountdownTimer: React.FC<siteData> = ({type, color, endDate}) => {
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

    const userText = (
        <MultiTextWrapper>
            <SmallText bold >ברוך הבא,</SmallText>
            <SmallText bold color="gold">{brokenKettleData.username}</SmallText>
            <SmallText fontSize={10} color="lightbrown">({brokenKettleData.role})</SmallText>
        </MultiTextWrapper>
    );
    const HNR = (
        <MultiTextWrapper ltr>
            <SmallText bold >H&R: </SmallText>
            <SmallText color="red">{brokenKettleData.hnr}</SmallText>
        </MultiTextWrapper>
    );
    const points = (
        <MultiTextWrapper>
            <SmallText bold >נקודות: </SmallText>
            <SmallText color="lightblue">{brokenKettleData.factorPoints}</SmallText>
        </MultiTextWrapper>
    );
    const factor = (
        <MultiTextWrapper>
            <SmallText bold >פקטור: </SmallText>
            <SmallText color="cyan">{brokenKettleData.factorPerHour}</SmallText>
        </MultiTextWrapper>
    );
    const invitations = (
        <MultiTextWrapper>
            <SmallText bold >הזמנות: </SmallText>
            <SmallText>{brokenKettleData.invitations}</SmallText>
        </MultiTextWrapper>
    );

    const uploaded = (
        <MultiTextWrapper>
            <FileUploadIcon color="success" fontSize="small"/>
            <SmallText>{brokenKettleData.seedingCount}</SmallText>
        </MultiTextWrapper>
    );
    const downloaded = (
        <MultiTextWrapper>
            <FileDownloadIcon color="error" fontSize="small"/>
            <SmallText>{brokenKettleData.downloadingCount}</SmallText>
        </MultiTextWrapper>
    );
    const uploadSizeString = humanFileSize(brokenKettleData.seedAmount);
    const uploadSize = (
        <MultiTextWrapper>
            <SmallText>העלאה: </SmallText>
            <SmallText color="lightgreen" bold >{uploadSizeString}</SmallText>
        </MultiTextWrapper>
    );
    const downloadSizeString = humanFileSize(brokenKettleData.downloadAmount);
    const downloadSize = (
        <MultiTextWrapper>
            <SmallText>הורדה: </SmallText>
            <SmallText color="error" bold >{downloadSizeString}</SmallText>
        </MultiTextWrapper>
    );
    const ratioString = (brokenKettleData.seedAmount / brokenKettleData.downloadAmount).toFixed(3);
    const ratio = (
        <MultiTextWrapper>
            <SmallText>יחס: </SmallText>
            <SmallText color="salmon" bold>{ratioString}</SmallText>
        </MultiTextWrapper>
    );
    const bufferString = humanFileSize(brokenKettleData.downloadAmount + 200);
    const buffer = (
        <MultiTextWrapper>
            <SmallText>באפר: </SmallText>
            <SmallText color="yellow" bold>{bufferString}</SmallText>
        </MultiTextWrapper>
    );
    const messages = (
        <MultiTextWrapper>
            <MarkunreadIcon fontSize="small" />
            <SmallText bold>{brokenKettleData.messagesAmount}</SmallText>
        </MultiTextWrapper>
    );

    const userMainData = (
        <Box display="flex" flexDirection="row" gap={1}>
            {userText}
            {HNR}
            {points}
            {factor}
            {invitations}
        </Box>
    );

    const userSecondaryData = (
        <Box display="flex" flexDirection="row" gap={1}>
            {uploaded}
            {downloaded}
            {uploadSize}
            {downloadSize}
            {ratio}
            {buffer}
            {messages}
        </Box>
    );


    const userDataBarProps = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 0.3
    };

    const siteDataBarProps = {
        display: "flex",
        flexDirection: "row",
        overflowX: "auto",
        gap: 2,
    };


    return (
        <Grid component={Paper} container height={60}>
            <Grid item xs={8} component={Box} sx={userDataBarProps} >
                {userMainData}
                {userSecondaryData}
            </Grid>
            <Divider sx={{margin: "-1px"}} orientation="vertical" light />
            <Grid item xs={4} component={Box} sx={siteDataBarProps}>
                <CountdownTimer {...freeleech} />
                <CountdownTimer {...freeleech} />
            </Grid>
        </Grid>


    );
};

export default DataBar;