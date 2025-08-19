import { Box, Grid} from '@mui/material'
import React from 'react'

const CustomerPage = () => {
  return (
    <div>
irgiuhiodfohjory
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 6, md: 8 }}>
          <p>xs=6 md=8</p>
        </Grid>
        <Grid size={{ xs: 6, md: 4 }}>
          <p>xs=6 md=4</p>
        </Grid>
      </Grid>
    </Box>
    </div>
  )
}

export default CustomerPage