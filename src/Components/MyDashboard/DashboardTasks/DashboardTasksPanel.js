import React, { useState } from 'react';
import { Tag, Collapse } from 'antd';
const { Panel } = Collapse;

import API from '@utils/api';
import contractIcon from '@assets/images/black_icons/contract.png';
import truckIcon from '@assets/images/black_icons/truck.png';
import womanIcon from '@assets/images/black_icons/woman.png';
import unexpandedArrowIcon from '@assets/images/icons/unexpanded_arrow.png';
import expandedArrowIcon from '@assets/images/icons/expanded_arrow.png';
import { v4 as uuid } from 'uuid';

import './DashboardTasksPanel.less';

function DashboardTasksPanel({ task, deleteTask, key }) {
  const [panelExpanded, setPanelExpanded] = useState(false);
  let completionDateStr, creationDateStr;

  function togglePanelExpand() {
    if (panelExpanded) {
      setPanelExpanded(false);
    } else {
      setPanelExpanded(true);
    }
  }

  function createDateStrings() {
    let completionDateObj = new Date(task.completionDate);
    completionDateStr = completionDateObj.toLocaleDateString('en-US');

    let creationDateObj = new Date(task.createdAt);
    creationDateStr = creationDateObj.toLocaleDateString('en-US');
  }
  createDateStrings();

  function setLeftBorderColor() {
    let completionDate = new Date(task.completionDate);

    let currentDate = new Date();
    let weekBeforeCompletionDate = new Date(task.completionDate);
    weekBeforeCompletionDate.setDate(weekBeforeCompletionDate.getDate() - 7);

    if (completionDate < currentDate) {
      task.panelClassName = 'dashboard-panel-red';
    } else if (weekBeforeCompletionDate < currentDate) {
      task.panelClassName = 'dashboard-panel-orange';
    } else {
      task.panelClassName = 'dashboard-panel-green';
    }
  }
  setLeftBorderColor();

  const userComponents = [];

  task.users.map(user => {
    let taskId = task._id.toString();
    let key = uuid();
    userComponents.push(
      <div className="sub-list-user-text" key={key}>
        <a className="x-delete" onClick={() => deleteTask(user._id, taskId)}>
          X
        </a>
        &nbsp;&nbsp;{user.firstName}&nbsp;{user.lastName}
      </div>
    );
  });

  return (
    <div className={task.panelClassName} key={key}>
      <Collapse
        style={{ backgroundColor: '#ECF0F5', padding: '0px' }}
        bordered={false}
        onChange={togglePanelExpand}
        key={key}
      >
        <Panel
          headStyle={{ backgroundColor: '#18345F', padding: '0px' }}
          bodystyle={{ backgroundColor: '#ECF0F5', padding: '0px' }}
          showArrow={false}
          key={key}
          bordered={false}
          header={
            <div className="tasks-list-item">
              <div className="item-date-and-doc">
                <div className="item-date">{creationDateStr}</div>
                <a>
                  <div className="item-doc">Document.pdf</div>
                </a>
              </div>
              <div className="item-title">
                <div>
                  <strong>{task.title}</strong>
                </div>
                <div>
                  {task.body}. (Completion Date: {completionDateStr})
                </div>
              </div>

              <div className="expand-arrow-container">
                {panelExpanded ? (
                  <img
                    className="unexpanded-arrow-icon"
                    src={expandedArrowIcon}
                  />
                ) : (
                  <img
                    className="unexpanded-arrow-icon"
                    src={unexpandedArrowIcon}
                  />
                )}
              </div>
            </div>
          }
        >
          <div className="sub-list-container">
            <div className="left-sub-list-margin"></div>
            <div className="sub-list-user-text">
              To be completed by:
              {userComponents}
            </div>
          </div>
        </Panel>
      </Collapse>
    </div>
  );
}

export default DashboardTasksPanel;
