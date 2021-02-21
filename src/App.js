import logo from "./logo.svg";
import "./App.css";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";

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
        <Grid item style={{ backgroundColor: "red" }}>
          <Card>
            <CardContent>
              <Grid
                container
                justify="flex-start"
                alignItems="flex-start"
                style={{ height: 200, width: 400, backgroundColor: "green" }}
              >
                <Grid item container spacing={2}>
                  <Grid item xs={6} style={{ backgroundColor: "yellow" }}>
                    <Typography style={{ fontSize: 12, fontWeight: "bold" }}>
                      Title
                    </Typography>
                  </Grid>
                  <Grid item xs={6} style={{ backgroundColor: "blue" }}>
                    <Button
                      variant="outlined"
                      disabled
                      style={{ float: "right" }}
                    >
                      Week
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
                    style={{ backgroundColor: "grey", paddingTop: "11px" }}
                  >
                    <Typography
                      style={{
                        fontSize: 10,
                        fontWeight: "bold",
                      }}
                    >
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
                  <Grid item xs={4} style={{ backgroundColor: "rosybrown" }}>
                    <Typography style={{ fontSize: 12, fontWeight: "bold" }}>
                      Title
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

                <Grid item container style={{ backgroundColor: "pink" }}>
                  <Grid item>
                    <Button style={{ fontSize: 3 }}>view more insights</Button>
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
