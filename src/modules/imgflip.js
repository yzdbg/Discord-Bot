"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.name = void 0;
const axios_1 = __importDefault(require("axios"));
exports.name = 'imflip';
class Imgflip {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    logs() {
        console.log(this.username, this.password);
    }
    async meme(id, caption) {
        const params = {
            template_id: id,
            text0: "wdfhsdfg",
            text1: "sfhsdfgh",
            username: this.username,
            password: this.password,
        };
        axios_1.default.get(`https://api.imgflip.com/caption_image?template_id=${params.template_id}&username=${params.username}&password=${params.password}&text0=${params.text0}&text1=${params.text1}`)
            .then(function (response) {
            // handle success
            console.log(response);
        })
            .catch(function (error) {
            // handle error
            console.log(error);
        });
    }
}
exports.default = Imgflip;
