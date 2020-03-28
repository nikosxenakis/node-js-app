import winston from "winston";

export class Logger {

  public static info(msg: string) {
    Logger.logger.info(msg);
  }
  private static logger = winston.createLogger({
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: "combined.log" })
    ]
  });

}
