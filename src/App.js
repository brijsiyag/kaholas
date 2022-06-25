import { Button, Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import data from "./db.json";
import "./App.css";
import { Star } from "@mui/icons-material";
function App() {
  return (
    <>
      <Paper
        className="main"
        sx={{ margin: { xs: "30px auto", md: "100px auto" } }}
      >
        <Grid contianer className="App">
          <Grid container marginBottom={7}>
            <Box
              component="h1"
              fontSize={{ xs: "2rem", md: "3rem" }}
              margin={0}
              marginBottom={1}
            >
              {data.heading}
            </Box>
            <Box
              component="body"
              fontSize="1.1rem"
              color="gray"
              fontWeight={600}
            >
              {data.heading_helper}
            </Box>
          </Grid>
          <Grid
            container
            justifyContent="space-between"
            flexDirection={{ xs: "column", md: "row" }}
          >
            <Grid container flexBasis="45%">
              <Grid item fontSize="1.2rem" lineHeight={1.5} marginBottom={2}>
                {data.desc}
              </Grid>
              <Grid
                item
                container
                alignItems="center"
                height="fit-content"
                marginBottom={2}
              >
                <img
                  src="https://source.unsplash.com/random/avatar?h=50&w=50px"
                  width="30px"
                  height="30px"
                  alt="avatar"
                  style={{ borderRadius: "50%" }}
                />
                <Box
                  marginLeft={1}
                  component="span"
                  fontWeight={600}
                  color="blue"
                  fontSize="1.3rem"
                >
                  {data.user}
                </Box>
              </Grid>
              <Grid item container flexDirection="column">
                <Grid
                  item
                  container
                  flexDirection={{ xs: "column", md: "row" }}
                  alignItems={{ xs: "center", md: "inherit" }}
                >
                  <Box marginRight={1}>
                    {[0, 0, 0, 0, 0].map(() => {
                      return <Star htmlColor="gold" />;
                    })}
                  </Box>
                  <Box lineHeight="24px" color="gray">
                    {data.teacher_reviews} total reviews for this teacher
                  </Box>
                </Grid>
                <Grid
                  item
                  container
                  flexDirection={{ xs: "column", md: "row" }}
                  alignItems={{ xs: "center", md: "inherit" }}
                >
                  <Box marginRight={1}>
                    {[0, 0, 0, 0, 0].map(() => {
                      return <Star htmlColor="gold" />;
                    })}
                  </Box>
                  <Box lineHeight="24px" color="gray">
                    {data.class_reviews} reviews for this class.
                  </Box>
                </Grid>
              </Grid>
              <Grid
                item
                marginTop={4}
                margin={{ xs: "10px auto", md: "10px 0" }}
              >
                <Box fontSize="1.2rem" fontWeight={500}>
                  Completed by {data.learners_count} learners
                </Box>
              </Grid>
              <Grid
                item
                container
                flexDirection={{ xs: "column", md: "row" }}
                flexWrap="nowrap"
                alignItems={{ xs: "center", md: "inherit" }}
                justifyContent={{ md: "space-around" }}
              >
                <Grid item>
                  <Button
                    sx={{
                      width: "max-content",
                      borderRadius: "20px",
                      padding: "10px",
                    }}
                    endIcon={<ArrowForwardIosIcon />}
                    variant="contained"
                  >
                    See Class Shedule
                  </Button>
                </Grid>
                <Grid
                  item
                  container
                  justifyContent={{ xs: "space-around", md: "inherit" }}
                  margin={{ xs: 2, md: "inherit" }}
                >
                  <Grid item>
                    <Box>
                      <Button variant="text" startIcon={<FavoriteBorderIcon />}>
                        Save
                      </Button>
                    </Box>
                  </Grid>
                  <Grid item>
                    <Box>
                      <Button variant="text" startIcon={<ShareIcon />}>
                        Share
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container flexBasis="50%" flexDirection="row">
              <Grid item flexBasis="50%">
                <img
                  src={data.images[0]}
                  style={{ objectFit: "cover", borderRadius: "5px" }}
                  width="100%"
                  height="100%"
                  alt={data.heading}
                />
              </Grid>
              <Grid
                item
                container
                flexBasis="50%"
                flexWrap="nowrap"
                flexDirection="column"
              >
                <Grid item flexBasis="50%">
                  <img
                    src={data.images[1]}
                    style={{ objectFit: "cover" }}
                    width="100%"
                    height="100%"
                    alt={data.heading}
                  />
                </Grid>
                <Grid item flexBasis="50%">
                  <img
                    src={data.images[2]}
                    style={{ objectFit: "cover" }}
                    height="100%"
                    width="100%"
                    alt={data.heading}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default App;
