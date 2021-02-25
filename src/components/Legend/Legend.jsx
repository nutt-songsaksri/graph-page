import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import classes from "./Legend.module.css";
import Value from "./Value/Value";

const Legend = (props) => {
  const RightLegend = () => {
    return (
      <Grid container>
        <Grid item>
          <Value color={props.color} />
        </Grid>
        <Grid item>
          <Typography className={classes.Option}>Option</Typography>
        </Grid>
      </Grid>
    );
  };

  const LeftLegend = () => {
    return (
      <Grid container>
        <Grid item>
          <Typography className={classes.Option}>Option</Typography>
        </Grid>
        <Grid item>
          <Value color={props.color} />
        </Grid>
      </Grid>
    );
  };
  return <Container>{props.right ? RightLegend() : LeftLegend()}</Container>;
  //ถ้า right ไม่เป็นทรู ไปเรียก LeftLegend วิธีนี้เรียกว่า Ternary Operator เงื่อนไขที่จบในตัวเดียวไม่ต้อง if else ตั้ง padding margin ตรง Option ให้ตรง
};

export default Legend;
