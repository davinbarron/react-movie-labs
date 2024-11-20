import React from "react";
import Grid from "@mui/material/Grid2";
import { getActorCredits } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../../components/spinner';
import { Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import MovieCreditsList from "../MovieCreditList";

const MovieCredits = ({ id }) => {

  const { data, error, isLoading, isError } = useQuery(
    ["credits", id],
    getActorCredits
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const credits = data.cast;

  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        marginBottom: 1.5,
      }}
    >
      <Typography variant="h4" component="h3" sx={{ margin: "1em" }}>
        Cast
      </Typography>

      <Grid container>
        <Grid container sx={{ flex: "2 1 500px" }}>
          <MovieCreditsList credits={credits} />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MovieCredits;
