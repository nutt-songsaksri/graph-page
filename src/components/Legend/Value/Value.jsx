import { Grid, Typography } from "@material-ui/core";
import classes from "../Legend.module.css";
import React from "react";

const Value = (props) => {
  return (
    <Grid
      container
      direction="column"
      style={{
        display: "block",
        width: 36.37,
        height: 25.7,
        marginLeft: 8.81,
      }}
    >
      <Grid
        item
        style={{
          backgroundColor: "#000000",
        }}
      >
        <Typography className={classes.Percentage}>100%</Typography>
      </Grid>
      <Grid
        container
        style={{
          marginLeft: 22,
        }}
      >
        <Grid item>
          <svg
            width="14.45px"
            height="11.6px"
            viewBox="0 0 15 12"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: "block", marginTop: -0.325 }}
          >
            <g fill={props.color}>
              <path d="M5.03055 0.212402C4.75703 2.7744 3.08739 5.5856 0.0187988 8.6432L3.93076 11.8128C9.50951 8.3688 13.014 4.5272 14.4443 0.288003C14.4529 0.262803 14.4614 0.237602 14.47 0.212402H5.03055Z" />
            </g>
          </svg>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Value;
