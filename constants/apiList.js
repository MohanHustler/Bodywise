import { dev } from "./dev";
import { stg } from "./stg";
import { prod } from "./prod";

let config = dev;

// switch (process.env.REACT_APP_ENV) {
//   case "development":
//     config = dev;
//     break;
//   case "staging":
//     config = stg;
//     break;
//   case "production":
//     config = prod;
//     break;
//   default:
//     config = dev;
// }

export default config;
