
import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useNavigate, useParams } from "react-router-dom";
import api from "../data/fetchData";
import SkillsPaper from "./SkillsPaper";

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


function JobDetailModal() {
  const { id } = useParams();
  const [job, setJob] = useState({skills:[]});

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = await api.getJob(id);
      setJob(data);
      console.log('t',data);
    };
    fetchData();
    console.log('jobt',job);
  }, []);
  
  const handleClose = () => {
    navigate(-1);
  };
  return (
    <div>
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{...style, backgroundColor: 'lightgrey'}}>
          <Card
            sx={{
              overflow:'scroll',
              maxHeight: '500px',
              border: "none",
              boxShadow: 0,
              backgroundColor: (theme) => theme.palette.primary.dark,
              color: (theme) => theme.palette.common.white,
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div">
                {job?.title}
              </Typography>
              <SkillsPaper skills={job?.skills} />
              <Typography>{job?.description}</Typography>
              <Typography variant="h6" component="div">
                City: {job?.city}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Modal>
    </div>
  );
}

export default JobDetailModal;