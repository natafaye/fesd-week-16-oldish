import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

type HomePageProps = { 
    productList: Array<{ id: number, name: string, price: number }>
}

export default function HomePage({ productList }: HomePageProps) {
    return (
        <>
            <Row className="mt-3">
                <Col xs={9}>
                    <h1>Hi there</h1>
                </Col>
                <Col>
                    <Button variant="primary">Click Me</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    { productList.map(product => (
                        <div key={product.id} className="bg-light p-3 m-3">
                            <p>{product.name}</p>
                            <Link to={"/products/" + product.id}><Button className="me-2">More Details</Button></Link>
                            <Button>Buy Now ${product.price}</Button>
                        </div>
                    ))}
                </Col>
            </Row>
        </>
    )
}