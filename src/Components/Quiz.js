import "./Quiz.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Question from "./Questions/Question1";
import { useNavigate } from "react-router-dom/dist";
const Quiz = () => {
  const navigate = useNavigate();
  const [queslist, setqueslist] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setscore] = useState(0);
  const [answerArray, setanswerArray] = useState([]);
  const [questionNumber ,setquestionNumber] =useState([])
  const getQuestionList = async () => {
    try {
      const response = await axios.get("http://localhost:8082/v1/ques/all");
      setqueslist(response.data);
      console.log(response.data);
      console.log(queslist);
      console.log("finished");
    } catch (error) {
      console.error("Error fetching question list:", error);
    }
  };

  useEffect(() => {
    getQuestionList();
  }, []);

  const handleNextQuestion = () => {
    if (currentQuestion < queslist.length - 1) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prevQuestion) => prevQuestion - 1);
    }
  };

  const handleResult = () => {
    navigate("/result");
  };
  return (
    <>
      <div className="container">
        <h1 className="h-container">Welcome to Quiz</h1>
        {queslist.length > 0 && currentQuestion < queslist.length ? (
          <Question
            queslist={queslist[currentQuestion]}
            score={score}
            setscore={setscore}
            answerArray={answerArray}
            setanswerArray={setanswerArray}
          />
        ) : (
          <p>No questions available</p>
        )}
        <div className="btns">
          <button
            className="btn-1"
            onClick={handlePrevQuestion}
            disabled={currentQuestion <= 0}
          >
            Prev
          </button>
          <button
            className="btn-2"
            onClick={handleNextQuestion}
            disabled={currentQuestion >= queslist.length - 1}
          >
            Next
          </button>
          {currentQuestion >= queslist.length - 1 && (
            <button className="btn-3" onClick={handleResult}>
              Result
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Quiz;
