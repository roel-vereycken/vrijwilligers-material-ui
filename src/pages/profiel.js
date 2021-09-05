import {
  Grid,
  Container,
  makeStyles,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import Navbar from "../components/Navbar";
import Leftbar from "../components/Leftbar";
import ProfielForm from "../components/ProfielForm";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    height: "100vh",
    width: "90vw",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#FAFAFA",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },

  info: {
    borderLeft: "1px solid black",
    padding: theme.spacing(3),
    marginTop: theme.spacing(-6),
    [theme.breakpoints.down("md")]: {
      border: "none",
      marginTop: theme.spacing(3),
    },
  },
}));

export default function profiel({ data }) {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Grid container>
        <Grid item xs={2}>
          <Leftbar />
        </Grid>
        <Grid item xs={10}>
          <Container className={classes.container}>
            <ProfielForm user={data[0]} />
            <div className={classes.info}>
              <Typography variant="h2">Info:</Typography>
              <Typography>
                Hier kan je je persoonlijke gegevens aanpassen.
                <br />
                <br />
                Hoe doe je dit?
                <br />
                <br />
                Klik op het invulveld en pas de gegeven informatie aan.
                <br />
                Klik vervolgens op de groene knop.
                <br />
                <br />
                Je wachtwoord wijzigen kan door op de blauwe link te klikken.
              </Typography>
            </div>
          </Container>
        </Grid>
      </Grid>
    </>
  );
}

export async function getServerSideProps(ctx) {
  try {
    const resp = await axios.get(process.env.API_BASEPATH + "/user/1");
    const data = resp.data;
    return {
      props: {
        data,
      },
    };
  } catch (e) {
    console.error(e);
  }
}
