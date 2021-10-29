import axios from "axios";
export const name = 'imflip';

class Imgflip {
    username: string;
    password: string;
    constructor( username : string, password : string ) {
      this.username = username
      this.password = password
    }
    logs(){
        console.log(this.username, this.password)
    }
    async meme(id : number, caption : string){
        const params = {
            template_id : id,
            text0: "wdfhsdfg",
            text1: "sfhsdfgh",
            username: this.username,
            password: this.password,
        }
        axios.get(`https://api.imgflip.com/caption_image?template_id=${params.template_id}&username=${params.username}&password=${params.password}&text0=${params.text0}&text1=${params.text1}`)
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
}
export default Imgflip
