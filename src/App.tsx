import { Box } from "@mui/system"
import CompactTable from "./Homepage/CompactTable"

function App() {

  return (
    <Box display="flex" flexDirection="row" gap={2} padding={2}>
      <CompactTable />
      <CompactTable />
    </Box>
  )
}

export default App
