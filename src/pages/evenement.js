import {
  Card,
  CardContent,
  Grid,
  Typography,
  Divider,
  makeStyles,
  Box,
} from "@material-ui/core";
import BerichtCard from "../components/BerichtCard";
import Leftbar from "../components/Leftbar";
import Navbar from "../components/Navbar";
import TaakCard from "../components/TaakCard";

const useStyles = makeStyles((theme) => ({
  right: {
    padding: 10,
    paddingTop: theme.spacing(10),
  },
  image: {
    height: "40vh",
    width: "95%",
    objectFit: "cover",
  },
  card: {
    width: "95%",
  },
  box: {
    height: "43vh",
    width: "95%",
    backgroundColor: "#FAFAFA",
    marginTop: theme.spacing(5),
    overflowY: "scroll",
  },
}));

export default function evenement() {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Grid container>
        <Grid item xs={2}>
          <Leftbar />
        </Grid>
        <Grid item xs={10} className={classes.right}>
          <Grid container>
            <Grid item xs={12} lg={6}>
              <img
                src="https://images.pexels.com/photos/7319337/pexels-photo-7319337.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className={classes.image}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography>Titel</Typography>
                  <Divider />
                  <Typography>Datum</Typography>
                  <Divider />

                  <Typography>Beschrijving</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Box className={classes.box}>
                <TaakCard />
                <TaakCard />
                <TaakCard />
              </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Box className={classes.box}>
                <BerichtCard />
                <BerichtCard />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
