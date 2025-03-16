import "dotenv/config";
import registerScript from "./register.js";

async function run(method) {
  switch (method) {
    case "register":
      registerScript.run();
      break;
    default:
      break;
  }
}

run(process.argv[2]);
