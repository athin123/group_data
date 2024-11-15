import React, { useState } from 'react';
import './Buttons.css';
import { Link } from 'react-router-dom';

export default function Buttons() {

  const handleDeleteClick = () => {

    alert("Order Deleted Successfully");
  };

  return (
    <div>
      <Link to={'/addstocks'}>
        <button2 id='b1'>ADD STOCK</button2>
      </Link>
    </div>
  );
}
