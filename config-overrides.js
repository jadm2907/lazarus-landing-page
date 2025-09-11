module.exports = function override(config) {
  config.resolve.fallback = {
    os: false,
    fs: false,
    path: false,
    zlib: false,
    http: false,
    https: false,
  };
  return config;
};