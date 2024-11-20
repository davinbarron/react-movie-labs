import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";

const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const ActorDetails = ({actor}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Typography variant="h4" component="h2">
        {actor.name}
      </Typography>

      <Paper component="ul" sx={{ ...root }}>
        <li>
          <Chip label="Photos" sx={{ ...chip }} color="primary" />
        </li>
        {actor.images && actor.images.profiles.map((img) => (
          <li key={img.file_path}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${img.file_path}`}
              alt={actor.name}
              style={{ width: '100px', height: '150px', margin: '0.5em' }}
            />
          </li>
        ))}
      </Paper>

      <Typography variant="h5" component="h3" style={{ marginTop: "2em" }}>
        Biography
      </Typography>
      <Typography variant="h6" component="p">
        {actor.biography}
      </Typography>

      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        sx={{
          position: 'fixed',
          bottom: '1em',
          right: '1em'
        }}
      >
      </Fab>
    </>
  );
};

export default ActorDetails;
