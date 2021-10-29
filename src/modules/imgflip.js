import axios from "axios";
export const name = 'imflip';
class Imgflip {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    async meme(userInput) {
        let link;
        axios.get("https://api.imgflip.com/get_memes")
            .then((res) => res)
            .then((data) => {
            let memes = data.data.data.memes;
            let meme = memes.find((meme) => {
                // If the input name matches the name of any meme returned by the API
                // Now returns the first match
                return meme.name.toString().toLowerCase().includes(userInput);
            });
            if (!meme) {
                console.log("No meme found");
            }
            else {
                const params = {
                    template_id: meme.id,
                    text0: "nik",
                    text1: "mok",
                    username: this.username,
                    password: this.password,
                };
                axios.get(`https://api.imgflip.com/caption_image?template_id=${params.template_id}&username=${params.username}&password=${params.password}&text0=${params.text0}&text1=${params.text1}`)
                    .then(function (response) {
                    // handle success
                    link = response.data.data.url;
                })
                    .catch(function (error) {
                    // handle error
                    console.log(error);
                });
            }
        })
            .finally(() => {
            console.log(link);
        });
    }
}
export default Imgflip;
