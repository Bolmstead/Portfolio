import React, { useState, useEffect } from 'react';
import { Card, Collapse, Row, Col, Typography } from 'antd';
const { Title, Text } = Typography;
const { Panel } = Collapse;
import API from '@utils/api';

import './DashboardGuide.less';

function DashboardGuide() {
  const user = JSON.parse(localStorage.getItem('user'));
  const [unitNumber, setUnitNumber] = useState(null);

  useEffect(() => {
    async function grabLatestUnitNumber() {
      let latestUnitResult = await API.getLatestUnit(user.username);

      if (latestUnitResult.status === 'success' && latestUnitResult.unit) {
        setUnitNumber(latestUnitResult.unit.unitNumber);
      }
    }
    grabLatestUnitNumber();
  }, []);

  return (
    <div className="guide-panel">
      <Collapse className="guide-panel" defaultActiveKey={'open'}>
        <Panel
          className="guide-card"
          header="DASHBOARD GUIDE"
          style={{ backgroundColor: '#ecf0f5', width: '100%' }}
          headStyle={{ backgroundColor: '#18345F', color: 'white' }}
          key="open"
        >
          <Row gutter={16}>
            <Col
              xs={24}
              md={12}
              lg={12}
              xl={6}
              style={{
                marginBottom: '10px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <>
                <Text style={{ color: '#818181', fontSize: 17 }}>
                  DRIVERS | USERS
                </Text>

                <div className="guide-section">
                  <a href={'/directory'} className="guide-link">
                    <div className="guide-category">
                      View/Search User Database
                    </div>
                  </a>

                  <a href={'/add_user'} className="guide-link">
                    <div className="guide-category">Add Driver/User</div>{' '}
                  </a>

                  <a
                    href={
                      '/documents?openDialog=true&newDocumentTab=qualification-documents'
                    }
                    className="guide-link"
                  >
                    <div className="guide-category">
                      Send Driver Qualification Files
                    </div>{' '}
                  </a>

                  <a
                    href={
                      '/documents?openDialog=true&newDocumentTab=mvr-psp-reports'
                    }
                    className="guide-link"
                  >
                    <div className="guide-category">Order MVR/PSP</div>{' '}
                  </a>
                  <a
                    href={
                      '/consortium?defaultTab=employees&openEnrollModal=true'
                    }
                    className="guide-link"
                  >
                    <div className="guide-category">
                      Enroll User into D&A Consortium
                    </div>
                  </a>
                  <a className="guide-link" href={`/reports/user`}>
                    <div className="guide-category">Generate User Report</div>
                  </a>
                </div>
              </>
            </Col>
            <Col
              xs={24}
              md={12}
              lg={12}
              xl={6}
              style={{
                marginBottom: '10px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <>
                {' '}
                <Text style={{ color: '#818181', fontSize: 17 }}>
                  TRUCKS | TRAILERS
                </Text>
                <div className="guide-section">
                  <a href={'/inventory/add'} className="guide-link">
                    <div className="guide-category">Add Trucks/Trailers</div>
                  </a>
                  <a
                    href={
                      unitNumber
                        ? `/inventory-profile/${unitNumber}/assignment`
                        : `/inventory`
                    }
                    className="guide-link"
                  >
                    <div className="guide-category">Assign Trucks/Trailers</div>{' '}
                  </a>
                  <a
                    href={
                      unitNumber
                        ? `/inventory-profile/${unitNumber}/photos`
                        : `/inventory`
                    }
                    className="guide-link"
                  >
                    <div className="guide-category">Upload Unit Documents</div>{' '}
                  </a>
                  <a
                    href={
                      unitNumber
                        ? `/inventory-profile/${unitNumber}/photos`
                        : `/inventory`
                    }
                    className="guide-link"
                  >
                    <div className="guide-category">Upload Unit Photos</div>{' '}
                  </a>
                  <a
                    href={
                      unitNumber
                        ? `/inventory-profile/${unitNumber}/inspections`
                        : `/inventory`
                    }
                    className="guide-link"
                  >
                    <div className="guide-category">
                      View/Complete Unit Inspections
                    </div>
                  </a>
                  <a className="guide-link" href={`/reports/unit`}>
                    <div className="guide-category">Generate Unit Report</div>
                  </a>
                </div>
              </>
            </Col>
            <Col
              xs={24}
              md={12}
              lg={12}
              xl={6}
              style={{
                marginBottom: '10px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <>
                {' '}
                <Text style={{ color: '#818181', fontSize: 17 }}>
                  CONSORTIUM
                </Text>
                <div className="guide-section">
                  <a href={'/consortium'} className="guide-link">
                    <div className="guide-category">
                      Assign Company DER/DOT Supervisor
                    </div>
                  </a>
                  <a
                    href={'/consortium?defaultTabInitial=employees'}
                    className="guide-link"
                  >
                    <div className="guide-category">
                      Send D&A Policy to Driver
                    </div>{' '}
                  </a>
                  <a
                    href={'/consortium?defaultTabInitial=policies'}
                    className="guide-link"
                  >
                    <div className="guide-category">
                      View Complete Policy Documents
                    </div>{' '}
                  </a>
                  <a
                    href={
                      '/consortium?defaultTabInitial=testing&openLocationTab=yes'
                    }
                    className="guide-link"
                  >
                    <div className="guide-category">
                      Find/Save Testing Locations
                    </div>{' '}
                  </a>
                  <a
                    href={'/consortium?defaultTabInitial=testing'}
                    className="guide-link"
                  >
                    <div className="guide-category">Schedule D&A Tests</div>
                  </a>
                  <a
                    href={'/consortium?defaultTabInitial=testing'}
                    className="guide-link"
                  >
                    <div className="guide-category">
                      Order Physical (COC) Forms
                    </div>
                  </a>
                </div>
              </>
            </Col>
            <Col
              xs={24}
              md={12}
              lg={12}
              xl={6}
              style={{
                marginBottom: '10px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <>
                {' '}
                <Text style={{ color: '#818181', fontSize: 17 }}>LEGAL</Text>
                <div className="guide-section">
                  <a href={'/reg_manage?defaultKey=4'} className="guide-link">
                    <div className="guide-category">
                      View/File MCS-150 Biennial Update
                    </div>
                  </a>
                  <a href={'/reg_manage?defaultKey=5'} className="guide-link">
                    <div className="guide-category">
                      Upload Operating Authority
                    </div>{' '}
                  </a>
                  <a href={'/reg_manage?defaultKey=11'} className="guide-link">
                    <div className="guide-category">
                      Upload Insurance Policy
                    </div>{' '}
                  </a>
                  <a href={'/reg_manage?defaultKey=9'} className="guide-link">
                    <div className="guide-category">File/Upload UCR</div>{' '}
                  </a>

                  <a href={'/reg_manage?defaultKey=7'} className="guide-link">
                    <div className="guide-category">Order BOC-3 Document</div>
                  </a>
                  <a href={'/reg_manage?defaultKey=12'} className="guide-link">
                    <div className="guide-category">Add Permits</div>
                  </a>
                </div>
              </>
            </Col>
          </Row>
        </Panel>
      </Collapse>
    </div>
  );
}

export default DashboardGuide;
