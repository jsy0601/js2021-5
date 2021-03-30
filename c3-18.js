const repl = require('repl');

repl.start({
    prompt: "숫자 입력> ",
    eval: (command, context, filename, callback) => {
        let number = Number(command);

        if(isNaN(number)){
            console.log("숫자가 아닙니다.");
        }else{
            console.log("숫자입니다.");
        }

        callback;
    }
})