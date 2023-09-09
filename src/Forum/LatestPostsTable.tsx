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
                <StyledTableCell width="10%">סמל</StyledTableCell>
                <StyledTableCell width="40%">שם האשכול</StyledTableCell>
                <StyledTableCell width="20%">תגובה אחרונה</StyledTableCell>
                <StyledTableCell width="10%">תגובות</StyledTableCell>
                <StyledTableCell width="10%">צפיות</StyledTableCell>
            </TableRow>
        </TableHead>
    );

    const body = (
        <TableBody>
            <TableRow>
            <StyledTableCell width="10%">בדיחה</StyledTableCell>
                <StyledTableCell width="40%">לא אני מת</StyledTableCell>
                <StyledTableCell width="20%">תגובה אחרונה</StyledTableCell>
                <StyledTableCell width="10%">תגובות</StyledTableCell>
                <StyledTableCell width="10%">צפיות</StyledTableCell>
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