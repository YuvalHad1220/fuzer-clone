import { Box, Button, Paper, SvgIcon, Typography } from "@mui/material";
import ChatIcon from '@mui/icons-material/Chat';
import SearchIcon from '@mui/icons-material/Search';
import HouseIcon from '@mui/icons-material/House';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import ForumIcon from '@mui/icons-material/Forum';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CasinoIcon from '@mui/icons-material/Casino';
import QuizIcon from '@mui/icons-material/Quiz';
import BarChartIcon from '@mui/icons-material/BarChart';
import BadgeIcon from '@mui/icons-material/Badge';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import RssFeedIcon from '@mui/icons-material/RssFeed';

const Navbar : React.FC = () => {

    interface IconWrapperInterface {
        IconComp: typeof SvgIcon,
        text: string
    }

    const IconWrapper = ({IconComp, text}: IconWrapperInterface) => (
        <Box sx={{display: "flex", flexDirection: "column", textAlign: "center", justifyContent:"center"}}>
            <Button><IconComp fontSize="large"/></Button>
            <Typography fontSize={12}>{text}</Typography>
        </Box>
    );

    const mainInfo = (
        <Box display="flex" flexDirection="row" gap={1}>
            <IconWrapper IconComp={HouseIcon} text="בית" />
            <IconWrapper IconComp={SearchIcon} text="חיפוש" />
            <IconWrapper IconComp={CrisisAlertIcon} text="בקשות" />
            <IconWrapper IconComp={RssFeedIcon} text="RSS" />
            <IconWrapper IconComp={ForumIcon} text="פורם"/>
            <IconWrapper IconComp={ChatIcon} text="צ'אט" />
            <IconWrapper IconComp={ShoppingCartIcon} text="חנות"/>
            <IconWrapper IconComp={CasinoIcon} text="הימורים"/>
            <IconWrapper IconComp={QuizIcon} text='שו"ת'/>
            <IconWrapper IconComp={BarChartIcon} text="סטטיסטיקה"/>
            <IconWrapper IconComp={BadgeIcon} text="צוות"/>
            <IconWrapper IconComp={CloudUploadIcon}  text="העלאה"/>
            <IconWrapper IconComp={AdminPanelSettingsIcon} text="ניהול"/>
        </Box>
    );

    // const onNSFWClick = () => setNsfw(prev => !prev);
    // const secondaryInfo = (
    //     <Box>
    //         <Button><DiscordIcon/></Button>
    //         <Button onClick={onNSFWClick} sx={{bgcolor: nsfw ? "primary" : "gray", color: nsfw ? "yellow" : "gray"}}><EighteenUpRatingIcon /></Button>
    //     </Box>
    // );


    return (
        <Paper sx={{height: 90, display: "flex"}} >
            {mainInfo}
        </Paper>
    );
};

export default Navbar;