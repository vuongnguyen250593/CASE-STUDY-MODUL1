let score = 0;
    let level = 0;
    let time = 100;       // Thời gian bắt đầu.
    let fullTime = 100;   // Thời gian thực hiện phép toán.
    let widthTime = 0;    // Chiều dài thanh hiển thị thời gian.

    function runPlus() {
        let runplus = document.getElementById("plus")
        if (parseInt(runplus.style.left + runplus.style.width) <= 1235) {
            runplus.style.left = parseInt(runplus.style.left) + 2 + "px";
        } else if (parseInt(runplus.style.left + runplus.style.width) > 1235) {
            runplus.style.left = "0px";
        }
        window.requestAnimationFrame(runPlus);
    }
    runPlus();

    function runMinus() {
        let runminus = document.getElementById("minus")
        if (parseInt(runminus.style.left + runminus.style.width) <= 1235) {
            runminus.style.left = parseInt(runminus.style.left) + 2 + "px";
        } else if (parseInt(runminus.style.left + runminus.style.width) > 1235) {
            runminus.style.left = "0px";
        }
        window.requestAnimationFrame(runMinus);
    }
    runMinus();

    function runMulti() {
        let runmulti = document.getElementById("multi")
        if (parseInt(runmulti.style.left + runmulti.style.width) <= 1235) {
            runmulti.style.left = parseInt(runmulti.style.left) + 2 + "px";
        } else if (parseInt(runmulti.style.left + runmulti.style.width) > 1235) {
            runmulti.style.left = "0px";
        }
        window.requestAnimationFrame(runMulti);
    }
    runMulti();

    function runDivide() {
        let rundivide = document.getElementById("divide")
        if (parseInt(rundivide.style.left + rundivide.style.width) <= 1235) {
            rundivide.style.left = parseInt(rundivide.style.left) + 2 + "px";
        } else if (parseInt(rundivide.style.left + rundivide.style.width) > 1235) {
            rundivide.style.left = "0px";
        }
        window.requestAnimationFrame(runDivide);
    }
    runDivide();

    function runEqual() {
        let runequal = document.getElementById("equal")
        if (parseInt(runequal.style.left + runequal.style.width) <= 1200) {
            runequal.style.left = parseInt(runequal.style.left) + 2 + "px";
        } else if (parseInt(runequal.style.left + runequal.style.width) > 1200) {
            runequal.style.left = "0px";
        }
        window.requestAnimationFrame(runEqual);
    }
    runEqual();


    function startGame() {
        time = fullTime;
        widthTime = document.getElementById("time").offsetWidth;
        document.getElementById("score").innerHTML = "Score: "+score;
        document.getElementById("level").innerHTML = "Level: "+level;
        generateCalculation();
        countDown();
    }
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    function getRandomOperator() {
        let operators = ["+", "-", "*", "/"];
        let ran = Math.floor(Math.random() * operators.length);
        return operators[ran];
    }

    function generateCalculation() {
        let number1 = getRandomNumber(1*level, 5*level);
        let number2 = getRandomNumber(1*level, 5*level);
        let op = getRandomOperator();
        let cal = number1 + " " + op + " " + number2;
        if(level >= 1){
            cal = number1 + " " + op + " " + number2 +" "+ getRandomOperator()+" "+getRandomNumber(2, 10);
        }
        if(level >= 2){
            cal = number1 + " " + op + " " + number2 +" "+ getRandomOperator()+" "+getRandomNumber(2, 10) +" "+ getRandomOperator()+" "+getRandomNumber(2, 10);
        }
        if(level >= 3){
            cal = number1 + " " + op + " " + number2 +" "+ getRandomOperator()+" "+getRandomNumber(2, 10) +" "+ getRandomOperator()+" "+getRandomNumber(2, 10) +" "+ getRandomOperator()+" "+getRandomNumber(2, 10);
        }
        if(level >= 4){
            cal = number1 + " " + op + " " + number2 +" "+ getRandomOperator()+" "+getRandomNumber(2, 10) +" "+ getRandomOperator()+" "+getRandomNumber(2, 10) +" "+ getRandomOperator()+" "+getRandomNumber(2, 10) +" "+ getRandomOperator()+" "+getRandomNumber(2, 10);
        }
        if(level >= 5){
            cal = number1 + " " + op + " " + number2 +" "+ getRandomOperator()+" "+getRandomNumber(2, 10) +" "+ getRandomOperator()+" "+getRandomNumber(2, 10) +" "+ getRandomOperator()+" "+getRandomNumber(2, 10) +" "+ getRandomOperator()+" "+getRandomNumber(2, 10) +" "+ getRandomOperator()+" "+getRandomNumber(2, 10);
        }
        if(level >= 6){
            cal = number1 + " " + op + " " + number2 +" "+ getRandomOperator()+" "+getRandomNumber(2, 10) +" "+ getRandomOperator()+" "+getRandomNumber(2, 10) +" "+ getRandomOperator()+" "+getRandomNumber(2, 10) +" "+ getRandomOperator()+" "+getRandomNumber(2, 10) +" "+ getRandomOperator()+" "+getRandomNumber(2, 10) +" "+ getRandomOperator()+" "+getRandomNumber(2, 10);
        }
        if(level >= 7){
            cal = number1 + " " + op + " " + number2 +" "+ getRandomOperator()+" "+getRandomNumber(2, 10) +" "+ getRandomOperator()+" "+getRandomNumber(2, 10) +" "+ getRandomOperator()+" "+getRandomNumber(2, 10) +" "+ getRandomOperator()+" "+getRandomNumber(2, 10) +" "+ getRandomOperator()+" "+getRandomNumber(2, 10) +" "+ getRandomOperator()+" "+getRandomNumber(2, 10) +" "+ getRandomOperator()+" "+getRandomNumber(2, 10);
        }
        if(level >= 8){
            cal = number1 + " " + op + " " + number2 +" "+ getRandomOperator()+" "+getRandomNumber(2, 10) +" "+ getRandomOperator()+" "+getRandomNumber(2, 10) +" "+ getRandomOperator()+" "+getRandomNumber(2, 10) +" "+ getRandomOperator()+" "+getRandomNumber(2, 10) +" "+ getRandomOperator()+" "+getRandomNumber(2, 10) +" "+ getRandomOperator()+" "+getRandomNumber(2, 10) +" "+ getRandomOperator()+" "+getRandomNumber(2, 10) +" "+ getRandomOperator()+" "+getRandomNumber(2, 10);
        }
        if(level >= 9){
            cal = number1 + " " + op + " " + number2 +" "+ getRandomOperator()+" "+getRandomNumber(2, 10) +" "+ getRandomOperator()+" "+getRandomNumber(2, 10) +" "+ getRandomOperator()+" "+getRandomNumber(2, 10) +" "+ getRandomOperator()+" "+getRandomNumber(2, 10) +" "+ getRandomOperator()+" "+getRandomNumber(2, 10) +" "+ getRandomOperator()+" "+getRandomNumber(2, 10) +" "+ getRandomOperator()+" "+getRandomNumber(2, 10) +" "+ getRandomOperator()+" "+getRandomNumber(2, 10) +" "+ getRandomOperator()+" "+getRandomNumber(2, 10);
        }
        if(level >= 10){
            cal = number1 + " " + op + " " + number2 +" "+ getRandomOperator()+" "+getRandomNumber(2, 10) +" "+ getRandomOperator()+" "+getRandomNumber(2, 10) +" "+ getRandomOperator()+" "+getRandomNumber(2, 10) +" "+ getRandomOperator()+" "+getRandomNumber(2, 10) +" "+ getRandomOperator()+" "+getRandomNumber(2, 10) +" "+ getRandomOperator()+" "+getRandomNumber(2, 10) +" "+ getRandomOperator()+" "+getRandomNumber(2, 10) +" "+ getRandomOperator()+" "+getRandomNumber(2, 10) +" "+ getRandomOperator()+" "+getRandomNumber(2, 10) +" "+ getRandomOperator()+" "+getRandomNumber(2, 10);
        }
        document.getElementById("calculation").innerHTML = cal; 
        document.getElementById("result").innerHTML = getRandomResult(cal);
    }

    function getRandomResult() {
        let randomResult = Math.random() >= 0.5;
        return randomResult ? getResult() : getFakeResult();
    }

    function getResult() {
        let cal = document.getElementById("calculation").innerHTML;
        return eval(cal);
    }

    function getFakeResult() {
        let fakeResult = getRandomNumber(getResult() - getRandomNumber(2,20), getResult() + getRandomNumber(2,20));
        return (fakeResult === getResult()) ? getFakeResult() : fakeResult;
    }
     function countDown() {
        let timeDiv = document.getElementById("time");
        let run = setInterval(function () {
            time-=0.1;
            timeDiv.style.width = widthTime * time/fullTime + "px";
            if(time <= 0){
                clearInterval(run);
                gameOver();
            }
        },100);
     }
    function check(btn) {
        let result = +document.getElementById("result").innerHTML;
        let check = false;
        switch (btn) {
            case "true":
                if (result == getResult()) check = true;
                break;
            case "false":
                if (result !== getResult()) check = true;
                break;
        }

        check?nextLevel():gameOver();
    }
    function nextLevel() {
        score += 2;
        level++;
        time = fullTime;
        document.getElementById("score").innerHTML = "Score: "+score;
        document.getElementById("level").innerHTML = "Level: "+level;
        document.getElementById("correct").currentTime = 0;
        document.getElementById("correct").play();
        generateCalculation();
    }
    function gameOver() {
        document.getElementById("true").style.display = "none";
        document.getElementById("false").style.display = "none";
        document.getElementById("wrong").play();
        alert("Ngu Quá. Chơi lại đi cho thông minh lên")
        // alert("Game Over. Your score is "+ score + ". Replay?");
        // gameOut();
        location.reload();

    }

    // function gameOut() {
    //     let youlose = document.getElementById("gameover");
    //     youlose.style.display = "block";
    // }


    startGame();