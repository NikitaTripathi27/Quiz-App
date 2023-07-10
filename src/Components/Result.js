import './Result.css'
import { useNavigate } from 'react-router-dom/dist'
const Result = () => {
    const navigate =useNavigate()
    const handleStart =()=>{
        navigate('/home')
    }
    const user = localStorage.getItem('username')
    return ( 
    <>
    <div className='container'>
      
    <div className="res">
    <h1>Congratulations {user}!</h1>
    <p>&#128512;</p>
    <h2>Here's your Result</h2>

    <div className='total-ques'>
    <span>Score : </span><span> 30</span>
    </div>
        <div className='total-ques'>
    <span>Total no. of questions : </span><span> 04</span>
    </div>
    </div>
    <button className='btn-result' onClick={handleStart}>Start Again</button>
    </div>
    </>
     );
}
 
export default Result;