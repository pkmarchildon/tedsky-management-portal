import http from 'http';
import * as dotenv from 'dotenv';

import { mongoConnect } from './services/mongo.js';
import app from './app.js';

dotenv.config();

const server = http.createServer(app);

const PORT = process.env.DEV_PORT;

async function startServer() {
  await mongoConnect();

  server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
}

startServer();
