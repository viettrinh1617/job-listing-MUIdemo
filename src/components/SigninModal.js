import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import LoginIcon from '@mui/icons-material/Login';
import { useLocation } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthProvider';

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
  display: 'flex',
  flexDirection: 'column',
};

// không cần open, setOpen nữa vì component này chỉ render khi location route match /login
export default function SigninModal() {
  const { signin, user, signout ,isAuthenticated} = useAuth();

  const navigate = useNavigate();

  const {handleSubmit, register, formState: {errors}} = useForm();
  const location = useLocation();

  const onSubmit = (data) => 
    {   
        signin(data, () => navigate("/"));
        console.log(data);
        console.log(location);
        // handleClose();

        // navigate đến state.currentLocation hoặc homepage
    }
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => {
            setOpen(true);
            navigate("/login")
            }
  const handleClose = () => {
        setOpen(false);
        navigate("/");
  }
  return (
    <>
        <Button
                size="large"
                aria-label="Sign in"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpen}
                color="inherit"
                sx={{ml:1}}>
              <LoginIcon
                size="large"
                aria-label="Sign in"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpen}
                color="inherit"
              >
              </LoginIcon>
              <Typography sx={{pl:1}} variant='body2'>Sign in</Typography>
        </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form onSubmit={handleSubmit(onSubmit)}>  
        <Box sx={style}>
            <TextField sx={{mb: 4}} id="username" label="Username" variant="outlined"
                        type="username"
                        {...register ("email")} />
            <TextField sx={{mb: 4}} id="password" label="Password" variant="filled" 
                        type="password"
                        {...register ("password")} />  
            <Button type='submit' variant='contained'>Sign in</Button>       
        </Box>
        </form>
      </Modal>
      </>
  );
}