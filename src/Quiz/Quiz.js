import React, { useRef, useState } from 'react'
import question from './quizApi';
function Quiz() {
    let [qIndex,setQIndex] = useState(0);
    const [ques,setQues] = useState(question[qIndex]);
    const [lick,setLick] = useState(false);
    let [score,setScore] = useState(0);
    let [res,setRes] = useState(false)
    let optOne = useRef(null);
    let optTwo = useRef(null);
    let optThree = useRef(null);
    let optFour = useRef(null);
    let optList = [optOne,optTwo,optThree,optFour];
    const chexkOption = (e,answer) => {
        if(lick === false){
    if(ques.correct === answer){
            e.target.classList.add('correct');
            setLick(true);
            setScore((prev) => prev+1);
        }else{
            e.target.classList.add('wrong');
            setLick(true);
            optList[ques.correct-1].current.classList.add('correct');
        }
    }
}
    const next = () => {
        if(lick === true){
            if(qIndex === question.length-1){
                setRes(true);
                return 0;
            }
            setQIndex(++qIndex);
            setQues(question[qIndex]);
            setLick(false);
            optList.map((e) => {
                e.current.classList.remove('wrong');
                e.current.classList.remove('correct');
                return null;
            })
        }
    }
    const quixReset = () => {
        setQIndex(0);
        setQues(question[0]);
        setLick(false)
        setRes(false)
        setScore(0);
    }
  return (
    <>
         <div class="container">
         <h1>QUIZ APP</h1>
         <div class="quiz-box">
         {res ? <> 
         <h3>Your Score is {score} Out of {question.length}</h3>
         <button className='btn' onClick={quixReset}>Reset</button></> :  
            <>
            <h2 class="ques">{`${qIndex+1}) `}{ques.quest}</h2>
            <div class="box">
                <input type="radio"  id="option1" class="opt" value="a" name="option" />
                <label for="option1" ref={optOne} onClick={(e) => chexkOption(e,1)}>{ques.a}</label>
            </div>
            <div class="box">
                <input type="radio"  id="option2" class="opt" value="b" name="option" />
                <label for="option2" ref={optTwo} onClick={(e) => chexkOption(e,2)}>{ques.b}</label>
            </div>
            <div class="box">
                <input type="radio"  id="option3" class="opt" value="c" name="option" />
                <label for="option3" ref={optThree} onClick={(e) => chexkOption(e,3)}>{ques.c}</label>
            </div>
            <div class="box">
                <input type="radio"  id="option4" class="opt" value="d" name="option" />
                <label for="option4" ref={optFour} onClick={(e) => chexkOption(e,4)}>{ques.d}</label>
            </div>
            <button class="btn" onClick={() => next()}>Next</button>
            <p style={{textAlign:'center',}}>{qIndex+1} of {question.length} Question</p>
            </>
        }
        </div>
    </div>
    </>
  )
}
export default Quiz;