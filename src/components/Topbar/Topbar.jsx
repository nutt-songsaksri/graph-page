import React from "react";
import { Grid, Button, Typography, Box } from "@material-ui/core";
import { KeyboardArrowDown } from "@material-ui/icons";
import classes from "./Topbar.module.css";
const Topbar = () => {
  return (
    <Box className={classes.Container}>
      <Grid container justify="space-between" alignItems="center">
        <Grid
          item
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
          xs={6}
        >
          <Grid item>
            <Typography className={classes.Title}>Title</Typography>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              fullWidth={true}
              className={classes.InfoButton}
            >
              {"\uD835\uDC8A"}
            </Button>
          </Grid>
        </Grid>
        <Grid item>
          <Button variant="outlined" disabled className={classes.WeekButton}>
            Week
            <KeyboardArrowDown style={{ fontSize: "20px" }} />
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Topbar;
