const name = "Andrew";

const sayName = () => {
    const name = "Ade";
    const message = "My name is " + name;
    document.write(message);
}
sayName();
document.write("</br>")
// Arrow function with single argument
const square =(x) => {
    return (x * x);
}
// it can also be written as: when the function has only one line of code
const squar = x => x*x;
document.write(square(2));
document.write("</br>");
const cube = (y) => {
    return(square(y)* y);
}
document.write(cube(2));
document.write(squar(2));
document.write(square(2));
document.write(name)