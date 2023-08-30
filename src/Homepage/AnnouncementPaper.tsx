import { Box, Divider, Paper, Typography } from '@mui/material';
import { MuiMarkdown } from 'mui-markdown';
import { Announcement } from '../assets/interfaces/Announcement';

const AnnouncementPaper: React.FC<Announcement> = ({title, markdownText, postDate}) => {
    const formattedDate = postDate.toLocaleDateString("he-IL");
    return (
        <Box component={Paper} sx={{display: "flex", flexDirection: "column", textAlign: "center"}}>
            <Typography fontWeight="bold">{title}</Typography>
            <Divider />
            <MuiMarkdown>{markdownText}</MuiMarkdown>
            <Typography variant='body2' textAlign="left" paddingLeft={3} paddingBottom={1}>פורסם בתאריך: {formattedDate}</Typography>
        </Box>
    );
};

export default AnnouncementPaper;