import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignOut = ({ setLoggedIn }) => {
  const [confirmSignOut, setConfirmSignOut] = useState(false);
  const [feedback, setFeedback] = useState('');
  const navigate = useNavigate();

  // Handle sign-out confirmation
  const handleSignOutClick = () => {
    setConfirmSignOut(true);
  };

  // Handle feedback change
  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  // Handle the sign-out process
  const handleConfirmSignOut = () => {
    // Remove current user from localStorage
    localStorage.removeItem('currentUser');

    // Save feedback to localStorage or for later use (optional)
    if (feedback) {
      localStorage.setItem('signOutFeedback', feedback);
    }

    // Set logged-in state to false
    setLoggedIn(false);

    // Redirect to the sign-in page
    navigate('/signin');
  };

  // Handle cancellation of the sign-out process
  const handleCancel = () => {
    setConfirmSignOut(false);
    setFeedback(''); // Clear the feedback
  };

  return (
    <div className="signout-container">
      {!confirmSignOut ? (
        <button onClick={handleSignOutClick} className="signout-button">
          Sign Out
        </button>
      ) : (
        <div className="confirm-signout">
          <h3>Are you sure you want to sign out?</h3>
          <textarea
            placeholder="Can you tell us why you're signing out? (optional)"
            value={feedback}
            onChange={handleFeedbackChange}
            rows="4"
            cols="40"
          />
          <div className="signout-actions">
            <button onClick={handleConfirmSignOut} className="confirm-button">
              Confirm Sign Out
            </button>
            <button onClick={handleCancel} className="cancel-button">
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignOut;

