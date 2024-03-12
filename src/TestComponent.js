import React, { useEffect, useState } from 'react';

const TestComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make a GET request to your API endpoint
        const response = await fetch('http://localhost:5114/api/imagegallery');
        
        // Check if the request was successful (status code 2xx)
        if (response.ok) {
          const result = await response.json();
          setData(result);
        } else {
          // Handle non-successful response
          setError(`Error: ${response.status} - ${response.statusText}`);
        }
      } catch (error) {
        // Handle network or other errors
        setError('Error fetching data');
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that this effect runs once after the component mounts

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Test Component</h1>
      {data && (
        <ul>
          {data.map(item => (
            <>
            <li key={item.imageID}>{item.uploadDate} - {item.title}</li>
            <img src={item.imageURL} ></img>
            </>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TestComponent;
