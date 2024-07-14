import React, { useState, useEffect } from 'react';
import axios from 'axios';


const StatsComponent = ({ stats }) => {
 

  if (!stats) {
    return <space></space>
  }

  return (
    <div>
      <h1>Annotation Statistics</h1>
      <ul>
        <li>Cat Count: {stats.cat}</li>
        <li>Dog Count: {stats.dog}</li>
        <li>Neither Count: {stats.neither}</li>
      </ul>
    </div>
  );
};

export default StatsComponent;
