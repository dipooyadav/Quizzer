import {data,totalQuestions,currentQuestion } from '../index';
let ops;
function setGamePage(curr,total){
    let gamePage = `

    <div id="timer"><h2 id="timer_now">40</h2></div>
    <div id="main_card">
        <div id="ques_count">

        </div>
        <div id="que_plus_option">
            
        </div>
        
    </div>
    <div id="next"><h2>Next -></h2></div>
`;
    document.getElementById('main_div').innerHTML = gamePage;
} 

function renderOption(curr){
    const rp = document.getElementById("que_plus_option");
    
    
    if(data.length===0){
        rp.innerHTML=`<h1>Oops No Data found</h2>`;
        return;
    }


    document.getElementById('ques_count').innerHTML = `
    <p>QUESTION ${currentQuestion+1} OF ${totalQuestions}</p>
    `;
    
    
    let counter = 1;
    rp.innerHTML = `
    <div id="ques_box">
        <p id="question">${data[curr].question}</p>
    </div>
    ${
        ops = '',
        data[curr].incorrect_answers.forEach((op,index) => {
            ops += `
            <div id="options" class="option1">
                <span id="option_number_${index}" class="op">${counter}</span> <span id="op_value">${op}</span>
            </div>
            `;
            counter++;

        }),ops
    }
    <div id="progress">
        <progress value="${(currentQuestion+1)*100/totalQuestions}" max="100"></progress>
    </div>
    `;
}



export {
    setGamePage, renderOption
}