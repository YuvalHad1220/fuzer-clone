import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import FilePresentIcon from '@mui/icons-material/FilePresent';
import OfflinePinIcon from '@mui/icons-material/OfflinePin';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import { styled } from "@mui/system";
import { CompactTorrentData } from "../assets/interfaces/Torrent";

const textNormalize = (text: string) => {
    const maxLength = 60;
    return text.length < maxLength ? text : text.slice(0, maxLength - 3) + "...";
};

const StyledTableCell = styled(TableCell)({
    padding: 0,
    fontSize: 14,
    textAlign:"center",
    
});

const CompactTable : React.FC = () => {
    const rows : Array<CompactTorrentData> = [
        {
            name: "ספיידרמן: ברחבי ממדי העכביש - מדובב | Spider-Man Across The Spider-Verse 2023 HebDub 1080p WEBRip x264-Silver007            ",
            downloadLink: "test",
            size: "20 GB",
            completed: 2,
            uploaders: 10,
            downloaders: 0
        }
        ,
        {
            name: "yuval",
            downloadLink: "test",
            size: "20 GB",
            completed: 2,
            uploaders: 10,
            downloaders: 0
        }
        ,
        {
            name: "yuval",
            downloadLink: "test",
            size: "20 GB",
            completed: 2,
            uploaders: 10,
            downloaders: 0
        }
        ,
        {
            name: "yuval",
            downloadLink: "test",
            size: "20 GB",
            completed: 2,
            uploaders: 10,
            downloaders: 0
        }
        ,
        {
            name: "yuval",
            downloadLink: "test",
            size: "20 GB",
            completed: 2,
            uploaders: 10,
            downloaders: 0
        }
        ,
        {
            name: "yuval",
            downloadLink: "test",
            size: "20 GB",
            completed: 2,
            uploaders: 10,
            downloaders: 0
        }
        ,
        {
            name: "yuval",
            downloadLink: "test",
            size: "20 GB",
            completed: 2,
            uploaders: 10,
            downloaders: 0
        }
        ,
        {
            name: "yuval",
            downloadLink: "test",
            size: "20 GB",
            completed: 2,
            uploaders: 10,
            downloaders: 6
        }
        ,
        {
            name: "yuval",
            downloadLink: "test",
            size: "20 GB",
            completed: 2,
            uploaders: 10,
            downloaders: 0
        }
        ,
        {
            name: "yuval",
            downloadLink: "test",
            size: "20.23GB",
            completed: 2,
            uploaders: 10,
            downloaders: 0
        }
    ];
    const Head = (
        <TableHead>
            <TableRow>
                <StyledTableCell sx={{textAlign: "left"}}>טורנטים חדשים</StyledTableCell>
                <StyledTableCell>DL</StyledTableCell>
                <StyledTableCell><FilePresentIcon/></StyledTableCell>
                <StyledTableCell><OfflinePinIcon color="primary"/></StyledTableCell>
                <StyledTableCell><FileUploadIcon color="error"/></StyledTableCell>
                <StyledTableCell><FileDownloadIcon color="success"/></StyledTableCell>
            </TableRow>
        </TableHead>
    );

    const Body = (
        <TableBody>
            {rows.map((row, i) => {
                return (
                    <TableRow key={i}>
                        <StyledTableCell sx={{textAlign: "left"}}>{textNormalize(row.name)}</StyledTableCell>
                        <StyledTableCell><SaveAltIcon /></StyledTableCell>
                        <StyledTableCell>{row.size}</StyledTableCell>
                        <StyledTableCell>{row.completed}</StyledTableCell>
                        <StyledTableCell sx={{color: row.uploaders > 0 ? "lightgreen" : "gray"}}>{row.uploaders}</StyledTableCell>
                        <StyledTableCell sx={{color: row.downloaders > 0 ? "lightblue" : "gray"}}>{row.downloaders}</StyledTableCell>
                    </TableRow>
                )
            })}
        </TableBody>
    );



    return (
    <TableContainer component={Paper}>
        <Table>
            {Head}
            {Body}
        </Table>
    </TableContainer>
    );

};

export default CompactTable;