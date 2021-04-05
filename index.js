// Code your solutions in this file
const names = ["Lisa", "Kaitlin", "Jan"];
const event = [`surprise`];
let giveMessage = []
function writeCards(names, event){
    for (let i=0; i<names.length; i++){
        giveMessage.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
}
    return giveMessage;
}
const callCount = [0];
function countDown(callCount){
    while (callCount > 0 ){
        console.log( callCount);
        callCount -=1;
    }
    console.log(callCount);
}