import { useState } from "react";
import { TextField, Button, makeStyles } from "@material-ui/core";
import Swal from "sweetalert2";
import axiosInstance from "../../--helpers/axios";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "50%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  item: {
    marginBottom: theme.spacing(3),
  },
  textfield: {
    width: "90%",
  },
}));

export default function ProfielForm({ user }) {
  const classes = useStyles();
  console.log(user.usr_naam);

  const [naam, setNaam] = useState(user.usr_naam);
  const [voornaam, setVoornaam] = useState(user.usr_voornaam);
  const [email, setEmail] = useState(user.usr_email);
  const [telefoon, setTelefoon] = useState(user.usr_telefoon);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axiosInstance.put("/user/1", {
        naam,
        voornaam,
        email,
        telefoon: parseInt(telefoon),
      });
      Swal.fire("Opgeslagen", "Bedankt voor je wijzigingen", "success");
    } catch (error) {
      Swal.fire("Error", "Er ging iets mis", "error");
      console.log(error);
    }
  };

  return (
    <>
      <form className={classes.form} onSubmit={handleFormSubmit}>
        <div className={classes.item}>
          <TextField
            id="standard-basic"
            label="Voornaam"
            size="small"
            variant="outlined"
            className={classes.textfield}
            value={voornaam}
            onChange={(e) => setVoornaam(e.target.value)}
          ></TextField>
        </div>
        <div className={classes.item}>
          <TextField
            id="standard-basic"
            label="Naam"
            size="small"
            variant="outlined"
            className={classes.textfield}
            value={naam}
            onChange={(e) => setNaam(e.target.value)}
          ></TextField>
        </div>
        <div className={classes.item}>
          <TextField
            id="standard-basic"
            label="Email"
            size="small"
            variant="outlined"
            className={classes.textfield}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></TextField>
        </div>
        <div className={classes.item}>
          <TextField
            id="standard-basic"
            label="Telefoon"
            size="small"
            variant="outlined"
            className={classes.textfield}
            value={telefoon}
            onChange={(e) => setTelefoon(e.target.value)}
          ></TextField>
        </div>
        <Button color="primary" type="submit">
          Sla wijzigingen op
        </Button>
      </form>
    </>
  );
}
