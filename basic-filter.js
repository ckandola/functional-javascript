function getShortMessages(messages){
    var onlyMessages = messages.filter(obj => obj.message.length < 50);
    return onlyMessages.map(x => x= x.message);
}

module.exports = getShortMessages;