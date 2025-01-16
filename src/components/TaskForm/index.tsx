import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { v4 as uuidv4 } from 'uuid'; // Import UUID
import { AppDispatch, RootState } from '../../redux/store';
import Task from '../../types/task';
import { addTask } from '../../redux/taskReducer';
import './TaskForm.css'; // Import CSS

// Tipagem do Form
interface TaskFormProps {
  // Remover onClose
}

const TaskForm: React.FC<TaskFormProps> = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate(); // Initialize useNavigate
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [status, setStatus] = useState<string>('Pending');
  const [dueDate, setDueDate] = useState<string>(new Date().toISOString());
  const tasks = useSelector((state: RootState) => state.task.tasks);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Criar um novo objeto de tarefa
    const newTask: Task = {
      id: uuidv4(), // Gerar um ID único
      title,
      description,
      dueDate,
      status,
    };
    dispatch(addTask(newTask));

    setTitle('');
    setDescription('');
    setStatus('Pending');
    setDueDate(new Date().toISOString());
    navigate('/dashboard');
  };

  const handleBack = () => {
    navigate('/dashboard'); // Navigate back to the dashboard
  };

  return (
    <div className="task-form">
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="status">Status:</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="dueDate">Due Date:</label>
          <input
            type="date"
            id="dueDate"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
      <button onClick={handleBack} className="back-button">Voltar</button> {/* Add back button */}
    </div>
  );
};

export default TaskForm;
