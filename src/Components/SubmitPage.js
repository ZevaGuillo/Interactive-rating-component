import illustration from '../images/illustration-thank-you.svg'


export default function QuizPage(props){


    return (
    <div>
        <div className='flex justify-center w-full bg-dark-blue rounded-full'>
        <img src={illustration} alt="star" className='w-auto'/>
        </div>
        <div className='text-base'>You Select {props.select} out of 5</div>
        <h2>Thank you!</h2>
        <p className='text-base'>We appreciate you taking the time to give a rating if you ever need more support, don't hesitate to get in touch!</p>
      </div>
    )
}
