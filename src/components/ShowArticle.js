import React, {Component} from 'react';

class ShowArticle extends Component{
    render(){
        let demoArticle = {
            "_id": "5fed1938ed499f33241f923f",
            "date": "2020-12-31T00:20:08.866Z",
            "barcode": "8024123146045",
            "name": "Polenta Favorita",
            "description": "Suplemento vitaminico kirchnerista",
            "image": "../src/products/Polenta Favorita",
            "avg": 60.5,
            "__v": 0
        };

        return (
            <div className="article-info">
                <h3>{demoArticle.name}</h3>
                <hr/>
                <p><strong>Descripcion: </strong>{demoArticle.description}</p>
                <p><strong>Precio promedio: </strong>{demoArticle.avg}</p>
            </div>
        );
    }
}

export default ShowArticle;