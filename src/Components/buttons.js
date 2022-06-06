function QuizButton(props){

    const handleOption = ()=>{
        props.setActive(props.value)
    }
    let active = props.active===props.value?'bg-primary text-very-dark-blue':''
    let className = " w-14 h-14 flex justify-center items-center text-white text-lg rounded-full bg-very-dark-blue " +active +'hover:bg-medium-grey '
    return (
        <div className={className} onClick={handleOption}>{props.value}</div>
    )
}

function SubmitButton(props){
    return (
        <button className="my-8 w-full p-4 text-white text-base rounded-submit bg-primary" onClick={props.click}>SUBMIT</button>
    )
}

export {QuizButton, SubmitButton}