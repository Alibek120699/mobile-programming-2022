import { useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import About from "./components/About";
import { useTaskDetail, useTaskList } from "./store/hooks/tasks";
import { useQueryClient } from "react-query";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [taskId, setTaskId] = useState(0);
  const queryClient = useQueryClient();
  const { tasks } = useTaskList();
  const { task } = useTaskDetail(taskId);

  // Add Task
  const addTask = (task) => {
    fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    }).then(() => {
      queryClient.invalidateQueries("task-list");
    });
  };

  // Delete Task
  const deleteTask = async (id) => {
    fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    }).then(() => {
      queryClient.invalidateQueries();
    });
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTaskId(id);
    const updTask = { ...task, reminder: !task.reminder };

    fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updTask),
    }).then(() => {
      queryClient.invalidateQueries(["task-detail", id]);
    });
  };

  return (
    <Router>
      <div className="container">
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {showAddTask && <AddTask onAdd={addTask} />}
                {tasks.length > 0 ? (
                  <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                  />
                ) : (
                  "No Tasks To Show"
                )}
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
