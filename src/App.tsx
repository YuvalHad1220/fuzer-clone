import { Box } from "@mui/system"
import CompactTable from "./Homepage/CompactTable"
import IMDBBar from "./Homepage/IMDBBar"

function App() {

  return (
    <Box display="flex" flexDirection="column" gap={2} padding={2}>
          <Box display="flex" flexDirection="row" gap={2} padding={2}>
            <CompactTable />
            <CompactTable />
          </Box>


      <IMDBBar/>
    </Box>

  )
}

export default App
