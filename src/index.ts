import winston from "winston";
import app from "./App";

const logger = winston.createLogger({
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: "combined.log" })
    ]
  });

// export default logger;

const port = process.env.PORT || 3000;

app.listen(port, () => {
//   if (err) {
    // return console.log(err);
//   }
// logger.info('server is listening on ${port}');

logger.info(`server is listening on ${port}`);
});