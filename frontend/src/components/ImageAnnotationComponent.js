// src/components/ImageAnnotationComponent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StatsComponent from './StatsComponent';
import StatsChartComponent from './StatsChartComponent';
import StatsTableComponent from './StatsTableComponent';


import '../App.css'


const ImageAnnotationComponent = () => {
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState('');
  const [extraText, setExtraText] = useState('');
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetchRandomImage();
    fetchStats();
  }, []);

  const fetchRandomImage = () => {
    axios.get('http://localhost:8000/api/v0/image_annotation/')
      .then(response => {
        setImage(response.data);
      })
      .catch(error => {
        console.error('Error fetching random image:', error);
      });
  };

  const chartStyles = {
    width: '600px',
    height: '400px',
    margin: '0 auto',
    border: '1px solid #ddd',
    borderRadius: '4px',
  };

  const imageStyle = {
    width: '600px',
    height: '400px',
    margin: '0 auto',
    border: '1px solid #ddd',
    borderRadius: '4px',
  };

  

  const fetchStats = () => {
    axios.get('http://localhost:8000/api/v0/stats/')
      .then(response => {
        setStats(response.data);
      })
      .catch(error => {
        console.error('Error fetching statistics:', error);
      });
  };

  const handleAnnotationSubmit = () => {
    axios.post('http://localhost:8000/api/v0/image_annotation/', {
      image: image.id,
      category: category,
      extra_text: extraText
    })
      .then(response => {
        console.log('Annotation saved:', response.data);
        fetchRandomImage();
        fetchStats();
      })
      .catch(error => {
        console.error('Error submitting annotation:', error);
      });
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleExtraTextChange = (event) => {
    setExtraText(event.target.value);
  };

  if (!image || !stats) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <img src={`${image.file}`} alt={`Image ${image.id}`}
        style={{ height: '200px', width: '200px', border: '1px solid #ccc', borderRadius: '4px' }}
      />

      <div>
        <label>Category:</label>
        <select value={category} onChange={handleCategoryChange}>
          <option value="cat">Cat</option>
          <option value="dog">Dog</option>
          <option value="neither">Neither</option>
        </select>
      </div>
      <div>
        <label>Extra Text:</label>
        <textarea value={extraText} onChange={handleExtraTextChange} />
      </div>
      <button onClick={handleAnnotationSubmit}>Submit Annotation</button>

      {/* Display statistics */}
      <StatsComponent stats={stats} />
      <hr/>

      <div className="stats-chart" style={chartStyles}> {/* Apply styles inline */}
            <StatsChartComponent stats={stats} />
      </div>
    </div>
  );
};

export default ImageAnnotationComponent;
