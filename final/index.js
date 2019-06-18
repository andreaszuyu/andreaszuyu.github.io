var btn = document.querySelector('.btn');
var rightNumber;
var i;

function restart() {
    rightNumber = Math.floor(Math.random() * 100);
    i = 0;
}
// 亂數
btn.addEventListener('click', function guessNum() {
    var userInput = document.querySelector('.user-input');
    var inputValue = userInput.value;
    var userNumber = Number(inputValue);
    var el = document.querySelector('.answer');
    //答案提示
    if (isNaN(userNumber)) {
        el.textContent = "Type in a NUMBER"
        return;
    } else if (userNumber > 100 || userNumber < 1) {
        el.textContent = "Range between 1 and 99"
        return;
    }
    i += 1;
    //按一次算一次 
    if (i == 1) {
        if (userNumber == rightNumber) {
            el.textContent = "Nice bro! Bingo!"
            restart();
            return;
        }
    } else if (i >= 1 && i < 10) {
        if (userNumber > rightNumber) {
            el.textContent = "Guess Lower"
            return;
        } else if (userNumber < rightNumber) {
            el.textContent = "Guess higher"
            return;
        } else if (userNumber == rightNumber) {
            el.textContent = "Bingo ! " + i + " times guessed"
            restart();
            return;
        }
    } else if (i == 10) {
        el.textContent = "Failed ! Restart !"
        restart();
        return;
    };
})

restart();