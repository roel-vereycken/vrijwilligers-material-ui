import { Grid, makeStyles } from "@material-ui/core";
import Evenement from "./Evenement";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 10,
    paddingTop: theme.spacing(10),
    height: "100vh",
    overflowY: "scroll",
  },
  reset: {
    textDecoration: "none",
  },
}));

function EvenementenGrid() {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.root} spacing={2}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((evenement) => {
          return (
            <Grid item xs={12} md={6} lg={4}>
              <Link href={"/evenement"}>
                <a className={classes.reset}>
                  <Evenement />
                </a>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export default EvenementenGrid;
