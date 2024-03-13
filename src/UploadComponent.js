import React, { useState } from 'react';

const TaskForm = () => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const taskDto = {
      taskName,
      description,
      dueDate: dueDate || null, // Convert empty string to null for nullable DateTime
      isCompleted,
    };

    try {
      const response = await fetch('http://localhost:5114/api/ImageGallery/createTask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(taskDto),
      });

      if (response.ok) {
        console.log('Task created successfully!');
        // Optionally, you can redirect or perform other actions upon successful creation
      } else {
        console.error('Failed to create task.');
      }
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Task Name:
        <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
      </label>
      <br />
      <label>
        Description:
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <br />
      <label>
        Due Date:
        <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
      </label>
      <br />
      <label>
        Is Completed:
        <input type="checkbox" checked={isCompleted} onChange={(e) => setIsCompleted(e.target.checked)} />
      </label>
      <br />
      <button type="submit">Create Task</button>
    </form>
  );
};

export default TaskForm;
