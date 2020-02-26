export function athleteController(){
    var messages = {};

    messages.list = [{id:1, text: 'hello'}];

    messages.add = function(message){
        messages.list.push({id: messages.list.length, text: message});
    };

    return messages;
}