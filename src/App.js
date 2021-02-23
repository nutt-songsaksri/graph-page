import logo from "./logo.svg";
import "./App.css";
import { Box, Grid, Card, CardContent } from "@material-ui/core";
import Topbar from "./components/Topbar/Topbar";
import Viewmore from "./components/Viewmore/Viewmore";
import Legend from "./components/Legend/Legend";
import { Doughnut } from "react-chartjs-2";

function App() {
  // const data = {
  //   labels: ["Red", "Green", "Yellow"],
  //   datasets: [
  //     {
  //       data: [300, 50, 100],
  //       backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
  //       hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
  //     },
  //   ],
  // };
  return (
    <Box style={{ height: "100vh", backgroundColor: "#d1d1d1" }}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{ height: "100%" }}
      >
        <Grid item>
          <Card style={{ width: 716, height: 364 }}>
            <CardContent>
              <Grid container direction="column">
                <Grid item>
                  <Topbar />
                </Grid>
                {/* 29.3 */}
                <Grid item style={{ marginTop: 26.12, marginLeft: 11 }}>
                  <Legend color={"#2F69CC"} />
                  {/* top={"26.12"} left={"11"} */}
                </Grid>
                <Grid item style={{ marginTop: 29.3, marginLeft: 11 }}>
                  <Legend color={"#129219"} />
                </Grid>
                <Grid item style={{ marginTop: 29.3, marginLeft: 11 }}>
                  <Legend color={"#F99A02"} />
                </Grid>
                <Grid item style={{ marginTop: 29.3, marginLeft: 11 }}>
                  <Legend color={"#DA3812"} />
                </Grid>
                <Grid item style={{ marginTop: 29.3, marginLeft: 11 }}>
                  <Legend color={"#119219"} />
                </Grid>
                {/* <Grid item>
                  <Doughnut data={data} width={100} />
                </Grid> */}
                <Grid item xs={12}>
                  <Viewmore />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
