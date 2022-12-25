import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Divider } from '@mui/material';
import ChipsArray from './SkillChip';

import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../auth/AuthProvider';
import api from "../data/fetchData"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 700,
  width: '80%',
  bgcolor: 'background.paper',
  border: '2px solid white',
  boxShadow: 24,
  p: 4,
};

export default function JobModal({job}) {
  const params = useParams();
  const { signin, user, signout ,isAuthenticated} = useAuth();
  const navigate = useNavigate();

  const [jobOpen, setJobOpen] = React.useState(false);
  
  const handleOpen = () => {
      setJobOpen(isAuthenticated);
      navigate(`/jobs/${job.id}`);
  }
          // { if(isAuthenticated===true){
          //  setOpen(true);
          //  navigate(`/jobs/${job.id}`);
          // } else {
          //   setOpen(false);
          //   navigate(`/jobs/${job.id}`);
            
          // }}
          
  const handleClose = () => {
    setJobOpen(false);
    navigate("/")};

  return (
    <div>
      <Button onClick={handleOpen}>Learn More</Button>
      
        <Modal
        open={jobOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
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
            <Divider />
                <br />
                <Typography variant='body2' >{`Posted on: ${job.postedDate.slice(0,10).toLocaleString()}`}</Typography>            
                <Typography variant='body2'>{`Salary range: $${job.salaryLow.toLocaleString()} - $${job.salaryHigh.toLocaleString()}`}</Typography>            
                <Typography variant='body2'>{`${job.yrsXPExpected} Years of experience expected`}</Typography>            
                <Typography variant='body2'>{job.active&&`Active`}</Typography>            
                <Typography variant='body2'>{job.remote&&`Remote`}</Typography>            
        </Box>
        </Modal>
  

    </div>
  );


}