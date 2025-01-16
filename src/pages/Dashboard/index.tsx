import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Task from '../../types/task';
import { RootState } from '../../redux/store';
import { deleteTask, updateTask } from '../../redux/taskReducer';
import './Dashboard.css'; 

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.task.tasks);
  const navigate = useNavigate();

  const handleDelete = (id: string) => {
    dispatch(deleteTask(id));
  };

  const handleAddTask = () => {
    navigate('/add-task');
  };

  const handleStatusChange = (id: string, status: string) => {
    const task = tasks.find((task) => task.id === id);
    if (task) {
      dispatch(updateTask({ ...task, status }));
    }
  };

  return (
    <div className="dashboard">
      <h1>Gerenciador de Tarefas</h1>
      <button className="add-task-button" onClick={handleAddTask}>Adicionar Tarefa</button>
      <div className="task-list">
        {tasks.map((task: Task) => (
          <div className="task-card" key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>{task.dueDate}</p>
            <select
              value={task.status}
              onChange={(e) => handleStatusChange(task.id, e.target.value)}
            >
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
            <button className="delete-task-button" onClick={() => handleDelete(task.id)}>Excluir</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
