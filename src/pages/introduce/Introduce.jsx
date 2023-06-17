import React, {useState} from 'react'
import './Introduce.css'
import Dropdown from '../../components/dropdown/Dropdown'
const Introduce = () => {
  const difficulty =["easy","medium","hard"]
  const [difficultyChange,setDifficultyChange]=useState('')
  return (
    <div className='introduce'>
<div className="introduce-container">
    <img src="https://img.freepik.com/premium-vector/quiz-logo_2728-12.jpg?w=740" width={200} height={200} alt="" />
    <Dropdown data={difficulty} setDifficultyDataChange={setDifficultyChange} />
    <div className='introduce-btn'>Quiz'e basla</div>
</div>



    </div>
  )
}

export default Introduce