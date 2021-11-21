const txt = document.getElementById('txt');
const input = document.getElementById('pwdInput');
const progressBar = document.getElementById('myprogress');

let value = progressBar.value;
let pwdValue = input.value;

const trying = () => {

    value = Math.min(value + 5, 100);// % 100;
    progressBar.value = value;
    document.getElementById("progress-text").innerText = Math.round(value);

    if (value < 40) {
        txt.style.display = 'block';
        txt.textContent = 'Should be longer';
        txt.style.color = 'crimson';
        progressBar.classList.add('weak');
    }
    else if (value >= 40 && value <= 60) {
        txt.style.display = 'block';
        txt.textContent = 'Pretty good';
        txt.style.color = 'orange';
        progressBar.classList.add('medium');
    }
    else if (value > 60 && value < 100) {
        txt.style.display = 'block';
        txt.textContent = 'Grrrrreat';
        txt.style.color = 'green';
        progressBar.style.backgroundColor = 'green';
        progressBar.classList.add('strong');
    }
    else {
        txt.textContent = 'Your password should have a limit';
        input.style.display = 'none';
    }
}

//function is called whenever a key is pressed
input.addEventListener('keydown', function () {
    setInterval(trying(), 1000);
});