import React, { useState, useEffect } from 'react';
import { Tag, Collapse } from 'antd';
const { Panel } = Collapse;
import personIcon from '@assets/images/black_icons/woman.png';
import unexpandedArrowIcon from '@assets/images/icons/unexpanded_arrow.png';
import expandedArrowIcon from '@assets/images/icons/expanded_arrow.png';
import { v4 as uuidv4 } from 'uuid';

import './AttentionRequiredPanel.less';

function AttnReqdPanelMissingDocs({ employee }) {
  const [panelExpanded, setPanelExpanded] = useState(false);
  const [missingDocs, setMissingDocs] = useState(null);

  function togglePanelExpand() {
    if (panelExpanded) {
      setPanelExpanded(false);
    } else {
      setPanelExpanded(true);
    }
  }

  useEffect(() => {
    // Build the bullet points of missing documents
    function buildMissingDocsList() {
      let tempMissingDocs = [];
      employee.missingDocs.map(title => {
        let key = uuidv4()
        tempMissingDocs.push(<li key={key}>{title}</li>);
      });
      setMissingDocs(tempMissingDocs);
    }

    buildMissingDocsList();
  }, []);

  return (
    <div
      className="attention-panel-urgent"
      onClick={togglePanelExpand}
    >
      <Collapse
        style={{ backgroundColor: '#ECF0F5', padding: '0px' }}
        bordered={false}
      >
        <Panel
          headStyle={{ backgroundColor: '#18345F', padding: '0px' }}
          bodystyle={{ backgroundColor: '#ECF0F5', padding: '0px' }}
          showArrow={false}
          key={`missingdocs${employee.username}`}
          bordered={false}
          header={
            <div className="attention-list-item">
              <div className="icon-wrapper">
                <img style={{maxWidth: 35}} src={personIcon} />
              </div>
              <div className="item-titles">
                <a
                  href={`/account/${employee.username}`}
                  className="item-blue-title-link"
                >
                  <div>
                    {employee.firstName} {employee.lastName}
                  </div>
                </a>
                <div className="item-title">has missing files</div>

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
              <div className="tag">
                <Tag
                  color="#DD4B39"
                  style={{
                    width: '80px',
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  Urgent
                </Tag>
              </div>{' '}
            </div>
          }
        >
          <div className="sub-list-item-text">
            These required files are missing
          </div>
          <div className="sub-list-item-text">
            <ul>{missingDocs}</ul>{' '}
          </div>
        </Panel>
      </Collapse>
    </div>
  );
}

export default AttnReqdPanelMissingDocs;
