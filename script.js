let body = document.querySelector('body');
body.innerHTML = '<div class="whiteback"><p id="output">&#160;</p><div id="circle" style=" margin: 25px;"> <div id="circle_internal"><p id="eight">8</p></div></div><input type="text" id="input" placeholder="Ask and push me"></div>';


const ball = document.getElementById('circle');
const input = document.getElementById('input');
const output = document.getElementById('output');
const answers = ['It is certain', //1
                'Yes — definitely', //1
                'Most likely', //1
                'Signs point to yes', //1 
                'Reply hazy, try again', //1
                'Cannot predict now', // 1
                'My reply is no', //1
                'Very doubtful']; //1

const randomAnswer = () => answers[Math.floor((answers.length) * Math.random())];  

ball.addEventListener('click', () =>{
    console.clear();
    console.log('I am 8-eight ball');
    let inpt = input.value;
    if(!inpt)
    {
        input.classList.add("input-shake-red");
        input.placeholder = "Right here";
    }
    if(inpt)
    {
        input.placeholder = "Ask and push me... again";
        input.classList.remove("input-shake-red");
        ball.classList.add("shaker");
        output.innerHTML = randomAnswer();
        output.classList.add("appear");
    }
});
ball.addEventListener("animationend", () => {
    ball.classList.remove("shaker");
    output.classList.remove("appear");
});