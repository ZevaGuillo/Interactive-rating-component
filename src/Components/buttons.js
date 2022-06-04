function QuizButton(props){


    return (
        <button className="w-9 p-2 text-medium-grey text-base rounded-full bg-dark-blue">{props.value}</button>
    )
}

function SubmitButton(props){
    return (
        <button className="my-5 w-full p-2 text-white text-base rounded-full bg-primary">SUBMIT</button>
    )
}

export {QuizButton, SubmitButton}