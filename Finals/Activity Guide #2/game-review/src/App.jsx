import React, { useState } from 'react';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="app-container">
      {isLoggedIn ? <Reviews /> : <Login onLogin={handleLogin} />}
    </div>
  );
}

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const account = {
    username: "admin",
    password: "admin"
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    if (username === account.username && password === account.password) {
      onLogin();
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <h1>Welcome to Game Reviews!</h1>
      <h4>Login</h4>
      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <button type="button" onClick={handleSubmit}>Login</button>
    </div>
  );
}

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [game, setGame] = useState('');
  const [reviewText, setReviewText] = useState('');

  const handleGameChange = (e) => {
    setGame(e.target.value);
  };

  const handleReviewChange = (e) => {
    setReviewText(e.target.value);
  };

  const handleAddReview = () => {
    const newReview = {
      game,
      reviewText,
      date: new Date().toLocaleDateString(),
    };
    setReviews([...reviews, newReview]);
    setGame('');
    setReviewText('');
  };

  return (
    <div className="reviews-container">
      <h2>Game Reviews</h2>
      <div>
        <label>
          Game:
          <input type="text" value={game} onChange={handleGameChange} />
        </label>
        <br />
        <label>
          Review:
          <textarea value={reviewText} onChange={handleReviewChange} />
        </label>
        <br />
        <button onClick={handleAddReview}>Add Review</button>
      </div>
      <div className="reviews-list">
        <h3>Reviews:</h3>
        {reviews.map((review, index) => (
          <div key={index} className="review-item">
            <h4>{review.game}</h4>
            <p>{review.reviewText}</p>
            <small>{review.date}</small>
          </div>
        ))}
      </div>
    </div>
  );
}