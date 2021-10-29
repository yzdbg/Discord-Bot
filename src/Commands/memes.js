import axios from "axios";
export async function command_memes(interaction) {
    if (!interaction.isCommand()) {
        return;
    }
    const { commandName, options } = interaction;
    // Check if the interaction is happening in a discord server (to get channel.name)
    if (interaction.inGuild()) {
        console.log(`${interaction.user.tag} in ${interaction.channel?.name} in ${interaction.guild?.name} : used the ${commandName} command with '${options.get("input")?.value?.toString()}'`);
    }
    // Interaction happening in a DM
    else {
        console.log(`${interaction.user.tag} in a Direct Message : used the ${commandName} command with '${options.get("input")?.value?.toString()}'`);
    }
    let input = options.get("input")?.value?.toString().toLowerCase().split("-");
    axios.get("https://api.imgflip.com/get_memes")
        .then((res) => res)
        .then((data) => {
        let memes = data.data.data.memes;
        let meme = memes.find((meme) => {
            // If the input name matches the name of any meme returned by the API
            // Now returns the first match
            return meme.name.toString().toLowerCase().includes(input[0]);
        });
        if (!meme) {
            interaction.reply("Is that a meme from the future or something ?");
        }
        else {
            const params = {
                template_id: meme.id,
                text0: input[1],
                text1: input[2],
                username: process.env.IMGFLIP_USERNAME,
                password: process.env.IMGFLIP_PASSWORD,
            };
            axios.get(`https://api.imgflip.com/caption_image?template_id=${params.template_id}&username=${params.username}&password=${params.password}&text0=${params.text0}&text1=${params.text1}`)
                .then(function (response) {
                // handle success
                interaction.reply(response.data.data.url);
            })
                .catch(function (error) {
                // handle error
                console.log(error);
            });
        }
    });
}
