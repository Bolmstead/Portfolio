import React, { useState, useEffect } from 'react';
import { Card, Typography, Row, Col } from 'antd';
const { Text } = Typography;
import { v4 as uuidv4 } from 'uuid';
import AttentionRequiredPanel from '@components/AttentionRequiredPanel/AttentionRequiredPanel';
import AttnReqdPanelMissingDocs from '@components/AttentionRequiredPanel/AttnReqdPanelMissingDocs';
import { findDaysTilDueDate } from '../../utils/findDaysTilDueDate';

import './AttentionRequired.less';

function AttentionRequired({ users, invoices }) {
  const [allPanels, setAllPanels] = useState([]);
  const [filteredPanels, setFilteredPanels] = useState([]);
  const [numOfUrgentPriority, setNumOfUrgentPriority] = useState(0);
  const [numOfMediumPriority, setNumOfMediumPriority] = useState(0);
  const [numOfLowPriority, setNumOfLowPriority] = useState(0);

  const user = JSON.parse(localStorage.getItem('user'));

  // Changes filteredPanels state to only the panels with
  // the selected priority
  function changePriorityCategory(category) {
    let tempFilteredPanels = [];
    if (category === 'All') {
      setFilteredPanels(allPanels);
    } else {
      for (let panel of allPanels) {
        if (panel.props.priority === category) {
          tempFilteredPanels.push(panel);
        }
      }
      setFilteredPanels(tempFilteredPanels);
    }
  }

  useEffect(() => {
    function buildPanels() {
      let panels = [];
      let urgentCounter = 0;
      let mediumCounter = 0;
      let lowCounter = 0;

      if (users) {
        console.log('users!!!', users);
        users.map(employee => {
          // add panel if employees are not enrolled, but are active
          if (
            employee.isActive &&
            !employee.isEnrolled &&
            !employee.isDeleted
          ) {
            let panelObject = {
              blueTitle: `${employee.firstName} ${employee.lastName} `,
              blueTitleLink: '/consortium',
              title: 'is not enrolled',
              subTitle: null,
              body: null,
              icon: 'person',
              priority: 'Urgent'
            };
            let key = uuidv4();
            panels.push(
              <AttentionRequiredPanel
                props={panelObject}
                priority="Urgent"
                priorityRank={1}
                key={key}
              />
            );
            urgentCounter++;

            // add panel for documents that an employee needs to complete
            // allDocs variable is all missing docs. If doc is found in employee
            // object, it is removed from the alldocs variable to show the missing docs
            let allDocs = {
              'Request for Check of Driving Record':
                'Request for Check of Driving Record',
              'Notification of Drivers Rights':
                'Notification of Drivers Rights',
              'Consent For Queries of the FMCSA Drug and Alcohol Clearinghouse':
                'Consent For Queries of the FMCSA Drug and Alcohol Clearinghouse',
              'Request for Copy of Drivers CDL or Drivers License':
                'Request for Copy of Drivers CDL or Drivers License',
              'Request for Copy of Drivers Social Security Card':
                'Request for Copy of Drivers Social Security Card',
              'Request for Copy of Drivers Alien Card or Perminent Resident Card':
                'Request for Copy of Drivers Alien Card or Perminent Resident Card',
              'Driver Road Test': 'Driver Road Test',
              'Certification of Road Test': 'Certification of Road Test',
              'Safety History Record Request for Previous Employer':
                'Safety History Record Request for Previous Employer',
              'Request for Copy of Drivers Current Medical Examiners Certificate':
                'Request for Copy of Drivers Current Medical Examiners Certificate',
              'Fair Credit Reporting Act Disclosure':
                'Fair Credit Reporting Act Disclosure',
              'Annual List of Violations': 'Annual List of Violations',
              'Commercial Driver Application': 'Commercial Driver Application'
            };
            for (let doc of employee.documents) {
              if (allDocs[doc.fileName]) {
                delete allDocs[doc.fileName];
              }
            }
            employee.missingDocs = Object.values(allDocs);
            if (employee.missingDocs.length >= 1) {
              urgentCounter++;
            }
            let key3 = uuidv4();
            panels.push(
              <AttnReqdPanelMissingDocs
                employee={employee}
                priority="Urgent"
                priorityRank={1}
                key={key3}
              />
            );
          }
        });
      } else {
      }

      // Create panels for upcoming events in user object
      if (user.calendarEvents) {
        for (let event of user.calendarEvents) {
          let eventDateObj = new Date(event.start);
          let daysUntilDue = findDaysTilDueDate(eventDateObj);
          let eventDateString = eventDateObj.toLocaleDateString();
          let numOfDaysLeftString, priority, priorityRank;
          if (daysUntilDue <= 0 && daysUntilDue > -30) {
            priority = 'Urgent';
            priorityRank = 1;
            urgentCounter++;
            numOfDaysLeftString = '(Overdue!)';
          } else if (daysUntilDue < 2) {
            priority = 'Urgent';
            priorityRank = 1;

            mediumCounter++;
            numOfDaysLeftString = '(1 Day)';
          } else if (daysUntilDue < 7) {
            priority = 'Medium';
            priorityRank = 2;

            mediumCounter++;
            numOfDaysLeftString = `(${daysUntilDue} Days)`;
          } else if (daysUntilDue < 14) {
            priority = 'Low';
            priorityRank = 3;
            lowCounter++;
            numOfDaysLeftString = `(${daysUntilDue} Days)`;
          }

          // if any of the if statements above have been satisfied
          if (priority) {
            let panelObject = {
              blueTitle: null,
              blueTitleLink: '/settings',
              title: `The ${event.title} event is on ${eventDateString}`,
              subtitle: numOfDaysLeftString,
              body: null,
              icon: 'calendar',
              priority: priority
            };
            let key2 = uuidv4();
            panels.push(
              <AttentionRequiredPanel
                props={panelObject}
                priority={priority}
                priorityRank={priorityRank}
                key={key2}
              />
            );
          }
        }
      }

      // add panels for overdue invoices in order of priority
      if (invoices) {
        console.log('invoices!!!', invoices);

        for (let invoice of invoices) {
          if (invoice.status !== 'paid') {
            let key4 = uuidv4();
            let daysUntilDueDate = findDaysTilDueDate(invoice.dueDate);
            let dueDate = new Date(invoice.dueDate).toLocaleDateString();
            let dueDateString, priority, priorityRank;
            if (daysUntilDueDate < 1) {
              priority = 'Urgent';
              priorityRank = 1;
              urgentCounter++;
              dueDateString = '(Overdue!)';
            } else if (daysUntilDueDate < 2) {
              priority = 'Urgent';
              priorityRank = 1;
              mediumCounter++;
              dueDateString = '(1 Day)';
            } else if (daysUntilDueDate < 7) {
              priority = 'Medium';
              priorityRank = 2;
              mediumCounter++;
              dueDateString = `(${daysUntilDueDate} Days)`;
            } else if (daysUntilDueDate < 14) {
              priority = 'Low';
              priorityRank = 3;
              lowCounter++;
              dueDateString = `(${daysUntilDueDate} Days)`;
            }

            let panelObject = {
              blueTitle: `Invoice #${invoice._id}`,
              blueTitleLink: '/settings',
              title: `is due on ${dueDate}`,
              subtitle: dueDateString,
              body: null,
              icon: 'person',
              priority: priority
            };

            panels.push(
              <AttentionRequiredPanel
                props={panelObject}
                priority={priority}
                priorityRank={priorityRank}
                key={key4}
              />
            );
          }
        }
        panels.sort(function(a, b) {
          return a.props.priorityRank - b.props.priorityRank;
        });
        setAllPanels(panels);
        setFilteredPanels(panels);
        setNumOfUrgentPriority(urgentCounter);
        setNumOfMediumPriority(mediumCounter);
        setNumOfLowPriority(lowCounter);
      }
    }
    buildPanels();
  }, [users, invoices]);

  return (
    <Card
      style={{ height: '100%' }}
      className="attention-required-card"
      size="small"
      title="ATTENTION REQUIRED 03"
      headStyle={{ backgroundColor: '#18345F' }}
      bodyStyle={{ padding: '0px' }}
      // style={{ height: '90%', backgroundColor: '#ECF0F4' }}
    >
      <div style={{ width: '100%', padding: '15px' }}>
        <button
          className="priority"
          onClick={() => changePriorityCategory('All')}
        >
          ALL
        </button>
        <Text
          style={{ paddingLeft: '10px', color: 'gray', paddingRight: '40px' }}
        >
          {allPanels.length}
        </Text>

        <button
          className="priority"
          onClick={() => changePriorityCategory('Urgent')}
        >
          URGENT
        </button>
        <Text
          style={{ paddingLeft: '10px', color: 'gray', paddingRight: '40px' }}
        >
          {numOfUrgentPriority}
        </Text>

        <button
          className="priority"
          onClick={() => changePriorityCategory('Medium')}
        >
          MEDIUM
        </button>
        <Text
          style={{ paddingLeft: '10px', color: 'gray', paddingRight: '40px' }}
        >
          {numOfMediumPriority}
        </Text>

        <button
          className="priority"
          onClick={() => changePriorityCategory('Low')}
        >
          LOW
        </button>
        <Text
          style={{ paddingLeft: '10px', color: 'gray', paddingRight: '40px' }}
        >
          {numOfLowPriority}
        </Text>
      </div>
      {/* <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Reports..."
          optionFilterProp="children"
        >
          <Option value="1">Report 1</Option>
          <Option value="2">Report 2</Option>
          <Option value="3">Report 3</Option>
        </Select> */}

      <hr className="header-divider" />
      <div className="attention-list-container">{filteredPanels}</div>
    </Card>
  );
}

export default AttentionRequired;
