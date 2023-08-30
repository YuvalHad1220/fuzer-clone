import { Box } from "@mui/system"
import CompactTable from "./Homepage/CompactTable"
import IMDBBar from "./Homepage/IMDBBar"
import AnnouncementPaper from "./Homepage/AnnouncementPaper"

function App() {
  const text = 
  `
  סוף החופש גדול מתקרב וכמו בכל שנה אנחנו מכניסים את האתר למצב פריליץ' בכדי שתהנו מהחופשה ואפילו פעמיים!
  
  🟨זכרו להמשיך ולשתף, חוקי השיתוף חלים כל הזמן🟨
  `;  
  return (
    <Box display="flex" flexDirection="column" gap={2} padding={2}>
          <Box display="flex" flexDirection="row" gap={2} padding={2}>
            <CompactTable />
            <CompactTable />
          </Box>


      <IMDBBar/>
      <AnnouncementPaper title="היי! חופש שמח!" markdownText={text} postDate={new Date()} />
      <AnnouncementPaper title="היי! חופש שמח!" markdownText={text} postDate={new Date()} />
      <AnnouncementPaper title="היי! חופש שמח!" markdownText={text} postDate={new Date()} />
      <AnnouncementPaper title="היי! חופש שמח!" markdownText={text} postDate={new Date()} />
      <AnnouncementPaper title="היי! חופש שמח!" markdownText={text} postDate={new Date()} />
    </Box>

  )
}

export default App
