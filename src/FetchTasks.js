import React, { useEffect, useState } from 'react';

const FetchTasks = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make a GET request to your API endpoint
        const response = await fetch('http://localhost:5114/api/imagegallery/tasks');
        
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
  
      {data && (
        <ul>
          {data.map(item => (
            <div>
              {item.taskID} {item.taskName}
           </div>
          ))}
        </ul>
      )}
      {!data && <p>No data received</p>}
      {console.log(data)} {/* Add this line for debugging */}
    </div>
  );
  
};

export default FetchTasks;
