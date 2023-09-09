import { Box, Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, styled } from "@mui/material";
import { SummarizedPost } from "../assets/interfaces/Forum";

const StyledTableCell = styled(TableCell)({
    padding: 0,
    fontSize: 14,
    textAlign:"center",
});
const LatestPostsTable: React.FC = () => {

    const SummarizedPosts: Array<SummarizedPost> = [
        {
            title: "עזרה בבקשה",
            poster: "RonPeled",
            postDate: new Date(),
            views: 1200,
            commentCount: 0,
            latestCommentDate: new Date(),
            latestCommentPoster: "Roei"

        }
    ] ;


    const post = SummarizedPosts[0];
    
    const head = (
        <TableHead>
            <TableRow>
                <StyledTableCell width="10%"><Typography fontWeight="bold">סוג</Typography></StyledTableCell>
                <StyledTableCell width="40%"><Typography fontWeight="bold">שם האשכול</Typography></StyledTableCell>
                <StyledTableCell width="20%"><Typography fontWeight="bold">תגובה אחרונה</Typography></StyledTableCell>
                <StyledTableCell width="10%"><Typography fontWeight="bold">תגובות</Typography></StyledTableCell>
                <StyledTableCell width="10%"><Typography fontWeight="bold">צפיות</Typography></StyledTableCell>
            </TableRow>
        </TableHead>
    );
    const formattedDate = post.postDate.toLocaleDateString("he-il");
    const formattedTime = post.postDate.toLocaleTimeString("he-il", {hour: "2-digit", minute: "2-digit"});

    const row = (
        <TableRow>
        <StyledTableCell width="10%">

        </StyledTableCell>
            <StyledTableCell width="40%">
                        <Typography fontWeight="bold">קונה ביקורת לעסק - דקה מזמנכם - מיליון נקודות 100000</Typography>
                        <Typography variant="body2" color="gray" display="inline">פורסם ע"י</Typography> 
                        <Typography variant="body2" color="salmon" display="inline" fontWeight="bold"> {post.poster} </Typography>
                        <Typography variant="body2" color="gray" display="inline">{`בתאריך ${formattedDate} בשעה ${formattedTime}`}</Typography>
            </StyledTableCell>
            <StyledTableCell width="20%">
                    <Typography variant="body2">{new Date().toLocaleString("he-IL", {year:"2-digit", month:"2-digit", day:"2-digit", hour: "2-digit", minute: "2-digit"})}</Typography>
                    <Typography variant="body2" display="inline">ע"י </Typography>
                    <Typography variant="body2" display="inline" color="cyan" fontWeight="bold">{post.latestCommentPoster}</Typography>
            </StyledTableCell>
            <StyledTableCell width="10%">
            <Typography>{post.commentCount}</Typography>
            </StyledTableCell>
            <StyledTableCell width="10%">
            <Typography>{post.views}</Typography>
            </StyledTableCell>
        </TableRow>


    );
    const body = (
        <TableBody sx={{"&:last-child": {borderBottom: 0}}}>
            {row}
            {row}
            {row}
            {row}
        </TableBody>
    );


    return (
        <Box component={Paper} sx={{display: "flex", flexDirection: "column", textAlign: "center"}}>
            <Typography fontWeight="bold">חדש מהפורומים</Typography>
            <Divider />
            <TableContainer>
                <Table>
                    {head}
                    {body}
                </Table>
            </TableContainer>
        </Box>
    );
}

export default LatestPostsTable;