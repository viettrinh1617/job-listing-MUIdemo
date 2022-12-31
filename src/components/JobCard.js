
import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import AuthContext from "../auth/AuthContext";
import { useNavigate, useLocation, Link } from "react-router-dom";
import SkillsPaper from "./SkillsPaper";
import { styled } from "@mui/material/styles";

const CardStyle = styled(Card)(({ theme }) => ({
  boxShadow: "none",
  border: "1px solid black",
  width: "100%",
  maxWidth: "500px",
  minWidth: "270px",
  height: "320px",
  margin: "auto",
  backgroundColor: theme.palette.primary.light,
}));

function JobCard({ description, skills, id, title }) {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  let location = useLocation();
  const hanleClick = (event) => {
    if (auth.user) {
      navigate(`/job/${id}`);
    } else {
      navigate("/login");
    }
  };
  return (
    <CardStyle ariant="outlined">
      <Stack
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        height="100%"
        padding="5px"
      >
        <CardContent sx={{ maxHeight: '250px',overflow: "scroll", textOverflow: "fade"}}>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: (theme) => theme.palette.common.white }}
          >
            {title}
          </Typography>
          <Divider />
          <SkillsPaper skills={skills} />
          <Typography variant="body2" sx={{color: (theme) => theme.palette.common.white}}>
            {description}
          </Typography>
        </CardContent>
        <Button
          variant="contained"
          component={Link}
          to={`/job/${id}`}
          state={{ backgroundLocation: location }}
          sx={{ width: "130px", backgroundColor: "darkmagenta", mb: 2 }}
        >
          Learn More
        </Button>
        {/* <Link to={`/job/${id}`} state={{ backgroundLocation: location }}>
            <div>Learn More</div>
          </Link> */}
      </Stack>
    </CardStyle>
  );
}

export default JobCard;
