import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Counter = lazy(() => import('./components/Counter'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const TaskForm = lazy(() => import('./components/TaskForm'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-task" element={<TaskForm />} />
          <Route path="/" element={<Counter />} />
        </Routes>
      </Suspense>
      <ToastContainer />
    </Router>
  );
}

export default App;
