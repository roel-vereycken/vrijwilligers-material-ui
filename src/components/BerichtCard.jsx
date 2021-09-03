import {
  Box,
  Card,
  CardContent,
  Typography,
  Divider,
  CardActions,
  Button,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(1),
    margin: theme.spacing(1),
  },
  content: {
    paddingBottom: 0,
    color: "black",
  },
  top: {
    display: "flex",
    justifyContent: "space-between",
  },
  name: {
    fontSize: "12px",
  },
  options: {
    display: "flex",
    marginTop: theme.spacing(1),
  },
  option1: {
    marginLeft: "auto",
    width: "18%",
  },
  option2: {
    marginLeft: theme.spacing(2),
    color: "tomato",
  },
}));

export default function BerichtCard() {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <Box className={classes.top}>
            <Typography className={classes.name}>Naam:</Typography>
            <Typography className={classes.name}>Uur:</Typography>
          </Box>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse porro
            fugiat veniam error tenetur laborum iure, minima facere id maxime
            autem deserunt commodi, excepturi voluptatem? Adipisci corporis
            voluptatem dolor impedit!
          </Typography>
          <Divider />
          <CardActions className={classes.option}>
            <Button size="small" color="primary" className={classes.option1}>
              Beantwoorden
            </Button>
            <Button size="small" className={classes.option2}>
              Verwijderen
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </>
  );
}
