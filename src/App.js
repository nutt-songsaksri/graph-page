import logo from "./logo.svg";
import "./App.css";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  IconButton,
  colors,
} from "@material-ui/core";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import InfoIcon from "@material-ui/icons/Info";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

function App() {
  return (
    <Box style={{ height: "100vh", backgroundColor: "#d1d1d1" }}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{ height: "100%" }}
      >
        {/* 1 */}
        <Grid item>
          <Card>
            <CardContent>
              <Grid
                container
                // style={{ backgroundColor: "green" }}
              >
                <Grid
                  item
                  container
                  justify="space-between"
                  alignItems="center"
                >
                  <Grid
                    item
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                    xs={6}
                    style={{ backgroundColor: "pink" }}
                  >
                    <Grid item>
                      <Typography
                        style={{
                          fontSize: 18,
                          fontWeight: 600,
                          fontFamily: "",
                        }}
                      >
                        Title
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Button
                        variant="contained"
                        fullWidth={true}
                        style={{
                          fontSize: "5px",
                          height: "15px",
                          padding: 0,
                          width: 15,
                          minWidth: 0,
                          display: "block",
                          marginLeft: 5,
                        }}
                      >
                        {"\uD835\uDC8A"}
                      </Button>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="outlined"
                      disabled
                      style={{
                        fontSize: "3px",
                        padding: "2px 6px",
                      }}
                    >
                      Week
                      <KeyboardArrowDownIcon style={{ fontSize: "20px" }} />
                    </Button>
                  </Grid>
                </Grid>

                <Grid
                  item
                  container
                  style={{ height: "75%", backgroundColor: "purple" }}
                >
                  <Grid
                    item
                    xs={4}
                    style={{
                      backgroundColor: "whitesmoke",
                      paddingTop: "11px",
                    }}
                  >
                    <Typography
                      style={{
                        fontSize: 10,
                        fontWeight: "bold",
                      }}
                    >
                      <center>
                        Option 100%
                        <svg
                          width="15"
                          height="12"
                          viewBox="0 0 15 12"
                          fill="blue"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.03055 0.212402C4.75703 2.7744 3.08739 5.5856 0.0187988 8.6432L3.93076 11.8128C9.50951 8.3688 13.014 4.5272 14.4443 0.288003C14.4529 0.262803 14.4614 0.237602 14.47 0.212402H5.03055Z"
                            fill="#129219"
                          />
                        </svg>
                      </center>
                    </Typography>
                  </Grid>
                  <Grid item xs={4} style={{ backgroundColor: "rosybrown" }}>
                    <Typography style={{ fontSize: 12, fontWeight: "bold" }}>
                      T
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    style={{ backgroundColor: "skyblue", paddingTop: "11px" }}
                  >
                    <Typography style={{ fontSize: 10, fontWeight: "bold" }}>
                      <center>
                        Option 100%
                        <br />
                        <br />
                        Option 100%
                        <br />
                        <br />
                        Option 100%
                        <br />
                        <br />
                        Option 100%
                        <br />
                        <br />
                        Option 100%
                      </center>
                    </Typography>
                  </Grid>
                </Grid>

                <Grid
                  item
                  container
                  style={{ backgroundColor: "pink", height: "30px" }}
                >
                  <Grid item>
                    <Button style={{ fontSize: 3, textTransform: "lowercase" }}>
                      <TrendingUpIcon style={{ fontSize: "20px" }} />
                      view more insights
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        {/* 2 */}
        <Grid item style={{ marginTop: 40 }}>
          <Card>
            <CardContent>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                style={{ height: 200, width: 400 }}
              >
                <Grid item></Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
