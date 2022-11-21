import React from "react";
import Card from "./shared/Card";
import { useState, useContext, useEffect } from "react";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "./context/FeedbackContext";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [rating, setRating] = useState("");
  const [btnDisable, setBtnDisable] = useState(true);
  const [message, setMessage] = useState("");
  const { addFeedback, feedbackEdit, updateFeedBack } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisable(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.text);
    }
  }, [feedbackEdit]);

  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisable(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setBtnDisable(true);
      setMessage("text must be at least 10 character");
    } else {
      setMessage(null);
      setBtnDisable(false);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = { text, rating };

      if (feedbackEdit.edit === true) {
        updateFeedBack(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2> how would you rate your sevice with us ?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" isDisable={btnDisable}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
