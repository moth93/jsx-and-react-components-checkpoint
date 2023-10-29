import products from './product';
import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import NameProduct from './componants/name';
import PriceProduct from './componants/Price';
import DescriptionProduct from './componants/Description';



function App() {
  const firstName = "Mr.User";
 
  return (
    <div className="App">
      <div className="container">
    {products.map((product, index) => (
   
      <Card key={index} style={{ width: '18rem' }} className="Card">
        <Card.Img variant="top" src={product.Image} />
       
        <Card.Body>
          <Card.Title>
            <NameProduct data={product} /> {/* Pass the product data as a prop */}
          </Card.Title>
          <Card.Text>
            <PriceProduct data={product} /> {/* Pass the product data as a prop */}
            <DescriptionProduct data={product} /> {/* Pass the product data as a prop */}
          </Card.Text>
        </Card.Body>
      </Card>
    ))}
    </div>
    <div className="MsgPerso">
        <p>Hello, {firstName ? firstName : "there!"}</p>
        
      </div>

  </div>
  );
}

export default App;
