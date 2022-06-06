import illustration from '../images/illustration-thank-you.svg'


export default function QuizPage(props){


    return (
    <div className='py-4 flex items-center flex-col'>
        <div className='flex justify-center items-center w-full bg-dark-blue rounded-full'>
          <img src={illustration} alt="star" className='w-auto'/>
        </div>
        <div className='mt-8 w-auto rounded-submit px-4 py-2 bg-very-dark-blue text-base text-center text-primary'>You Selected {props.select} out of 5</div>
        <h2 className='mt-8 text-white text-center'>Thank you!</h2>
        <p className='mt-4 mb-8 text-base text-center text-medium-grey'>We appreciate you taking the time to give a rating if you ever need more support, don't hesitate to get in touch!</p>
      </div>
    )
}
