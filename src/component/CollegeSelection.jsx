import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import styles from './CollegeSelection.module.css'; // Import your custom styles as CSS module

const CollegeSection = () => {
  const featuredColleges = [
    'Parul University',
    'Chandigarh University',
    'GLA University',
    'Lovely Professional University',
    'Sanskriti University',
  ];

  const importantExams = ['JEE Main', 'JEE Advanced', 'TS EAMCET', 'WBJEE', 'VITEEE'];
  const topStates = ['Maharashtra', 'Uttar Pradesh', 'Karnataka', 'Rajasthan', 'Punjab'];
  const relatedCourses = [
    'B Tech',
    'Bachelor of Engineering',
    'Civil Engineering',
    'Mechanical Engineering',
    'Aerospace Engineering',
  ];

  return (
    <Container fluid className={`py-5 ${styles.container}`}>
      {/* Heading */}
      <Row className={`text-center mb-4 ${styles.heading}`}>
        <Col>
          <h2 className={styles.title}>Perfect College For You</h2>
          <p>Discover top colleges, exams, and opportunities in your preferred field.</p>
        </Col>
      </Row>

      {/* Featured Colleges, Important Exams, Top States, Related Courses */}
      <Row>
        {/* Featured Colleges */}
        <Col lg={3} md={6} sm={12} className="mb-4">
          <Card className={`p-3 ${styles.card}`}>
            <h5>Featured Colleges</h5>
            {featuredColleges.map((college, idx) => (
              <Button key={idx} className={`mb-2 ${styles.button}`}>
                {college}
              </Button>
            ))}
          </Card>
        </Col>

        {/* Important Exams */}
        <Col lg={3} md={6} sm={12} className="mb-4">
          <Card className={`p-3 ${styles.card}`}>
            <h5>Important Exams</h5>
            {importantExams.map((exam, idx) => (
              <Button key={idx} className={`mb-2 ${styles.button}`}>
                {exam}
              </Button>
            ))}
          </Card>
        </Col>

        {/* Top States */}
        <Col lg={3} md={6} sm={12} className="mb-4">
          <Card className={`p-3 ${styles.card}`}>
            <h5>Top States</h5>
            {topStates.map((state, idx) => (
              <Button key={idx} className={`mb-2 ${styles.button}`}>
                {state}
              </Button>
            ))}
          </Card>
        </Col>

        {/* Related Courses */}
        <Col lg={3} md={6} sm={12} className="mb-4">
          <Card className={`p-3 ${styles.card}`}>
            <h5>Related Courses</h5>
            {relatedCourses.map((course, idx) => (
              <Button key={idx} className={`mb-2 ${styles.button}`}>
                {course}
              </Button>
            ))}
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CollegeSection;
