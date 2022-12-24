import React, { useState, useContext } from 'react';
import Grid from '@mui/material/Grid';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/system';
import { IconButton } from '@mui/material';
import {ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import BasicPagination from './BasicPagination';
import SearchAppBar from './SearchAppBar';
import BasicCard from './JobCard';
import jobs from '../jobs.json';

const lightTheme = {
    palette: {
      mode:'light',
    },
  };

  const darkTheme = {
    palette: {
      mode: 'dark',
    },
  };



function HomePage({ theme, setTheme }) {
  const icon = !theme ? <Brightness7Icon /> :<Brightness4Icon />
  const appliedTheme = createTheme(theme ? darkTheme : lightTheme);

  const [pageSize, setPageSize] = useState(5);
  const [page, setPage] = useState(1);
  const [searchString, setSearchString] = useState("")
  const filteredJobs = jobs
  .filter(job => (job.title.toLowerCase().includes(searchString.toLowerCase())))
    
  return (
    <>
      <SearchAppBar setSearchString = {setSearchString} /> 
      <IconButton sx={{ ml: 1 }} onClick={() => setTheme(!theme)} color="inherit">
        {icon}
      </IconButton>
      <Container sx={{mt:2}}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 12, md: 12, lg:12 }
          }>
          {filteredJobs
            .slice((page - 1)*pageSize, page*pageSize)
            .map(job => (
            <Grid item sx={{display:"flex", alignItems: "stretch"}} xs={12} sm={6} md={4} key={job.id}>
              <BasicCard key={job.id} job ={job}/>
            </Grid>
          ))}
        </Grid>
      </Container>     
      <BasicPagination jobs={filteredJobs} pageSize = {pageSize} setPage = {setPage}/>
      <Outlet />
    </>
  )
}

export default HomePage