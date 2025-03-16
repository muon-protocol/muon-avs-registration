export default {
  error: (message) => console.log("\x1b[31m" + message + "\x1b[0m"),
  warn: (message) => console.log("\x1b[33m" + message + "\x1b[0m"),
  info: (message) => console.log("\x1b[32m" + message + "\x1b[0m"),
  debug: (message) => console.log("\x1b[34m" + message + "\x1b[0m"),
  log: (content) => console.log(content),
};
