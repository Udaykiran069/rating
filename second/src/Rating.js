import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';
const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

export default function HoverRating() {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  return (
    <div>
    <Box sx={{ width: "40%", display: 'flex', alignItems: 'center',marginTop:'20px',justifyContent:"space-between",padding:'0 20'}}>
        <Box sx={{width:"40%",margin:0}}>
            <h3>UDAY KIRAN</h3>
        </Box>
        <Box sx={{marginRight:'80px',}} >
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {  
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
      <Box sx={{marginLeft:'1px'}}></Box>
      </Box>
      <Button variant="contained" disableElevation>
      onClick
    </Button>
    </Box>

    <Box sx={{ width: "40%", display: 'flex', alignItems: 'center',marginTop:'20px',padding:"0 20px",justifyContent:"space-between",padding:'0 20'}}>
        <Box sx={{width:"44%",margin:0,}}>
            <h3>VIKAS</h3>
        </Box>
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
      <Box sx={{marginLeft:'1rem'}}></Box>

      <Button variant="contained" disableElevation>
      onClick
    </Button>
    </Box>
    <Box sx={{ width: "40%", display: 'flex', alignItems: 'center',marginTop:'20px',padding:"0 20px",justifyContent:"space-between",padding:'0 20'}}>
        <Box sx={{width:"44%",margin:0}}>
            <h3>CHARAN</h3>
        </Box>
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
      <Box sx={{marginLeft:'1rem'}}></Box>

      <Button variant="contained" disableElevation>
      onClick
    </Button>
    </Box>
    </div>
  );
}   
