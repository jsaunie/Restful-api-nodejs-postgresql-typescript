import Server from './server';
import dotEnv from 'dotenv';

// Config environment variable
dotEnv.config();

// Start server and set the port listened
new Server(5000).start();
