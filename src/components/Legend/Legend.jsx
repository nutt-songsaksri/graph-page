import React from "react";
import { Grid, Typography } from "@material-ui/core";

const Legend = (props) => {
  return (
    <Grid
      item
      container
      direction="row"
      xs={4}
      style={{
        backgroundColor: "rebeccapurple",
        paddingTop: "11px",
      }}
    >
      <Grid
        item
        container
        style={{
          backgroundColor: "crimson",
        }}
      >
        <Grid
          item
          container
          justify="flex-end"
          alignItems="flex-start"
          xs={6}
          style={{
            backgroundColor: "orange",
          }}
        >
          <Typography
            style={{
              fontSize: 14,
              fontWeight: 600,
              fontFamily: "Poppins,sans-serif",
              fontStyle: "normal",
              color: "#343A40",
              display: "block",
            }}
          >
            Option
          </Typography>
        </Grid>

        <Grid item container direction="column" alignItems="center" xs={6}>
          <Grid
            item
            style={{
              backgroundColor: "#000000",
              display: "block",
            }}
          >
            <Typography
              style={{
                fontSize: 12,
                fontWeight: "bold",
                fontFamily: "Poppins,sans-serif",
                fontStyle: "normal",
                color: "#FFFFFF",
                display: "block",
                marginLeft: 1,
                marginRight: 5,
                height: "16.456px",
              }}
            >
              100%
            </Typography>
          </Grid>
          <Grid
            item
            style={{
              marginLeft: 30.59,
              height: "16.456px",
            }}
          >
            <Grid item style={{ marginTop: "-6.19px" }}>
              <svg
                width="14.45px"
                height="11.6px"
                viewBox="0 0 15 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill={props.color}>
                  <path d="M5.03055 0.212402C4.75703 2.7744 3.08739 5.5856 0.0187988 8.6432L3.93076 11.8128C9.50951 8.3688 13.014 4.5272 14.4443 0.288003C14.4529 0.262803 14.4614 0.237602 14.47 0.212402H5.03055Z" />
                </g>
              </svg>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Legend;
