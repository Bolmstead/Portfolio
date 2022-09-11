import React, { useState } from 'react';
import { Tag, Collapse } from 'antd';
const { Panel } = Collapse;

import API from '@utils/api';
import contractIcon from '@assets/images/black_icons/contract.png';
import truckIcon from '@assets/images/black_icons/truck.png';
import personIcon from '@assets/images/black_icons/woman.png';
import calendarIcon from '@assets/images/black_icons/calendar.png';

import unexpandedArrowIcon from '@assets/images/icons/unexpanded_arrow.png';
import expandedArrowIcon from '@assets/images/icons/expanded_arrow.png';
import { v4 as uuidv4 } from 'uuid';

import './AttentionRequiredPanel.less';

function AttentionRequiredPanel({ props }) {
  let {
    blueTitle,
    blueTitleLink,
    title,
    subtitle,
    body,
    icon,
    priority
  } = props;
  const [panelExpanded, setPanelExpanded] = useState(false);
  const key = uuidv4();
  let tagColor, panelClassName;

  if (icon === 'person') {
    icon = personIcon;
  } else if (icon === 'truck') {
    icon = truckIcon;
  } else if (icon === 'calendar') {
    icon = calendarIcon;
  } else {
    icon = contractIcon;
  }

  function togglePanelExpand() {
    if (panelExpanded) {
      setPanelExpanded(false);
    } else {
      setPanelExpanded(true);
    }
  }

  function getPriorityColor() {
    if (priority == 'Urgent') {
      tagColor = '#DD4B39';
      panelClassName = 'attention-panel-urgent ';
    } else if (priority == 'Medium') {
      tagColor = '#F39C12';
      panelClassName = 'attention-panel-medium';
    } else {
      priority = 'Low';
      tagColor = '#80B34F';
      panelClassName = 'attention-panel-low';
    }
  }
  getPriorityColor();

  return (
    <div className={panelClassName} onClick={togglePanelExpand}>
      <Collapse
        style={{ backgroundColor: '#ECF0F5', padding: '0px' }}
        bordered={false}
        collapsible={body ? true : false}
      >
        <Panel
          headStyle={{ backgroundColor: '#18345F', padding: '0px' }}
          bodystyle={{ backgroundColor: '#ECF0F5', padding: '0px' }}
          showArrow={false}
          key={key}
          bordered={false}
          collapsible={body ? true : false}
          header={
            <div className="attention-list-item">
              <div className="icon-wrapper">
                <img style={{ maxWidth: 35 }} src={icon} />
              </div>
              <div className="item-titles">
                {blueTitleLink ? (
                  <a href={blueTitleLink} className="item-blue-title-link">
                    <div>{blueTitle}</div>
                  </a>
                ) : (
                  <div className="item-blue-title">{blueTitle}</div>
                )}
                <div className="item-title">
                  {title}&nbsp;&nbsp;&nbsp;
                  <div className="item-subtitle">{subtitle}</div>
                </div>

                {body ? (
                  <div>
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
                    )}{' '}
                  </div>
                ) : null}
              </div>
              <div className="tag">
                <Tag
                  color={tagColor}
                  style={{
                    width: '80px',
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  {priority}
                </Tag>
              </div>{' '}
            </div>
          }
        >
          {body ? <div className="sub-list-item-text">{body}</div> : null}
        </Panel>
      </Collapse>
    </div>
  );
}

export default AttentionRequiredPanel;
