import React from 'react';
import { useDispatch } from 'react-redux';
import { clearAllData } from '../../redux/actions/actionTypes';
import "./ClearButton.scss"

const ClearButton = () => {
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearAllData());
  };

  return (
    <button className="btn-clear" onClick={handleClear}>
      Clear
    </button>
  );
};

export default ClearButton;
