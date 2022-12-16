import './App.css';
import SearchAppBar from './components/SearchAppBar';
import BasicCard from './components/JobCard';
import jobs from './jobs.json';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/system';
import {ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { IconButton } from '@mui/material';
import { useState } from 'react';
import BasicPagination from './components/BasicPagination';


function App() {

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

  const [theme, setTheme] = useState(true);

  const icon = !theme ? <Brightness7Icon /> :<Brightness4Icon />
  const appliedTheme = createTheme(theme ? darkTheme : lightTheme);

  const [pageSize, setPageSize] = useState(5);
  const [page, setPage] = useState(1);
  const [searchString, setSearchString] = useState("")
  const filteredJobs = jobs
  .filter(job => (job.title.toLowerCase().includes(searchString.toLowerCase())))
  
  return (
    <ThemeProvider theme={appliedTheme}>
      <CssBaseline />
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
            <Grid item xs={12} sm={6} md={4} key={job.id}>
              <BasicCard key={job.id} job ={job}/>
            </Grid>
          ))}
        </Grid>
      </Container>     
      <BasicPagination jobs={filteredJobs} pageSize = {pageSize} setPage = {setPage}/> 
    </ThemeProvider>        
  );
}

export default App;
