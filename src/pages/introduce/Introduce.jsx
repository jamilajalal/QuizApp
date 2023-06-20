import React, {useState} from 'react'
import './Introduce.css'
import Dropdown from '../../components/dropdown/Dropdown'
import { useNavigate } from 'react-router-dom'

const Introduce = () => {
  const difficulty =["easy","medium","hard"]
  const [difficultyChange,setDifficultyChange]=useState('')
  const navigate=useNavigate()
const TOTAL_QUESTIONS=10


const startQuiz=()=>{
    if(difficultyChange){
        navigate(`/quiz/${difficultyChange}/${TOTAL_QUESTIONS}`)
    }
}

  console.log(difficultyChange,"difficultyChange")
  return (
    <div className='introduce'>
<div className="introduce-container">
    <img src="https://img.freepik.com/premium-vector/quiz-logo_2728-12.jpg?w=740" width={200} height={200} alt="" />
    <Dropdown data={difficulty} setDifficultyChange={setDifficultyChange} />
    <div onClick={startQuiz} className='introduce-btn'>Start Quiz</div>
</div>



    </div>
  )
}

export default Introduce