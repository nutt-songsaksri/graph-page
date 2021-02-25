import logo from "./logo.svg";
import "./App.css";
import { Box, Grid, Card, CardContent } from "@material-ui/core";
import Topbar from "./components/Topbar/Topbar";
import Viewmore from "./components/Viewmore/Viewmore";
import Legend from "./components/Legend/Legend";
import { Doughnut } from "react-chartjs-2";

function App() {
  const data = {
    datasets: [
      {
        data: [45, 15, 13, 55, 33, 40, 90, 33, 20, 8],
        backgroundColor: [
          "#09D5A4",
          "#9F0FEF",
          "#F99A02",
          "#DA3811",
          "#2F69CC",
          "#119219",
          "#DA3812",
          "#F99A02",
          "#129219",
          "#2F69CC",
        ],
        hoverBackgroundColor: [
          "#09D5A4",
          "#9F0FEF",
          "#F99A02",
          "#DA3811",
          "#2F69CC",
          "#119219",
          "#DA3812",
          "#F99A02",
          "#129219",
          "#2F69CC",
        ],
      },
    ],
  };
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
                <Grid item container direction="row" justify="center">
                  <Grid item container justify="flex-end" xs={3}>
                    <Grid item style={{ marginTop: 26.12, marginLeft: 11 }}>
                      <Legend color={"#2F69CC"} />
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
                  </Grid>
                  <Grid
                    item
                    container
                    xs={5}
                    style={{ width: 250, height: 250, display: "block" }}
                  >
                    <Grid item>
                      <Doughnut
                        data={data}
                        height={300}
                        options={{
                          responsive: true,
                          aspectRatio: 1,
                          maintainAspectRatio: true,
                        }}
                      />
                    </Grid>
                  </Grid>
                  <Grid item container xs={3}>
                    <Grid item style={{ marginTop: 26.12, marginLeft: 11 }}>
                      <Legend color={"#2F69CC"} right />
                    </Grid>
                    <Grid item style={{ marginTop: 29.3, marginLeft: 11 }}>
                      <Legend color={"#129219"} right />
                    </Grid>
                    <Grid item style={{ marginTop: 29.3, marginLeft: 11 }}>
                      <Legend color={"#F99A02"} right />
                    </Grid>
                    <Grid item style={{ marginTop: 29.3, marginLeft: 11 }}>
                      <Legend color={"#DA3812"} right />
                    </Grid>
                    <Grid item style={{ marginTop: 29.3, marginLeft: 11 }}>
                      <Legend color={"#119219"} right />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} style={{ marginTop: 17.19 }}>
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
