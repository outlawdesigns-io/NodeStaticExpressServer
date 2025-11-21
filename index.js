#!/usr/bin/env node

import express from 'express';
import morgan from 'morgan';
import path from 'path';

const SRVDIR = process.env.SRV_DIR || './public';
const PORT = process.env.PORT || 80;
const app = express();

app.set('trust proxy',true);
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "*");
  next();
});
if(process.env.NODE_ENV !== 'testing'){
  //start logging
  morgan.token('date', function() {
    var p = new Date().toString().replace(/[A-Z]{3}\+/,'+').split(/ /);
    return( p[2]+'/'+p[1]+'/'+p[3]+':'+p[4]+' '+p[5].replace('GMT','') );
  });
  app.use(morgan('combined'));
}

app.use(express.static(SRVDIR));

// Handle all SPA routes
app.get('/{*splat}', (req, res) => {
  res.sendFile(path.resolve(SRVDIR,'index.html'));
});

app.listen(PORT, () => {
  console.log(`Serving ${SRVDIR} on port ${PORT}`);
});
