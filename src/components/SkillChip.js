import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import TagFacesIcon from '@mui/icons-material/TagFaces';

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function ChipsArray(chipData) {
    
  return (
    <Paper
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        p: 0.5,
        m: 0,
        mb: 1,
      }}
      component="ul"
    >
      {chipData.chipData.slice(0,4).map((data) => {
        
        let icon;

        if (data === 'React') {
          icon = <TagFacesIcon />;
        }

        return (
          <ListItem key={data}>
            <Chip
              icon={icon}
              label={data}
              sx={{backgroundColor: "darkmagenta"}}
            />
          </ListItem>
        );
      })}
    </Paper>
  );
}