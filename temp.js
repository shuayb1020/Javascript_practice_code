function say(something) {
    console.log(something);
}
function exec(func,arg) {
    func(arg);
}
exec(say, 'Hi, there');

// passing function directly
exec(function say(something) {
    console.log(something);
},'Greetings, everyone') 