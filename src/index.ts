import dotenv from "dotenv";
dotenv.config();

import server, { proxyM3U8 } from "./server";

server();
