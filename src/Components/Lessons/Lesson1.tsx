import {CardSubtitle, CardTitle, Row} from 'react-bootstrap';
import { ThemeProvider } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import short_a from '../Images/short_a.png';
import short_e from '../Images/short_e.png';
import short_i from '../Images/short_i.png';
import short_o from '../Images/short_o.png';
import short_u from '../Images/short_u.png';
import LongA from "../Images/long_a.png"
import LongE from "../Images/long_e.png"
import LongI from "../Images/long_i.png"
import LongO from "../Images/long_o.png"
import LongU from "../Images/long_u.png"
import CIcon from '@coreui/icons-react';
import { cilArrowThickRight } from '@coreui/icons';

const Lesson1 = ({setCurrentPage}) => {
    return (
        <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs">
            <Container>
                <Row>
                    <h1 style={{ paddingTop: '50px',textAlign: 'left', fontSize: '92px' }}>Lesson 1: Learn the Letter Sounds</h1>
                </Row>
                <Row>
                    <p className="subHead">Word Awareness, Syllable Blending, Syllable Counting, Rhyme.</p>
                </Row>
                <Row>
                    <Row style={{paddingTop: '20px', paddingBottom: '20px'}}>
                        <Card border= "success" style={{ width: '1427px', height: '366px'}}>
                            <Card.Img src={short_a} style={{ position: 'absolute', width: '433px', height: '332px', left: '18px', top: '18px'}}/>
                            <Card.Body>
                                <CardSubtitle style={{ position: 'absolute', left: '485px', top: '30px', fontSize: '46px'}}>Short 'a'</CardSubtitle>
                                <CardTitle style={{ position: 'absolute', left: '485px', top: '82px', fontSize: '86px', fontWeight: 'bolder'}}>a as in fan</CardTitle>
                                <Button variant="primary" style={{ position: 'absolute', width: '182px', height: '116px', right: '29px', bottom: '24px', backgroundColor: '#FFD700', border: 'none'}}
                                    onClick={() =>  setCurrentPage("Short_a")}><CIcon icon={cilArrowThickRight} style={{width: '160px', height: '90px'}}/></Button>
                            </Card.Body>
                        </Card>
                    </Row>
                    <Row style={{paddingTop: '20px', paddingBottom: '20px'}}>
                        <Card border= "success" style={{ width: '1427px', height: '366px'}}>
                            <Card.Img src={short_e} style={{ position: 'absolute', width: '433px', height: '332px', left: '18px', top: '18px'}}/>
                            <Card.Body>
                                <CardSubtitle style={{ position: 'absolute', left: '485px', top: '30px', fontSize: '46px'}}>Short 'e'</CardSubtitle>
                                <CardTitle style={{ position: 'absolute', left: '485px', top: '82px', fontSize: '86px', fontWeight: 'bolder'}}>e as in jet</CardTitle>
                                <Button variant="primary" style={{ position: 'absolute', width: '182px', height: '116px', right: '29px', bottom: '24px', backgroundColor: '#FFD700', border: 'none'}}
                                    onClick={() =>  setCurrentPage("Short_e")}><CIcon icon={cilArrowThickRight} style={{width: '160px', height: '90px'}}/></Button>
                            </Card.Body>
                        </Card>
                    </Row>
                    <Row style={{paddingTop: '20px', paddingBottom: '20px'}}>
                        <Card border= "success" style={{ width: '1427px', height: '366px'}}>
                            <Card.Img src={short_i} style={{ position: 'absolute', width: '433px', height: '332px', left: '18px', top: '18px'}}/>
                            <Card.Body>
                                <CardSubtitle style={{ position: 'absolute', left: '485px', top: '30px', fontSize: '46px'}}>Short 'i'</CardSubtitle>
                                <CardTitle style={{ position: 'absolute', left: '485px', top: '82px', fontSize: '86px', fontWeight: 'bolder'}}>i as in pig</CardTitle>
                                <Button variant="primary" style={{ position: 'absolute', width: '182px', height: '116px', right: '29px', bottom: '24px', backgroundColor: '#FFD700', border: 'none'}}
                                    onClick={() =>  setCurrentPage("Short_i")}><CIcon icon={cilArrowThickRight} style={{width: '160px', height: '90px'}}/></Button>
                            </Card.Body>
                        </Card>
                    </Row>
                    <Row style={{paddingTop: '20px', paddingBottom: '20px'}}>
                        <Card border= "success" style={{ width: '1427px', height: '366px'}}>
                            <Card.Img src={short_o} style={{ position: 'absolute', width: '433px', height: '332px', left: '18px', top: '18px'}}/>
                            <Card.Body>
                                <CardSubtitle style={{ position: 'absolute', left: '485px', top: '30px', fontSize: '46px'}}>Short 'o'</CardSubtitle>
                                <CardTitle style={{ position: 'absolute', left: '485px', top: '82px', fontSize: '86px', fontWeight: 'bolder'}}>o as in dog</CardTitle>
                                <Button variant="primary" style={{ position: 'absolute', width: '182px', height: '116px', right: '29px', bottom: '24px', backgroundColor: '#FFD700', border: 'none'}}
                                    onClick={() =>  setCurrentPage("Short_o")}><CIcon icon={cilArrowThickRight} style={{width: '160px', height: '90px'}}/></Button>
                            </Card.Body>
                        </Card>
                    </Row>
                    <Row style={{paddingTop: '20px', paddingBottom: '20px'}}>
                        <Card border= "success" style={{ width: '1427px', height: '366px'}}>
                            <Card.Img src={short_u} style={{ position: 'absolute', width: '433px', height: '332px', left: '18px', top: '18px'}}/>
                            <Card.Body>
                                <CardSubtitle style={{ position: 'absolute', left: '485px', top: '30px', fontSize: '46px'}}>Short 'u'</CardSubtitle>
                                <CardTitle style={{ position: 'absolute', left: '485px', top: '82px', fontSize: '86px', fontWeight: 'bolder'}}>u as in bug</CardTitle>
                                <Button variant="primary" style={{ position: 'absolute', width: '182px', height: '116px', right: '29px', bottom: '24px', backgroundColor: '#FFD700', border: 'none'}}
                                    onClick={() =>  setCurrentPage("Short_u")}><CIcon icon={cilArrowThickRight} style={{width: '160px', height: '90px'}}/></Button>
                            </Card.Body>
                        </Card>
                    </Row>
                    <Row style={{paddingTop: '20px', paddingBottom: '20px'}}>
                        <Card border= "success" style={{ width: '1427px', height: '366px'}}>
                            <Card.Img src={LongA} style={{ position: 'absolute', width: '433px', height: '332px', left: '18px', top: '18px'}}/>
                            <Card.Body>
                                <CardSubtitle style={{ position: 'absolute', left: '485px', top: '30px', fontSize: '46px'}}>Long 'a'</CardSubtitle>
                                <CardTitle style={{ position: 'absolute', left: '485px', top: '82px', fontSize: '86px', fontWeight: 'bolder'}}>a as in cake</CardTitle>
                                <Button variant="primary" style={{ position: 'absolute', width: '182px', height: '116px', right: '29px', bottom: '24px', backgroundColor: '#FFD700', border: 'none'}}
                                    onClick={() =>  setCurrentPage("Long_a")}><CIcon icon={cilArrowThickRight} style={{width: '160px', height: '90px'}}/></Button>
                            </Card.Body>
                        </Card>
                    </Row>
                    <Row style={{paddingTop: '20px', paddingBottom: '20px'}}>
                        <Card border= "success" style={{ width: '1427px', height: '366px'}}>
                            <Card.Img src={LongE} style={{ position: 'absolute', width: '433px', height: '332px', left: '18px', top: '18px'}}/>
                            <Card.Body>
                                <CardSubtitle style={{ position: 'absolute', left: '485px', top: '30px', fontSize: '46px'}}>Long 'e'</CardSubtitle>
                                <CardTitle style={{ position: 'absolute', left: '485px', top: '82px', fontSize: '86px', fontWeight: 'bolder'}}>e as in leaf</CardTitle>
                                <Button variant="primary" style={{ position: 'absolute', width: '182px', height: '116px', right: '29px', bottom: '24px', backgroundColor: '#FFD700', border: 'none'}}
                                    onClick={() =>  setCurrentPage("Long_e")}><CIcon icon={cilArrowThickRight} style={{width: '160px', height: '90px'}}/></Button>
                            </Card.Body>
                        </Card>
                    </Row>
                    <Row style={{paddingTop: '20px', paddingBottom: '20px'}}>
                        <Card border= "success" style={{ width: '1427px', height: '366px'}}>
                            <Card.Img src={LongI} style={{ position: 'absolute', width: '433px', height: '332px', left: '18px', top: '18px'}}/>
                            <Card.Body>
                                <CardSubtitle style={{ position: 'absolute', left: '485px', top: '30px', fontSize: '46px'}}>Long 'i'</CardSubtitle>
                                <CardTitle style={{ position: 'absolute', left: '485px', top: '82px', fontSize: '86px', fontWeight: 'bolder'}}>i as in light</CardTitle>
                                <Button variant="primary" style={{ position: 'absolute', width: '182px', height: '116px', right: '29px', bottom: '24px', backgroundColor: '#FFD700', border: 'none'}}
                                    onClick={() =>  setCurrentPage("Long_i")}><CIcon icon={cilArrowThickRight} style={{width: '160px', height: '90px'}}/></Button>
                            </Card.Body>
                        </Card>
                    </Row>
                    <Row style={{paddingTop: '20px', paddingBottom: '20px'}}>
                        <Card border= "success" style={{ width: '1427px', height: '366px'}}>
                            <Card.Img src={LongO} style={{ position: 'absolute', width: '433px', height: '332px', left: '18px', top: '18px'}}/>
                            <Card.Body>
                                <CardSubtitle style={{ position: 'absolute', left: '485px', top: '30px', fontSize: '46px'}}>Long 'o'</CardSubtitle>
                                <CardTitle style={{ position: 'absolute', left: '485px', top: '82px', fontSize: '86px', fontWeight: 'bolder'}}>o as in boat</CardTitle>
                                <Button variant="primary" style={{ position: 'absolute', width: '182px', height: '116px', right: '29px', bottom: '24px', backgroundColor: '#FFD700', border: 'none'}}
                                    onClick={() =>  setCurrentPage("Long_o")}><CIcon icon={cilArrowThickRight} style={{width: '160px', height: '90px'}}/></Button>
                            </Card.Body>
                        </Card>
                    </Row>
                    <Row style={{paddingTop: '20px', paddingBottom: '20px'}}>
                        <Card border= "success" style={{ width: '1427px', height: '366px'}}>
                            <Card.Img src={LongU} style={{ position: 'absolute', width: '433px', height: '332px', left: '18px', top: '18px'}}/>
                            <Card.Body>
                                <CardSubtitle style={{ position: 'absolute', left: '485px', top: '30px', fontSize: '46px'}}>Long 'u'</CardSubtitle>
                                <CardTitle style={{ position: 'absolute', left: '485px', top: '82px', fontSize: '86px', fontWeight: 'bolder'}}>u as in cube</CardTitle>
                                <Button variant="primary" style={{ position: 'absolute', width: '182px', height: '116px', right: '29px', bottom: '24px', backgroundColor: '#FFD700', border: 'none'}}
                                    onClick={() =>  setCurrentPage("Long_u")}><CIcon icon={cilArrowThickRight} style={{width: '160px', height: '90px'}}/></Button>
                            </Card.Body>
                        </Card>
                    </Row>
                </Row>
            </Container>
        </ThemeProvider>
    );
};

export default Lesson1;