import {
  Grid,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  makeStyles,
  TableBody,
} from "@material-ui/core";
import Leftbar from "../components/Leftbar";
import Navbar from "../components/Navbar";

const useStyles = makeStyles((theme) => ({
  table: {
    paddingTop: theme.spacing(8),
  },
  cell: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "9.5px",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "12px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "16px",
    },
  },
}));

export default function mijnTaken() {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <Grid container>
        <Grid item xs={2}>
          <Leftbar />
        </Grid>
        <Grid item xs={10}>
          <TableContainer className={classes.table}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell className={classes.cell}>Evenement</TableCell>
                  <TableCell className={classes.cell}>Taak</TableCell>
                  <TableCell className={classes.cell}>Startuur</TableCell>
                  <TableCell className={classes.cell}>Datum</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell className={classes.cell}>Jaarmarkt</TableCell>
                  <TableCell className={classes.cell}>Stofzuigen</TableCell>
                  <TableCell className={classes.cell}>1</TableCell>
                  <TableCell className={classes.cell}>26/05/2015</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
}
