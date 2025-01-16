import taskReducer, { addTask, deleteTask, setTasks, updateTask } from './taskReducer';
import Task from '../types/task';

describe('taskReducer', () => {
  const initialState = {
    tasks: [],
  };

  it('should handle initial state', () => {
    expect(taskReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle setTasks', () => {
    const tasks: Task[] = [
      { id: '1', title: 'Task 1', description: 'Description 1', dueDate: '2023-01-01', status: 'Pending' },
      { id: '2', title: 'Task 2', description: 'Description 2', dueDate: '2023-01-02', status: 'Completed' },
    ];
    const actual = taskReducer(initialState, setTasks(tasks));
    expect(actual.tasks).toEqual(tasks);
  });

  it('should handle addTask', () => {
    const newTask: Task = { id: '1', title: 'New Task', description: 'New Description', dueDate: '2023-01-01', status: 'Pending' };
    const actual = taskReducer(initialState, addTask(newTask));
    expect(actual.tasks).toEqual([newTask]);
  });

  it('should handle updateTask', () => {
    const initialStateWithTasks = {
      tasks: [
        { id: '1', title: 'Task 1', description: 'Description 1', dueDate: '2023-01-01', status: 'Pending' },
      ],
    };
    const updatedTask: Task = { id: '1', title: 'Updated Task', description: 'Updated Description', dueDate: '2023-01-01', status: 'Completed' };
    const actual = taskReducer(initialStateWithTasks, updateTask(updatedTask));
    expect(actual.tasks[0]).toEqual(updatedTask);
  });

  it('should handle deleteTask', () => {
    const initialStateWithTasks = {
      tasks: [
        { id: '1', title: 'Task 1', description: 'Description 1', dueDate: '2023-01-01', status: 'Pending' },
      ],
    };
    const actual = taskReducer(initialStateWithTasks, deleteTask('1'));
    expect(actual.tasks).toEqual([]);
  });
});
