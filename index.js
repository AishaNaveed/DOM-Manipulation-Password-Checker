const regExpWeak = /[a-z]/;
const regExpMed = /\d+/;
const regExpStr = /.[!,#,@,&,$,%,*,?,_,-,(,)]/;
const bar = document.querySelector('.bar');
const input = document.querySelector('input');
const weak = document.querySelector('.weak');
const medium = document.querySelector('.medium');
const strong = document.querySelector('.strong');
const txt = document.querySelector('.txt');

input.addEventListener('keyup', function(event){
    if(input.value !== ''){
        bar.style.display = 'block';
        bar.style.display = 'flex';
        if(input.value.length < 8 && input.value.match(regExpWeak) || input.value.match(regExpMed) || input.value.match(regExpStr))
            no=1;
        if((input.value.length >= 8 && input.value.length <= 12) && ((input.value.match(regExpWeak)) && (input.value.match(regExpMed))) || ((input.value.match(regExpMed)) && (input.value.match(regExpStr))) || ((input.value.match(regExpWeak)) && (input.value.match(regExpStr))))
            no=2;
        if(input.value.length >= 12 && input.value.match(regExpWeak) && input.value.match(regExpMed) && input.value.match(regExpStr))
            no=3;
        if(no == 1){
            weak.classList.add('active');
            txt.style.display = 'block';
            txt.textContent = 'Should be longer';
            txt.classList.add('weak');
        }
        if(no == 2){
            medium.classList.add('active');
            txt.textContent = 'Pretty good';
            txt.classList.add('medium');
        }
        else{
            medium.classList.remove('active');
            txt.classList.remove('medium');
        }
        if(no == 3){
            medium.classList.add('active');
            strong.classList.add('active');
            txt.textContent = 'Grrrreat!';
            txt.classList.add('strong');
        }
        else{
            strong.classList.remove('active');
            txt.classList.remove('strong');
        }

    }
    else{
        bar.style.display = 'none';
        txt.style.display = 'none';
    }
});