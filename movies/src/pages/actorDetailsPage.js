import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getActorDetails } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import MovieCard from "../components/movieCard";
import TemplateActorPage from "../components/templateActorPage"; // Use the template you created for actor details

const ActorDetailsPage = () => {
  const { id } = useParams();
  const { data: actor, error, isLoading, isError } = useQuery(["actorDetails", { id }], getActorDetails);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <Typography variant="h6" color="error">{error.message}</Typography>;
  }

  return (
    <TemplateActorPage actor={actor}>
      <Typography variant="h4" component="h2">
        {actor.name}
      </Typography>
      <Typography variant="h6" component="p">
        {actor.biography}
      </Typography>
      <Typography variant="h5" component="h3" style={{ marginTop: "2em" }}>
        Known For
      </Typography>
      <Grid container spacing={3}>
        {actor.movie_credits.cast.map((movie) => (
          <Grid item key={movie.id} xs={12} sm={6} md={4}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
    </TemplateActorPage>
  );
};

export default ActorDetailsPage;
