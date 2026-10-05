function saySmth(text, milliseconds) {
    setTimeout(() => {
        console.log(text);
    }, milliseconds);

}

saySmth("Hello Marta!", 1000);