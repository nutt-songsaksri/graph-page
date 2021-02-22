import React from "react";
import { Grid, Button } from "@material-ui/core";
import { TrendingUp } from "@material-ui/icons";
import classes from "./Viewmore.module.css";

const Viewmore = () => {
  return (
    <Button className={classes.ViewmoreInsightsButton}>
      <Grid container>
        <Grid item>
          <TrendingUp className={classes.TrendingUpIcon} />
        </Grid>
        <Grid item>view more insights</Grid>
      </Grid>
    </Button>
  );
};

export default Viewmore;
