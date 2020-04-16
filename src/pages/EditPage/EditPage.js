import React from 'react';
import { useParams, useHistory, useLocation } from 'react-router-dom';

import './styles.css';

const EditPage = () => {
  const params = useParams();
  const history = useHistory();
  const location = useLocation();
  console.log(location.state);
  console.log(history);

  //read data from history
  const { id } = params;

  const handleBack = () => {
    history.goBack();
  };

  return (
    <div>
      <h1>Edit Page</h1>
      <form>
        <label for="inputBox">User Id:</label>
        <input id="inputBox" type="text" value={id} />
      </form>
      <button onClick={handleBack}>Back</button>
    </div>
  );
};

export default EditPage;
