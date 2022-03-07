
import React from "react";
import { Button, Card } from "react-bootstrap";

function moviie({ movies, handelChosenMovie }) {
    return (
        <div key={movies.id}>
            <Card style={{ width: "18rem", maxHeight: "400px" }}>
                <Card.Img variant="top" src={movies.image} />
                <Card.Body>
                    <Card.Title>{movies.title}</Card.Title>
                    <Card.Text>{movies.overview}</Card.Text>
                    <Button
                        variant="primary"
                        onClick={() => handelChosenMovie(movies)}
                    >
                        Add to Fav
                    </Button>
                </Card.Body>
            </Card>            
        </div>
    )
}
export default moviie;