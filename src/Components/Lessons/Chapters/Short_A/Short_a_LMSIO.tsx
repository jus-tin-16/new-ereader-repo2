import { Container } from 'react-bootstrap';
import {ThemeProvider} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const Short_a = ({setCurrentPage}) => {
    const test = ['1', '2'];
    return (
        <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']} minBreakpoint="xxs">
            <Container fluid="sm" style={{padding: '20px'}}>
                <Row style={{paddingTop: '55px', paddingBottom: '20px'}}>
                    <Col>
                        Short 'a'/Let Me Sound it Out
                        <h1>Short 'a'</h1>
                        Word Awareness, Syllable Blending, Syllable Counting, Rhyme.
                    </Col>
                </Row>
                <Row>
                    <Container style={{width: '1670px',height: '705px', border: '1px solid black'}}> 
                        <Row>
                            <Col class="col-md-10"> 
                            <h2>Direction: Read it loud and record your voice using the 
                            flashcards that shows on your screen.</h2> 
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Container style={{width: '934px', height: '536px', border: '1px solid black'}}></Container>
                            </Col>
                            <Col>
                                <Button variant="primary" style={{}} size="lg"> RECORD </Button>
                                <Button variant="secondary" style={{}} size="lg"> RETAKE </Button>
                            </Col>
                        </Row>
                    </Container>
                </Row>
                <Row style={{paddingTop: '20px', paddingBottom: '20px'}}>
                    <Col>
                    <Button variant="secondary" style={{}} onClick={() => setCurrentPage("Short_a")} size="lg"> Go Back </Button>
                    </Col>
                </Row>
            </Container>
        </ThemeProvider>
    );
};

export default Short_a;