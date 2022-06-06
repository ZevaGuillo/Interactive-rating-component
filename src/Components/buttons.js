function QuizButton(props){


    const handleOption = ()=>{
        props.setActive(props.value)
    }

    let active = props.active===props.value?'bg-primary':''
    let className = "w-9 p-2 text-medium-grey text-base rounded-full bg-dark-blue " + active
    return (
        <div className={className} onClick={handleOption}>{props.value}</div>
    )
}

function SubmitButton(props){
    return (
        <button className="my-5 w-full p-2 text-white text-base rounded-full bg-primary" onClick={props.click}>SUBMIT</button>
    )
}

export {QuizButton, SubmitButton}