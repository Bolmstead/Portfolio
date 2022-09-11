import DashboardAddTaskModal from "@components/DashboardAddTaskModal/DashboardAddTaskModal";
import DashboardTasksPanel from "@components/DashboardTasks/DashboardTasksPanel";
import API from "@utils/api";
import { Card, Collapse } from "antd";
import React, { useEffect, useState } from "react";
const { Panel } = Collapse;
import { users, user, invoices } from "../../constants";


import "./DashboardTasks.less";

function DashboardTasks() {
  const storedUser = JSON.parse(localStorage.getItem("directory_users"));
  const user = JSON.parse(localStorage.getItem("user"));
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [tasksComponents, setTasksComponents] = useState(false);
  const [updateTasks, setUpdateTasks] = useState(0);

  async function deleteTask(userId, taskId) {
    let res = await API.deleteTask(userId, taskId);
    setUpdateTasks(updateTasks + 1);
  }

  async function triggerTasksUpdate() {
    setUpdateTasks(updateTasks + 1);
  }

  useEffect(() => {
    async function getTasks() {
      let tasksArray = [];
      let res = await API.getAllEmployeeTasks(user.username);
      if (res.length < 1) {
        tasksArray.push(
          <div className="empty-tasks-container">
            <div className="empty-tasks-title">No tasks created yet!</div>
          </div>
        );
      } else {
        res.map((task) => {
          tasksArray.push(
            <DashboardTasksPanel
              key={task._id}
              task={task}
              deleteTask={deleteTask}
            />
          );
        });
      }
      setTasksComponents(tasksArray);
    }
    getTasks();
  }, [updateTasks]);

  return (
    <Card
      className="tasks-card"
      size="small"
      title="TASKS"
      headStyle={{ backgroundColor: "#18345F", color: "white" }}
      bodyStyle={{ padding: "0px" }}
    >
      <div className="card-content">
        <div className="task-list-container">{tasksComponents} </div>
        <div className="dashboard-add-task-modal-container">
          <DashboardAddTaskModal triggerTasksUpdate={triggerTasksUpdate} />
        </div>
      </div>
    </Card>
  );
}

export default DashboardTasks;
