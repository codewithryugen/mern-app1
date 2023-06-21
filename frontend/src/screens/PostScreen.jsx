import { Container ,Row,Col} from "react-bootstrap";
const PostScreen = ()=>{
    return  (
        <Container>
            <Row className='justify-content-md-center mt-5'>
                <Col xs={12} md={6} className='card p-5'>
                    <h1>Hello Mbworld</h1>
                </Col>
            </Row>
        </Container>
    ) 
}

export default PostScreen;