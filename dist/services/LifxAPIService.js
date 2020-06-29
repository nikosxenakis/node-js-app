"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const rp = __importStar(require("request-promise"));
// import { Logger } from "../Utils/Logger";
class LifxAPIService {
    constructor(token) {
        this.lifxURI = "https://api.lifx.com/v1/";
        this.options = {
            headers: {},
            json: true,
            method: "GET",
            uri: this.lifxURI,
        };
        this.token = token;
        this.options.headers = {
            Authorization: "Bearer " + token,
        };
    }
    getAllLightsAPI() {
        return __awaiter(this, void 0, void 0, function* () {
            this.options.uri = this.lifxURI + "lights/all";
            return rp.get(this.options);
        });
    }
    setStateAPI(selector, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.options.uri = this.lifxURI + "lights/" + selector + "/state";
            this.options.method = "PUT";
            this.options.body = options;
            return rp.put(this.options);
        });
    }
    setColor(color) {
        return __awaiter(this, void 0, void 0, function* () {
            let lights = yield this.getAllLightsAPI();
            // Logger.info("getAllLightsAPI");
            // Logger.info(lights);
            const bulbName = lights[0].id;
            const optionState = {
                power: "on",
                color: color,
                brightness: 1,
                duration: 1,
            };
            const state = yield this.setStateAPI(bulbName, optionState);
            // Logger.info(state);
        });
    }
    setPower(power) {
        return __awaiter(this, void 0, void 0, function* () {
            let powerStr = "off";
            if (power == true)
                powerStr = "on";
            let lights = yield this.getAllLightsAPI();
            // Logger.info("getAllLightsAPI");
            // Logger.info(lights);
            const bulbName = lights[0].id;
            const optionState = {
                power: powerStr,
                brightness: 1,
                duration: 1,
            };
            const state = yield this.setStateAPI(bulbName, optionState);
            // Logger.info(state);
        });
    }
}
exports.LifxAPIService = LifxAPIService;
//# sourceMappingURL=LifxAPIService.js.map