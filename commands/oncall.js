var util = require('../util');

module.exports = function (param) {

    // param object contains the following keys:
    // 1. command - the primary command name
    // 2. args - an array of strings, which is user's message posted in the channel, separated by space
    // 3. user - Slack client user id
    // 4. channel - Slack client channel id
    // 5. commandConfig - the json object for this command from config/commands.json

    if(param.args.length==0) {
        util.postMessage(param.channel, param.commandConfig.description);
    } else {
        switch (param.args[0]) {
            case "dotcomsupport":
                util.postMessage(param.channel, "Onsite: +1 508 208 5916")
                break;
        
            default:
                util.postMessage(param.channel, "Try a valid team name. Use 'listteams' to list all teams!")
                break;
        }
    }
};