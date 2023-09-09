import { Box, Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, styled } from "@mui/material";

const StyledTableCell = styled(TableCell)({
    padding: 0,
    fontSize: 14,
    textAlign:"center",
});
const LatestPostsTable: React.FC = () => {

    
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
    const username = "Ronpeled";
    const date = new Date();

    const formattedDate = date.toLocaleDateString("he-il");
    const formattedTime = date.toLocaleTimeString("he-il", {hour: "2-digit", minute: "2-digit"});

    const row = (
        <>
        <StyledTableCell width="10%">

        </StyledTableCell>
            <StyledTableCell width="40%">
                <Box display="flex" flexDirection="row">
                    <Box>
                        <Typography fontWeight="bold">קונה ביקורת לעסק - דקה מזמנכם - מיליון נקודות 100000</Typography>
                        <Typography variant="body2" color="gray">{`פורסם ע"י ${username}, בתאריך ${formattedDate} בשעה ${formattedTime}`}</Typography>
                    </Box>
                </Box>
            </StyledTableCell>
            <StyledTableCell width="20%">
                <Box display="flex" flexDirection="column">
                    <Typography variant="body2">{new Date().toLocaleDateString()}</Typography>
                    <Typography variant="body2">{new Date().toLocaleTimeString()}</Typography>
                    <Typography variant="body2">ע"י Yuvalhad12</Typography>
                </Box>
            
            </StyledTableCell>
            <StyledTableCell width="10%">
            
            </StyledTableCell>
            <StyledTableCell width="10%">
            
            </StyledTableCell>
        </>


    );
    const body = (
        <TableBody>
            <TableRow>
                {row}
            </TableRow>
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