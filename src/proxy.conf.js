const PROXY_CONFIG = [
  {
    "/api/*": {
    target: 'http://127.0.0.1:8000/person',
    secure: false,
    logLevel: 'debug',
  }
}
]

module.exports = PROXY_CONFIG;
