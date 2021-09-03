import { Container, makeStyles, Typography } from "@material-ui/core";
import { FormatListBulleted, Info, Person, Today } from "@material-ui/icons";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    color: "white",
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.primary.main,
    position: "sticky",
    top: "0",
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "white",
      color: "#555",
      border: "1px solid #ece7e7",
    },
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
      cursor: "pointer",
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
    },
  },
  text: {
    fontWeight: "500",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  reset: {
    textDecoration: "none",
    color: "inherit",
  },
}));

function Leftbar() {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.container}>
        <Link href="#">
          <a className={classes.reset}>
            <div className={classes.item}>
              <Person className={classes.icon} />
              <Typography className={classes.text}>Profiel</Typography>
            </div>
          </a>
        </Link>
        <Link href="/">
          <a className={classes.reset}>
            <div className={classes.item}>
              <Today className={classes.icon} />
              <Typography className={classes.text}>Evenementen</Typography>
            </div>
          </a>
        </Link>
        <Link href="/mijn-taken">
          <a className={classes.reset}>
            <div className={classes.item}>
              <FormatListBulleted className={classes.icon} />
              <Typography className={classes.text}>Mijn taken</Typography>
            </div>
          </a>
        </Link>
        <Link href="#">
          <a className={classes.reset}>
            <div className={classes.item}>
              <Info className={classes.icon} />
              <Typography className={classes.text}>Info</Typography>
            </div>
          </a>
        </Link>
      </Container>
    </>
  );
}

export default Leftbar;
