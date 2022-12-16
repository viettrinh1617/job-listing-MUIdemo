import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Stack';

export default function BasicPagination({jobs,pageSize, setPage}) {
  
  const handlePageChange = (e, p) => {
    setPage(p);
  }

  return (
    <Box spacing={2} sx={{
        pt: 2 ,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
      <Pagination count={Math.ceil(jobs.length/pageSize)} color="secondary" onChange={handlePageChange}/>
    </Box>
  );
}