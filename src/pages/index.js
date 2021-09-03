import { Grid, makeStyles } from "@material-ui/core";
import EvenementenGrid from "../components/EvenementenGrid";
import Leftbar from "../components/Leftbar";
import Navbar from "../components/Navbar";

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "hidden",
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <Grid container className={classes.root}>
        <Grid item xs={2}>
          <Leftbar />
        </Grid>
        <Grid item xs={10}>
          <EvenementenGrid />
        </Grid>
      </Grid>
    </>
  );
}
