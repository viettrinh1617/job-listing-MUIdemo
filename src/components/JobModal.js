import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Divider } from '@mui/material';
import ChipsArray from './SkillChip';

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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Learn More</Button>
      <Modal
        open={open}
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