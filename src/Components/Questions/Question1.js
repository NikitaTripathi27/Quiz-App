import './Question.css'
import {useState} from "react"
import { useNavigate } from 'react-router-dom'
const Question = ({queslist ,score ,setscore ,answerArray ,setanswerArray}) => {
    console.log(queslist)
    setanswerArray(queslist.answer)
    const [check ,setcheck] =useState(false)
    const[selectOption ,setselectOption] = useState([])

    const calculateScore=()=>{
        let count=0;
        for(let i = 0 ;i < selectOption.length ;i++){
            if(answerArray.includes(selectOption[i])){
                count++;
            }   
        }
        if(count===selectOption.length){
            setscore(prev => prev+10)
        }
    }

    const handleChange=(e)=>{
        const{value ,checked} =e.target
        if(checked){
            setselectOption(prev=>[...prev,value])
        }
        else{
          
            setselectOption(newarr =>{
                return [...newarr.filter(val => val!==value)]
            })
        }

        calculateScore()
    }
    console.log(selectOption)
    console.log(score)
    return ( 
    <>
    <div className='container'>
    <div className="ques-text">{queslist.question}</div>
    <div className='li-container'>
        {queslist.options.map((item ,index)=>(
            <div key={index}>
                <input 
                type="checkbox"
                value={item}
                id={item}
                onChange={handleChange}
                />
                <label htmlFor={item} className='ques-text'>{item}</label>
                </div>
        ))}
        </div>
        </div>
   
    </> 
    );
}
 
export default Question;