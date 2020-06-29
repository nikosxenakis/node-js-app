// import { DatabaseUtil } from "../Utils/databaseUtil";
// import { Logger } from "../Utils/Logger";

export const initRoute = (req: any, res: any)  => {
    // Logger.info("get: /");
    // const dbRes = DatabaseUtil.access_db();

    res.render('index')

    // res.json({
    //   message: "Init page"
    // });
};
