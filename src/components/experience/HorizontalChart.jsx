import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LinearScale, BarElement, CategoryScale } from 'chart.js';
import '../experience/Chart.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 0,
      borderRadius: 5,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
      labels: {
        font: {
          weight: 'bold',
        },
      },
    },
    title: {
      display: true,
      text: 'Skills',
      color: 'white',
      font: {
        weight: 'bold',
        size: 18,
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: 'white',
        font: {
          weight: 'bold',
        },
      },
    },
    y: {
      grid: {
        display: false,
      },
      ticks: {
        color: 'white',
        font: {
          weight: 'bold',
        },
      },
    },
  },
};

const labels = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'SQL'];

const initialData = {
  labels,
  datasets: [
    {
      label: 'Skill Level',
      data: [90, 85, 40, 85, 75, 70],
      backgroundColor: ['#1f1f38', '#4db5ff', 'white'],
      hoverBackgroundColor: ['#0c0c1e', '#2f8fe7', 'lightgray'],
    },
  ],
};

export function HorizontalChart() {
  const [data, setData] = useState(initialData);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  const handleItemClick = (index) => {
    if (selectedItemIndex === null) {
      setSelectedItemIndex(index);
    } else {
      const sourceLabel = labels[selectedItemIndex];
      const destinationLabel = labels[index];
      swapData(selectedItemIndex, index, sourceLabel, destinationLabel);
      setSelectedItemIndex(null);
    }
  };
  

  const swapData = (sourceIndex, destinationIndex) => {
    const newData = [...data.datasets[0].data];
    const temp = newData[sourceIndex];
    newData[sourceIndex] = newData[destinationIndex];
    newData[destinationIndex] = temp;
  
    const newLabels = [...data.labels];
    const sourceLabel = newLabels[sourceIndex];
    newLabels[sourceIndex] = newLabels[destinationIndex];
    newLabels[destinationIndex] = sourceLabel;
  
    const updatedData = {
      ...data,
      labels: newLabels,
      datasets: [
        {
          ...data.datasets[0],
          data: newData,
        },
      ],
    };
  
    setData(updatedData);
  };
  
  

  const ChartItem = ({ value, index }) => {
    const [label, setLabel] = useState(labels[index]);
    const isActive = selectedItemIndex === index;
  
    let backgroundColor = 'transparent';
    if (isActive) {
      backgroundColor = 'lightgray';
    }
  
    useEffect(() => {
      setLabel(labels[index]);
    }, [index]);
    
  
    return (
      <div
        className='card-drop-drag'
        style={{ backgroundColor }}
        onClick={() => handleItemClick(index)}
      >
        {label}: {value}
      </div>
    );
  };
  

  return (
    <div className='container-all'>
      <Bar options={options} data={data} style={{ margin: '40px' }} />
      <div className='container-card-chart'>
        {data.datasets[0].data.map((value, index) => (
          <ChartItem key={labels[index]} label={labels[index]} value={value} index={index} />
        ))}
      </div>
    </div>
  );
}
