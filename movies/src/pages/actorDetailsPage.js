import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getActorDetails } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import Typography from "@mui/material/Typography";
import TemplateActorPage from "../components/templateActorPage"; // Use the template you created for actor details
import MovieCredits from "../components/movieCredits";

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
      <MovieCredits id={id} />
    </TemplateActorPage>
  );
};

export default ActorDetailsPage;
