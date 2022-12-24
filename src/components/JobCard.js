import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Divider, Paper, Chip,  } from '@mui/material';
import ChipsArray from './SkillChip';
import JobModal from './JobModal';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard({job}) {
  return (
    <Card sx={{ minWidth: 275, maxWidth: 500, 
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center'
        }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        </Typography>
        <Typography sx= {{textAlign:'center', fontWeight:'bold', mb:1}} variant="h5" component="div">
          {job.title}
        </Typography>
        <Divider />
        <ChipsArray chipData = {job.skills} /> 
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {job.city}
        </Typography>
        <Typography variant="body2">
          {job.description}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button sx={{mb:2}} variant='contained' size="small">Learn More</Button> */}
        <JobModal job={job} />
      </CardActions>
    </Card>
  );
}
