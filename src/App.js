import React from 'react';
import QuizPage from './Components/QuizPage';
import SubmitPage from './Components/SubmitPage';

function App() {
  const [isSubmit, setIsSubmit] = React.useState(false);
  const [select, setSelect] = React.useState(0);

  return (
    <div className="rounded-card w-96 px-6 pt-8 text-3xl font-bold card-bg lg:w-lg">
      {
        !isSubmit?
          <QuizPage submitState={(value)=>setIsSubmit(value)} chooseSelect={setSelect}/>:
          <SubmitPage select={select}/>
      }
      
    </div>
  );
}

export default App;
