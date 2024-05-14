import {useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'react-bootstrap';
import Sidebar from './Components/Sidebar/sidebar';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import DashBoard from './Components/Pages/DashBoard';
import Assessment from './Components/Pages/Assessment';
import OralAssessment from './Components/Pages/OralAssessment';
import Lessons from './Components/Pages/Lessons';
import Lesson1 from './Components/Lessons/Lesson1';
import Short_a from './Components/Lessons/Chapters/Short_A/Short_a';
import Short_a_SIOS from './Components/Lessons/Chapters/Short_A/Short_a_SIOS';
import Short_a_SIOQ from './Components/Lessons/Chapters/Short_A/Short_a_SIOQ';
import Short_a_LMSIO from './Components/Lessons/Chapters/Short_A/Short_a_LMSIO';
import Short_a_AF from './Components/Lessons/Chapters/Short_A/Short_a_AF';
import Short_a_SF from './Components/Lessons/Chapters/Short_A/Short_a_SF';
import Short_e from './Components/Lessons/Chapters/Short_E/Short_e';
import Short_e_SIOS from './Components/Lessons/Chapters/Short_E/Short_e_SIOS';
import Short_e_LMSIO from './Components/Lessons/Chapters/Short_E/Short_e_LMSIO';
import Short_i from './Components/Lessons/Chapters/Short_I/Short_i';
import Short_i_LMSIO from './Components/Lessons/Chapters/Short_I/Short_i_LMSIO';
import Short_o_LMSIO from './Components/Lessons/Chapters/Short_O/Short_o_LMSIO';
import Short_u_LMSIO from './Components/Lessons/Chapters/Short_U/Short_u_LMSIO';
import Short_i_SIOS from './Components/Lessons/Chapters/Short_I/Short_i_SIOS';
import Short_o_SIOS from './Components/Lessons/Chapters/Short_I/Short_i_SIOS';
import Short_u_SIOS from './Components/Lessons/Chapters/Short_U/Short_u_SIOS';
import Short_o from './Components/Lessons/Chapters/Short_O/Short_o';
import Short_u from './Components/Lessons/Chapters/Short_U/Short_u';
import Long_a from './Components/Lessons/Chapters/Long_A/Long_a';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('DashBoard');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']} minBreakpoint="xxs">
      <Navbar  fixed="top" expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Sidebar setCurrentPage={setCurrentPage} sendToggle={toggleSidebar}/>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex" style={{position: 'absolute', right: '62px'}}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        <body style={{overflow: 'auto', boxSizing: 'border-box', display: '-ms-flexbox', position: 'relative', padding: '0', margin: '0', width: '100vw', bottom: '0px'}}>
        <Container style={isSidebarOpen ?  ({ padding: '50px', position: 'relative', left: '150px'}) : ({padding: '50px'})}>
            <Row>
                <Col>
                  {currentPage === 'DashBoard' && <DashBoard setCurrentPage={setCurrentPage}/>}
                  {currentPage === 'Assessment' && <Assessment setCurrentPage={setCurrentPage}/>}
                  {currentPage === 'Lessons' && <Lessons setCurrentPage={setCurrentPage}/>}
                  {currentPage === 'Lesson1' && <Lesson1 setCurrentPage={setCurrentPage}/>}
                  {currentPage === 'Short_a' && <Short_a setCurrentPage={setCurrentPage}/>}
                  {currentPage === 'Short_e' && <Short_e setCurrentPage={setCurrentPage}/>}
                  {currentPage === 'Short_i' && <Short_i setCurrentPage={setCurrentPage}/>}
                  {currentPage === 'Short_o' && <Short_o setCurrentPage={setCurrentPage}/>}
                  {currentPage === 'Short_u' && <Short_u setCurrentPage={setCurrentPage}/>}
                  {currentPage === 'Long_a' && <Long_a setCurrentPage={setCurrentPage}/>}
                  {currentPage === 'Short_a_SIOS' && <Short_a_SIOS setCurrentPage={setCurrentPage}/>}
                  {currentPage === 'Short_e_SIOS' && <Short_e_SIOS setCurrentPage={setCurrentPage}/>}
                  {currentPage === 'Short_i_SIOS' && <Short_i_SIOS setCurrentPage={setCurrentPage}/>}
                  {currentPage === 'Short_o_SIOS' && <Short_o_SIOS setCurrentPage={setCurrentPage}/>}
                  {currentPage === 'Short_u_SIOS' && <Short_u_SIOS setCurrentPage={setCurrentPage}/>}
                  {currentPage === 'Short_a_SIOQ' && <Short_a_SIOQ setCurrentPage={setCurrentPage}/>}
                  {currentPage === 'Short_a_LMSIO' && <Short_a_LMSIO setCurrentPage={setCurrentPage}/>}
                  {currentPage === 'Short_e_LMSIO' && <Short_e_LMSIO setCurrentPage={setCurrentPage}/>}
                  {currentPage === 'Short_i_LMSIO' && <Short_i_LMSIO setCurrentPage={setCurrentPage}/>}
                  {currentPage === 'Short_o_LMSIO' && <Short_o_LMSIO setCurrentPage={setCurrentPage}/>}
                  {currentPage === 'Short_u_LMSIO' && <Short_u_LMSIO setCurrentPage={setCurrentPage}/>}
                  {currentPage === 'Short_a_AF' && <Short_a_AF setCurrentPage={setCurrentPage}/>}
                  {currentPage === 'Short_a_SF' && <Short_a_SF setCurrentPage={setCurrentPage}/>}
                  {currentPage === 'OralAssessment' && <OralAssessment setCurrentPage={setCurrentPage}/>}
              </Col>
            </Row>
          </Container>
        </body>
    </ThemeProvider>
  );
};

export default App;