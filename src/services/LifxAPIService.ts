import * as rp from "request-promise";
import { Logger } from "../Utils/Logger";

export class LifxAPIService {
    private lifxURI = "https://api.lifx.com/v1/";

    private token: string;
    private options: any = {
        headers: {},
        json: true,
        method: "GET",
        uri: this.lifxURI,
    };

    constructor(token: string) {
        this.token = token;
        this.options.headers = {
            Authorization: "Bearer " + token,
        };
    }

    private async getAllLightsAPI(): Promise<any> {
        this.options.uri = this.lifxURI + "lights/all";
        return rp.get(this.options);
    }

    private async setStateAPI(selector: string, options: object): Promise<any> {
        this.options.uri = this.lifxURI + "lights/" + selector + "/state";
        this.options.method = "PUT";
        this.options.body = options;
        return rp.put(this.options);
    }

    public async setColor(color: string) {

        let lights = await this.getAllLightsAPI();
        Logger.info("getAllLightsAPI");
        Logger.info(lights);

        const bulbName = lights[0].id;
        const optionState = {
            power: "on",
            color: color, // "#84e0ff"
            brightness: 1,
            duration: 1,
        };
        const state = await this.setStateAPI(bulbName, optionState);
        Logger.info(state);
    }

}
