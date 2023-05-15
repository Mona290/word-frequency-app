import React, { useState } from 'react';
import { Chart } from 'react-google-charts';
import Papa from 'papaparse';

function App() {
  const [histogramData, setHistogramData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = () => {
    setIsLoading(true);
    fetch('https://www.terriblytinytales.com/test.txt')
      .then((response) => response.text())
      .then((text) => {
        const words = text.toLowerCase().match(/\b\w+\b/g);
        const wordFrequencyMap = new Map();

        if (words) {
          words.forEach((word) => {
            if (wordFrequencyMap.has(word)) {
              wordFrequencyMap.set(word, wordFrequencyMap.get(word) + 1);
            } else {
              wordFrequencyMap.set(word, 1);
            }
          });

          const sortedData = Array.from(wordFrequencyMap.entries()).sort(
            (a, b) => b[1] - a[1]
          );

          const histogramData = [['Word', 'Frequency'], ...sortedData.slice(0, 20)];

          setHistogramData(histogramData);
        }

        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  const exportCSV = () => {
    const csvContent = Papa.unparse(histogramData);
    const csvBlob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const csvURL = URL.createObjectURL(csvBlob);
    const link = document.createElement('a');
    link.href = csvURL;
    link.setAttribute('download', 'histogram.csv');
    link.click();
  };

  return (
    <div>
      <button onClick={fetchData}>Submit</button>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        histogramData.length > 0 && (
          <>
            <Chart
              chartType="BarChart"
              loader={<div>Loading Chart</div>}
              data={histogramData}
              options={{
                chartArea: { width: '70%', height: '80%' },
                hAxis: {
                  title: 'Frequency',
                  logScale: true,
                  format: 'short',
                  minValue: 0,
                },
                vAxis: {
                  title: 'Word',
                },
                legend: { position: 'none' },
              }}
              rootProps={{ 'data-testid': '1' }}
            />
            <button onClick={exportCSV}>Export</button>
          </>
        )
      )}
    </div>
  );
}

export default App;
