require('dotenv').config({path: '../.env'});
import Server from './server';

console.log('node env :', __dirname, process.env.NODE_ENV);

// Start server and set the port listened
new Server(5000).start();
