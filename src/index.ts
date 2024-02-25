import express from "express";
import http from "http";
import cors from "cors";
import dotenv from "dotenv";
import { MongoClient, ServerApiVersion } from "mongodb";
import { user_router } from "./modules/user/user_routes";

dotenv.config();

const port = process.env.PORT || 8000;
const mongo_uri = process.env.MONGO_URI;

const app = express();

app.use(cors());
app.use(express.json());
app.use(user_router);

const client = new MongoClient(mongo_uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export { client };

const server = http.createServer(app);

server.listen(port, () => {
  console.log(
    `server connected to port ${port} and url http://localhost:${port}/`
  );
});
