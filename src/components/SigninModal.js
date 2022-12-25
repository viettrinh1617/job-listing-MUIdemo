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

export default function SigninModal() {
  const { signin, user, signout ,isAuthenticated} = useAuth();

  const navigate = useNavigate();

  const {handleSubmit, register, formState: {errors}} = useForm();
  const location = useLocation();

  const onSubmit = (data) => 
    {   const path = location.pathname;
        console.log(path);
        signin(data.email, () => navigate("/login"));
        handleClose();
        navigate(path);
    }
  const [open, setOpen] = React.useState((location.pathname!=="/")&&!isAuthenticated);
  const handleOpen = () => {
            setOpen(true);
            navigate(location.pathname);
            }
  const handleClose = () => {
        setOpen(false);
        navigate(-1);
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
            <TextField sx={{mb: 4}} id="username" label="Username" variant="outlined" defaultValue='coderschooler'
                        type="username"
                        {...register ("email")} />
            <TextField sx={{mb: 4}} id="password" label="Password" variant="filled" defaultValue='12345'
                        type="password"
                        {...register ("password")} />  
            <Button type='submit' variant='contained'>Sign in</Button>       
        </Box>
        </form>
      </Modal>
      </>
  );
}