# Assignment 1 - ReactJS app.

Name: Davin Barron

## Overview.

This is a repository for a ReactJS movie app :clapper: that makes use of the movie database (TMDB) API. 

The app will have pages that will display movies such as: 
 - Discover :mag:
 - Upcoming :stopwatch:
 - Top rated :top:
 - Favourites :heart:
 - Trending :fire:

The user can:
 - Like movies :thumbsup:
 - Playlist movies :open_file_folder:
 - Review movies :memo:
 
The API calls can be found here at this link --> https://developer.themoviedb.org/reference/intro/getting-started

### Features.

+ Top Rated Movies
+ Trending Movies
+ Recommended Movies
+ Movie Videos
+ Discover Actors
+ Sorting and Searching movies
+ Playlist upcoming movies
+ Dark mode
+ Rate movies
+ Pagination

## Setup requirements.

```
git clone https://github.com/davinbarron/react-movie-labs.git
cd movies
npm start
```

## API endpoints.

+ Top rated list of movies - movie/top_rated
+ Trending movies by day - trending/movie/day
+ Recommended list of movies - movie/movie_id/recommendations
+ Movie videos - movie/movie_id/videos
+ Movie cast - movie/movie_id/credits
+ Actors' movies - person/person_id/movie_credits
+ Actor images - person/person_id/images
+ Popular actor - person/popular
+ Actor details - person/person_id
+ Add and delete rating - movie/movie_id/rating

## Routing.

+ /movies/top_rated - displays top rated movies.
+ /movies/trending - displays trending movies.
+ /movies/:id/recommendations - displays recommended movies.
+ /actors - displays actors.
+ /actors/:id - displays actor details.
+ /movies/playlist - displays playlist of upcoming movies.

## Independent learning (If relevant).

Emojibase:

Made use of the emojibase to enhance my readme with emojis

+ Emoji shortcodes - https://emojibase.dev/shortcodes/?

IFrame API:

The IFrame player API lets you embed a YouTube video player on your website and control the player using JavaScript.

+ Iframe API - https://developers.google.com/youtube/iframe_api_reference

Geeks for Geeks:

Learned how to paginate pages

+ Pagination: https://www.geeksforgeeks.org/how-to-customize-the-labels-for-previous-and-next-buttons-in-react-bootstrap-pagination/
