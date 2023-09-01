import { Box } from "@mui/system"
import CompactTable from "./Homepage/CompactTable"
import IMDBBar from "./Homepage/IMDBBar"
import AnnouncementPaper from "./Homepage/AnnouncementPaper"
import DataBar from "./UI/DataBar";
import MarkdownEditor from "./UI/MarkdownEditor";
import Navbar from "./UI/Navbar";
function App() {
  const text = 
  `
  סוף החופש גדול מתקרב וכמו בכל שנה אנחנו מכניסים את האתר למצב פריליץ' בכדי שתהנו מהחופשה ואפילו פעמיים!
  
  🟨זכרו להמשיך ולשתף, חוקי השיתוף חלים כל הזמן🟨
  `;  
  return (
    <Box display="flex" flexDirection="column" gap={2} padding={6}>
      <Navbar />
      <DataBar />

      <Box display="flex" flexDirection="row" gap={2}>
        <CompactTable />
        <CompactTable />
      </Box>


      <IMDBBar/>
      <AnnouncementPaper title="היי! חופש שמח!" markdownText={text} postDate={new Date()} />
      <MarkdownEditor />
    </Box>

  )
}

export default App
