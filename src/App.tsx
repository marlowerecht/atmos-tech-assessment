import React, { useEffect, useState } from 'react'

import questions from './questions.json'
import Button from './components/Button'
import Question from './components/Question'
import ProgressBar from './components/ProgressBar'
import { toTitleCase } from './utils'
import { Question as QuestionType } from './types'

function App() {

  // gives data object the index of the question asked and the user's response
  interface Data {
    questionIndex: string,
    response: string
  }

  const [index, setIndex] = useState(0)
  const [data, setData] = useState<Data>({} as Data)
  const [status, setStatus] = useState({ state: '', lastSaved: new Date() })
  const [modal, setModal] = useState<string|null>(null)

  const hideModal = () => {
    document.body.style.overflow = 'auto'
    setModal(null)
  }

  const showModal = (newModal: string) => {
    document.body.style.overflow = 'hidden'
    setModal(newModal)
  }

  const save = () => {
    if (Object.keys(data).length > 0) {
      setStatus({ ...status, state: 'working' })
      setTimeout(() => {
        setStatus({ state: 'saved', lastSaved: new Date() })
      }, 1000)
    }
  }

  type SomeFunction = () => void;
  type Timer = ReturnType<typeof setTimeout>;
  const [ timer, setTimer ] = useState<Timer>();

  // debounce function
    // fn will only run if the delay time is reached
  const debounce =<Func extends SomeFunction>(fn: Func, delay: number) => {
    return () => {
      clearTimeout(timer);
      setTimer(setTimeout(() => fn(), delay));
    }
  };

  // debouncing save function so it only runs after one second without timer being reset
  const debounceSaveFunc = debounce(save, 1000)

  // save func will run once data hasn't changed in one sec
  useEffect(() => {
    debounceSaveFunc()
  }, [data])

  const renderStatus = () => {
    switch (status.state) {
      case 'saved':
        return `Saved at ${status.lastSaved.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        })}`
      case 'working':
        return 'Saving...'
      case 'error':
        return 'Error'
      default:
        return null
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // index of question asked is ID of question
      // name is string of index passed from Question to field components
    // response is user's input value
    setData({ ...data, questionIndex: e.target.name, response: e.target.value })
  }

  const question: QuestionType = questions[index]

  // ********* THIS CURRENTLY DOES NOT WORK ********
  
  // changes index based on if question was answered correctly if not
  const onNextClick = () => {

    // if the answer matches the response and the question is not the last in the array
    if (question.answer === data.response && index < questions.length - 1) {
      // then create array of questions with harder difficulties
      const harderQuestions = questions.filter((q) =>  q.difficulty > question.difficulty)
      // then set the index to the id of the first question in that array
      setIndex(harderQuestions[0].id)  
    }

    // if the answer does not match the response but the question is not the first in the array
    else if (question.answer !== data.response && index > 0) {
      //then create array of questions with easier difficulties
      const easierQuestions = questions.filter((q) => q.difficulty < question.difficulty)
      // then set the index to the id of the first question in that array
      setIndex(easierQuestions[0].id)
    }

    else {
      setIndex(index + 1)
    }
  }

  return (
    <>
      <div className="m-10 mx-auto max-w-5xl space-y-5">
        <div className="relative flex h-[500px] flex-col overflow-hidden rounded-lg bg-gray-100 p-7 pt-20">
          <ProgressBar current={index + 1} max={questions.length} />
          <Question
            // passes quesiton of current index (begins at zero)
            question={question}
            onChange={handleChange}
          />
          <div className="flex-1" />
          <div className="flex items-center space-x-5">
            <Button
              onClick={() => { setIndex(index - 1) }}
              disabled={index < 1}
            >
              &larr; Back
            </Button>
            { questions[index].modals && <Button variant="outline" onClick={() => showModal('description')}>Modal</Button> }

            <span className="flex-1 text-right">{ renderStatus() }</span>
            <Button>Save and Exit</Button>
            <Button
              // onClick={() => { setIndex(index + 1) }}
              onClick={onNextClick}
              disabled={index >= questions.length - 1}
            >
              Next &rarr;
            </Button>
          </div>
        </div>
      </div>

      { modal && question.modals && modal in question.modals && (
        <div className="fixed inset-0 z-10 grid place-content-center">
          <div className="z-20 mx-auto max-w-xl space-y-5 rounded-lg border border-gray-300 bg-white p-6">
            <h1 className="text-xl font-bold text-gray-800">{ toTitleCase(modal) }</h1>
            <p>{ question.modals[modal] }</p>
            <Button onClick={hideModal}>Done</Button>
          </div>
          <div className="absolute inset-0 bg-black opacity-60" onClick={hideModal} role="none" />
        </div>
      ) }

      <div>
        <pre>question = { JSON.stringify(question, null, 2) }</pre>
        <pre>data = { JSON.stringify(data, null, 2) }</pre>
      </div>
    </>
  )
}

export default App
