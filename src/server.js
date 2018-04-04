require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const octokit = require('@octokit/rest');
const routes = require('./routes/routes');
const nacl = require('tweetnacl');
nacl.util = require('tweetnacl-util');

const server = express();
server.use(bodyParser.json());

const github = octokit({ debug: true });
github.authenticate({
  type: 'oauth',
  token: process.env.GITHUB_TOKEN
});

routes(server);

server.get('/', (req, res) => {
  // TODO Return a response that documents the other routes/operations available 
});
  // TODO Retrieve a list of all gists for the currently authed user


server.listen(3000);

