import { LifxAPIService } from "../services/LifxAPIService";
import { Logger } from "../utils/Logger";

const lifxAPIService = new LifxAPIService("c8dbae8dc120496d31bb6851412867c8eb82bdac5e318eb864b8d1eb4c6101d4");

export const lightRoute = (req: any, res: any)  => {

    let color: string = req.query.color;
    let power: boolean = req.query.power;

    Logger.info("get: /light in color = " + color);
    Logger.info("get: /light in power = " + power);

    if(color != undefined) {
      lifxAPIService.setColor(color);
    }
    if(power != undefined) {
      lifxAPIService.setPower(power);
    }

    res.json({
      message: "Init page"
    });
};

// curl "https://api.lifx.com/v1/lights/all" \ -H "Authorization: Bearer YOUR_APP_TOKEN"
