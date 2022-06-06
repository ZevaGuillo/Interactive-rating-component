import React from 'react';
import QuizPage from './Components/QuizPage';
import SubmitPage from './Components/SubmitPage';

function App() {
  const [isSubmit, setIsSubmit] = React.useState(false);
  const [select, setSelect] = React.useState(0);

  return (
    <div className="rounded-lg w-96 p-5 bg-medium-grey text-3xl font-bold">
      {
        !isSubmit?
          <QuizPage submitState={(value)=>setIsSubmit(value)} chooseSelect={setSelect}/>:
          <SubmitPage select={select}/>
      }
      
    </div>
  );
}

export default App;
