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

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    height: "100vh",
    width: "90vw",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#FAFAFA",
  },
  form: {
    width: "50%",
  },
  item: {
    marginBottom: theme.spacing(3),
  },
  textfield: {
    width: "90%",
  },
  info: {
    borderLeft: "1px solid black",
    padding: theme.spacing(3),
    marginTop: theme.spacing(-6),
  },
}));

export default function profiel() {
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
            <form className={classes.form}>
              <div className={classes.item}>
                <TextField
                  id="standard-basic"
                  label="Voornaam"
                  size="small"
                  variant="outlined"
                  className={classes.textfield}
                ></TextField>
              </div>
              <div className={classes.item}>
                <TextField
                  id="standard-basic"
                  label="Naam"
                  size="small"
                  variant="outlined"
                  className={classes.textfield}
                ></TextField>
              </div>
              <div className={classes.item}>
                <TextField
                  id="standard-basic"
                  label="Email"
                  size="small"
                  variant="outlined"
                  className={classes.textfield}
                ></TextField>
              </div>
              <div className={classes.item}>
                <TextField
                  id="standard-basic"
                  label="Telefoon"
                  size="small"
                  variant="outlined"
                  className={classes.textfield}
                ></TextField>
              </div>
              <Button color="primary">Sla wijzigingen op</Button>
            </form>
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
