// add connection to mogoDB in here
const { connect, connection } = require('mongoose');

const connectionString = 'mongodb://127.0.0.1:27017/socialNetDB';

connect(connectionString);

module.exports = connection;
