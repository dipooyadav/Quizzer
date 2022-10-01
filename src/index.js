import './front-end/styles.css';
import {categoryPage} from './pages/category_page'
import {setGamePage,renderOption} from './pages/game_page';
let content = document.getElementById('main_div');
let data = [];
let currentQuestion = -1;
let totalQuestions = 0,category=0,difficulty="easy",loading;
let timerInv,timer;
let score=0;

if(window.location.hash=='')

{
    window.location.hash='#/'

}

window.addEventListener('load', ()=>
{
    router(window.location.hash);
})

window.addEventListener('hashchange',()=>{
    
   router(window.location.hash);
})


const router = ( (route)  =>  {
    content.innerHTML='';
    
    switch(route)
    {
        case '#/' :  {content.innerHTML = categoryPage;
                 currentQuestion = -1;
                 score=0;
            let startButton = document.getElementById('start_game');
            startButton.addEventListener('click', async ()=>{
                totalQuestions = document.getElementById('number_of_questions').value;
                category = document.getElementById('category').value;
                difficulty = document.getElementById('difficulty').value;
                let link = `https://opentdb.com/api.php?amount=${totalQuestions}&category=${category}&difficulty=${difficulty}&type=multiple`;
                loading  = document.getElementById('loading');
                loading.style.display = 'grid';
                await fetch_questions(link);
                loading.style.display = 'none';

                window.location.hash='#/game_page/';
               
            })

            
        }
        break;
        case '#/game_page/': {
            setGamePage(currentQuestion,totalQuestions);
            timer=document.getElementById('timer_now');
            nextBtnEvent();
            const nextbtn = document.getElementById('next');
            nextbtn.click();
           
            
            
        }
        break;
        case '#/score/':{
            content.innerHTML =
            `<div id="main_card" class="score_class">
                <div>
                    <h2>YOUR SCORE IS</h2>
                </div>  
                <div>
                    <h2 id="score">${score}</h2>
                </div>
                <div>
                    <div id="play_again"><h2>Play Again</h2></div>
                </div>          
            </div>`;
            document.getElementById('play_again').addEventListener("click", ()=>{
                window.location.hash='#/';
            })
        }break;
        default :
            return console.log("404!!!");
    }

});

async function fetch_questions(apiLink) {
    const result = await fetch (`${apiLink}`)
    data = (await result.json()).results;
    data.forEach(op => {
        let options=op.incorrect_answers
        let y=Math.floor(Math.random() * 4);
        op
        options.splice(y,0,op.correct_answer);
        op.incorrect_answers = options;
    });
}
function addOptionListener(){
   
    let indexes=[0,1,2,3];
    indexes.forEach((index)=>{
           let option = document.querySelector(`#option_number_${index}`);
           option.addEventListener("click",(event)=>check_correct(event,index));

    })
}

function check_correct(event,index){

    if(data[currentQuestion].incorrect_answers[index]===data[currentQuestion].correct_answer){
        event.target.parentElement.classList.add("correct");
        score++;
    }
    else{
        event.target.parentElement.classList.add("incorrect");
        let correct_index=data[currentQuestion].incorrect_answers.findIndex((val)=>val===data[currentQuestion].correct_answer);
        document.querySelector(`#option_number_${correct_index}`).parentElement.classList.add("correct");
    }
    
}

function  nextBtnEvent(){
    const nextbtn = document.getElementById('next');
    nextbtn.addEventListener('click',()=>{
        clearInterval(timerInv);
        let t = 20;
        timerInv = setInterval(()=>{
        
            timer.innerHTML = t;

            if(timer.innerHTML==0)
            {
                clearInterval(timerInv);
                nextbtn.click();
            }
            t--;
        },1000);
        
        if(currentQuestion==totalQuestions-1){
            clearInterval(timerInv);
            window.location.hash='#/score/';
           return;   
        }

       
        currentQuestion++;         
        renderOption(currentQuestion);
        addOptionListener();
       
    });

}




export { data, totalQuestions, currentQuestion };