import logo from "./logo.svg";
import "./App.css";
import { Box, Grid, Card, CardContent } from "@material-ui/core";
import Topbar from "./components/Topbar/Topbar";
import Viewmore from "./components/Viewmore/Viewmore";
import Legend from "./components/Legend/Legend";

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
        <Grid item>
          <Card style={{ width: 716 }}>
            <CardContent>
              <Grid container xs={12} direction="column">
                <Grid item xs={12}>
                  <Topbar />
                </Grid>
                <Grid item xs={12}>
                  <Legend color={"blue"} />
                  <Legend color={"red"} />
                </Grid>
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
