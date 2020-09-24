import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
//import Badge from 'react-bootstrap/Badge';

import './mysass.scss';
class CardArticle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          }
      }  
    render() {
      return (
            


                <Container>
                    
               <div className="tituloArticulo">
                   
               {this.props.titulo}</div>     
                <ListGroup className="list-group-flush">
                    {this.props.articulosRelacionados.map((articulo,i) =>{
                        
                        return (
                        <ListGroupItem key={i}>
                                <Card className="estiloArticulo">
                                    <Card.Header><b>{articulo.source}</b></Card.Header>
                                    <Card.Img variant="top" src={ articulo.image ? articulo.image.imageUrl:"#"}/>
                                    <Card.Link href={articulo.url} target="_blank" rel="noopener noreferrer">{articulo.title}</Card.Link>
                                    
                                </Card>
                            
                        </ListGroupItem>
                    
                        );}
                    
                    )
                    }
                    
                </ListGroup>
                </Container>
                /* </Card.Body>
            </Card> */
      );
    }
  }
  export default CardArticle;