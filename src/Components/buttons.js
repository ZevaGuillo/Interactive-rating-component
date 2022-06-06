function QuizButton(props){

    const handleOption = ()=>{
        props.setActive(props.value)
    }

    let className = `bg-dark-blue-2 w-14 h-14 flex justify-center items-center text-medium-grey text-lg rounded-full hover:bg-medium-grey hover:text-white`
    let active = props.active===props.value?className.replace('bg-dark-blue-2','bg-primary').replace('text-medium-grey','text-white'):className
    
    return (
        <div className={active} onClick={handleOption}>{props.value}</div>
    )
}

function SubmitButton(props){
    return (
        <button className="my-8 w-full p-4 text-white text-base rounded-submit bg-primary" onClick={props.click}>SUBMIT</button>
    )
}

export {QuizButton, SubmitButton}