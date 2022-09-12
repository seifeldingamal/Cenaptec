import http from "http";
import express, { Express } from "express";
import routes from "./routes/Hello";
import cors from "cors";

const router: Express = express();

router.use(express.urlencoded({ extended: false }));
router.use(express.json());
router.use(cors());

router.use("/api", routes);

router.use((req, res, next) => {
  const error = new Error("not found");
  return res.status(404).json({
    message: error.message,
  });
});

/** Server */
const httpServer = http.createServer(router);
const PORT: any = process.env.PORT ?? 8000;
httpServer.listen(PORT, () =>
  console.log(`The server is running on port ${PORT}`)
);
