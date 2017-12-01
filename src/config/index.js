var dev = require('./server.dev.json');
var prod = require('./server.prod.json');
var storage = require('./storage.json');
var app = require('./app.json');

export default function AppConfig() {
  var conf = Object.assign(app, storage);
  if(process.env.NODE_ENV !== 'production') {
   	conf = Object.assign(conf, dev);
  } else {
    conf = Object.assign(conf, prod);
  }
  return conf;

}