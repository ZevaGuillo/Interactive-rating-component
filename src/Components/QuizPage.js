import React from 'react'
import iconStar from '../images/icon-star.svg'
import {QuizButton, SubmitButton} from './buttons'


export default function QuizPage(props){
    const [active, setActive] = React.useState(0);
    
    const handleSubmit = ()=>{
        if(active){
            props.submitState(true)
            props.chooseSelect(active)
        }
    }

    const createButtonsQuiz = ()=>{
        let btns = []
        for(let i=1; i<=5; i++){
            btns.push(<QuizButton value={i} key={i} active={active} setActive={(value)=>setActive(value)}/>)
        }
        return btns
    }

    return (
    <>
        <div className='w-9 p-3 bg-dark-blue rounded-full'>
        <img src={iconStar} alt="star" className='w-auto'/>
        </div>
        <h1 className='text-3xl my-3 text-white'>How did we do?</h1>
        <p className='my-5 text-base'>
            Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
        </p>
        <div className=' w-full flex place-content-around'>
            {createButtonsQuiz()}
        </div>
        <SubmitButton click={handleSubmit}/>
      </>
    )
}
