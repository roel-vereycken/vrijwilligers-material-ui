import {
  Card,
  CardContent,
  Typography,
  Divider,
  CardActions,
  Button,
  makeStyles,
} from "@material-ui/core";
import { teal } from "@material-ui/core/colors";
import { Close } from "@material-ui/icons";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(1),
    margin: theme.spacing(1),
  },
  content: {
    paddingBottom: 0,
  },
  rightButton: {
    backgroundColor: "teal",
    color: "white",
    "&:hover": { backgroundColor: teal[600] },
  },

  secondContent: {
    position: "relative",
  },
  close: {
    color: "tomato",
    position: "absolute",
    right: 10,
    cursor: "pointer",
  },
}));

export default function TaakCard() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <Typography>Titel:</Typography>
          <Typography>Startuur:</Typography>
          <Typography>Einduur:</Typography>
          <Typography>Vrijwilligers gezocht: </Typography>
          <Divider />
        </CardContent>
        {!open && (
          <CardActions className={classes.action}>
            <Button
              size="small"
              color="primary"
              onClick={() => {
                setOpen(!open);
              }}
            >
              Details
            </Button>
            <Button size="small" className={classes.rightButton}>
              Aanmelden
            </Button>
            <Button size="small" disabled color="secondary">
              Volzet
            </Button>
          </CardActions>
        )}
        {open && (
          <CardContent className={classes.secondContent}>
            <Close className={classes.close} onClick={() => setOpen(!open)} />
            <Typography>Omschrijving: </Typography>
            <Typography>Voert uit:</Typography>
          </CardContent>
        )}
      </Card>
    </>
  );
}
