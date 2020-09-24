import React from 'react';
import CardArticle from './CardArticle';
//import CardGroup from 'react-bootstrap/CardGroup';
//import Container from 'react-bootstrap/Container';
//import CardDeck from 'react-bootstrap/CardDeck';
//import JSONViewer from 'react-json-viewer';








class ListaBusquedas extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          minuevodato: {}
        }
      }   
    
      
    render() 
    {   let arreglo=null;
        arreglo=this.props.nuevodato;

            if (arreglo) {
                console.log("areglando",arreglo);
            return (
                <div>
                <div>Dia {arreglo['formattedDate']}</div>
            <div className="pizarraNoticias">
                
                 
                
                {
               
                      arreglo.trendingSearches.map((trendingSearch,i)=>{
                                        return ( <CardArticle titulo={trendingSearch.title.query} key={i} enlace={trendingSearch.image.newsUrl} 
                                            imagen={trendingSearch.image.imageUrl} 
                                            copete={trendingSearch.articles[0].snippet} 
                                            articulosRelacionados={trendingSearch.articles}/>);

                                        })
    

                 
                }
                
                </div>
                </div>
    
                );




        } else {return (<div>Esperando la carroza</div>)}

        }

        componentDidMount() {  
        
        }   
        
        

    
}
  export default ListaBusquedas;

 