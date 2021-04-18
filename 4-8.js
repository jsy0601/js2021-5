let output = "";

for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10-i; j++){
        output += ' ';
    }
    for(let j = 0; j < i + 1; j++){
        output += '*';
    }
    output += '\n';
}

// 추가 예제 삼각형 만들기
for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10-i; j++){
        output += ' ';
    }
    for(let j = 0; j < i + 1; j++){
        output += '*';
    }
    for(let j = 1; j < i+1; j++){
        output += "*";
    }
    output += '\n';
}


// 마름모 만들기
for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10-i; j++){
        output += ' ';
    }
    for(let j = 0; j < i+1; j++){
        output += '*';
    }
    for(let j = 1; j < i+1; j++){
        output += "*";
    }
    output += '\n';
}
for(let i = 0; i < 10; i++){
    for(let j = 0; j < i+2; j++){
        output += ' ';
    }
    for(let j = 10; j > i+1; j--){
        output += "*"
    }
    for(let j = 9; j > i+1; j--){
        output += "*";
    }
    output += '\n';
}



// 원 만들기
for (i = 0; i <= 10 * 2; i++) {
    for (j = 0; j <= 10 * 2; j++) {
        let d =(i - 10) * (i - 10) + (j - 10) * (j - 10);
        if (d <= 10) {
            output += "*";
        } else {
            output += " ";
        }
    }
    output += "\n";
}
console.log(output);