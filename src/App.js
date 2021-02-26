import logo from "./logo.svg";
import "./App.css";
import { Box, Grid, Card, CardContent } from "@material-ui/core";
import Topbar from "./components/Topbar/Topbar";
import Viewmore from "./components/Viewmore/Viewmore";
import Legend from "./components/Legend/Legend";
import { Doughnut, Line } from "react-chartjs-2";
import "chartjs-plugin-datalabels";

function App() {
  const data1 = {
    datasets: [
      {
        data: [45, 15, 13, 55, 33, 40, 90, 33, 20, 8],
        borderWidth: 2,
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

  const data2 = (canvas) => {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 500, 0);
    gradient.addColorStop(0, "#4288FF");
    gradient.addColorStop(1, "#26FF97");
    return {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "S",
        "D",
        "s",
        "a",
        "d",
      ],
      datasets: [
        {
          label: "My First dataset",
          fill: true,
          lineTension: 0.3,
          backgroundColor: gradient,
          borderColor: "rgba(75,192,192,0)",
          borderWidth: 0,
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "white",
          pointBackgroundColor: "#FFA13F",
          pointBorderWidth: 1,
          pointHoverRadius: 0,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 4.5,
          pointHitRadius: 10,
          data: [20, 78, 36, 43, 56, 27, 63, 27, 99, 20],
          datalabels: {
            labels: {
              name: {
                align: "top",
                font: { size: 24 },
                formatter: function () {
                  return "\u2B24";
                },
              },
              value: {
                align: "bottom",
                formatter: function () {
                  return "Title";
                },
              },
            },
          },
        },
      ],
    };
  };

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      style={{ backgroundColor: "#E5E5E5" }}
      // style={{ height: "100%" }}
    >
      <Grid item style={{ marginTop: 20 }}>
        <Card style={{ width: 716, height: 364, borderRadius: 14 }}>
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
                      data={data1}
                      height={null}
                      options={{
                        responsive: true,
                        aspectRatio: 1,
                        maintainAspectRatio: true,
                        plugins: { datalabels: { display: false } },
                        cutoutPercentage: 40,
                      }}
                    />
                  </Grid>
                </Grid>
                <Grid item container justify="flex-start" xs={3}>
                  <Grid item style={{ marginTop: 26.12 }}>
                    <Legend color={"#09D5A4"} right />
                  </Grid>
                  <Grid item style={{ marginTop: 29.3 }}>
                    <Legend color={"#9F0FEF"} right />
                  </Grid>
                  <Grid item style={{ marginTop: 29.3 }}>
                    <Legend color={"#F99A02"} right />
                  </Grid>
                  <Grid item style={{ marginTop: 29.3 }}>
                    <Legend color={"#DA3811"} right />
                  </Grid>
                  <Grid item style={{ marginTop: 29.3 }}>
                    <Legend color={"#2F69CC"} right />
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
      <Grid item style={{ marginTop: 20, marginBottom: 20 }}>
        <Card style={{ width: 716, height: 364, borderRadius: 14 }}>
          <CardContent>
            <Grid container direction="column">
              <Grid item>
                <Topbar />
              </Grid>
              <Grid
                item
                container
                xs={12}
                style={{
                  width: 650,
                  height: 200,
                  display: "block",
                  marginTop: 20,
                  marginLeft: 15,
                }}
              >
                <Grid item>
                  <Line
                    data={data2}
                    height={null}
                    options={{
                      plugins: {
                        datalabels: {
                          color: "white",
                          display: true,
                          labels: {
                            name: {
                              font: {
                                weight: "normal",
                              },
                            },
                            value: {
                              offset: -20,
                              color: "#000",
                            },
                          },
                          color: "red",
                          anchor: "end",
                          offset: 10,
                        },
                      },
                      responsive: true,
                      aspectRatio: 2.5,
                      maintainAspectRatio: true,
                      legend: { display: false },
                      scales: {
                        xAxes: [
                          {
                            gridLines: { display: false, drawBorder: false },
                            ticks: { display: false },
                          },
                        ],
                        yAxes: [
                          {
                            gridLines: { drawBorder: false },
                            ticks: {
                              fontFamily: "Nunito Sans, sans-serif",
                              fontSize: 12,
                              fontStyle: "normal",
                              fontColor: "rgba(43, 48, 52, 0.4)",
                              min: 20,
                              max: 120,
                              stepSize: 20,
                              beginAtZero: true,
                              callback: function (value) {
                                return value + "%";
                              },
                            },
                          },
                        ],
                      },
                    }}
                  />
                </Grid>
              </Grid>
              <Grid item xs={12} style={{ marginTop: 20 }}>
                <Viewmore />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default App;
