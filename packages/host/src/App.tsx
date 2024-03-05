import { useState } from 'react';
import { Box, Rating, Stack, Typography } from '@mui/material';
import './App.css';

// Import remote modules using static imports.
// Use them inside the app component.
import RemoteApp from 'remoteApp/RemoteApp';

function App() {
  const [rating, setRating] = useState<number | null>(4);

  return (
    <Stack component="div">
      <Box>
        <Typography variant="h1">Host App</Typography>
        <Typography component="legend">Host Rating</Typography>
        <Rating id="host" name="host-rating" value={rating} onChange={(_event, value) => setRating(value)} />
      </Box>
      <Box>
        <RemoteApp />
      </Box>
    </Stack>
  )
}

export default App;
