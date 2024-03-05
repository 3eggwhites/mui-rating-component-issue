import { useState } from 'react';
import { Rating, Typography } from '@mui/material';

function RemoteApp() {
  const [rating, setRating] = useState<number | null>(2);
  return (
    <>
      <Typography variant="h2">{`Remote App`}</Typography>
      <Typography component="legend">Remote Rating</Typography>
      <Rating id="remote" name="home-rating" value={rating} onChange={(_event, value) => setRating(value)} />
    </>
  );
}

export default RemoteApp;
