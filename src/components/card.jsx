import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function CardComponent({image, name, price, duration, instructor, avatar}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Service Name : {name}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Price :${price}
          </Typography>
          <Typography variant="h6" >
          {duration ? `Duration: ${duration} week` : null}
          </Typography>
          <Box  sx={{ display:'flex' , justifyContent:'center' }}>
                <Typography variant="h6">
                {instructor? instructor : null}
                </Typography>
                {instructor? <Avatar alt={instructor} src={avatar} /> : null }
             </Box>
        </CardContent>
        <Button variant="contained" sx={{margin:'10px' }}>Enroll Now</Button>
      </CardActionArea>
    </Card>
  );
}