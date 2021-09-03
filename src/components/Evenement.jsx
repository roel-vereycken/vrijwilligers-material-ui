import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Divider,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(5),
  },
  media: {
    height: "250px",
    [theme.breakpoints.down("sm")]: {
      heigth: "150px",
    },
  },
}));

function Evenement() {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://images.pexels.com/photos/7319337/pexels-photo-7319337.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            title="My Post"
          ></CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5">
              My First Post
            </Typography>
            <Divider />
            <Typography variant="body2">Datum: 12/5/2021</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}

export default Evenement;
