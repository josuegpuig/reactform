import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    name: '',
    description: '',
    price: '',
    picture: '',
    products: [
      {
        picture: 'http://www.rewonline.com/images/p/gri/gri-vgt.lg.jpg',
        description: 'Moledora nueva, muele como ninguna otra.',
        price: '$3,000',
        name: 'Moledora de Grano de Café'
      },
      {
        name: 'Licuadora Oster',
        description: 'Una licuadora vergas',
        price: '$1,000',
        picture:'https://ostermx.vteximg.com.br/arquivos/ids/156898-1000-1000/BLSTTDG-RBG_0.jpg?v=636979482831600000'
      },
      {
        name: 'Lavadora LG',
        description: 'Una lavadora vergas y seca también',
        price: '$12,000',
        picture: 'https://mobileimages.lowes.com/product/converted/048231/048231024624.jpg?size=xl'
      },
      {
        name: 'Nintendo Switch',
        description: 'La consola más vergas',
        price: '$8,000',
        picture: 'https://images-na.ssl-images-amazon.com/images/I/71ivrWiYkLL._SL1500_.jpg'
      }
    ]
  };

  onNameChange(event) {
    this.setState({name: event.target.value});
  }
  onDescriptionChange(event) {
    this.setState({description: event.target.value});
  }
  onPriceChange(event) {
    this.setState({price: event.target.value});
  }
  onPictureChange(event) {
    this.setState({picture: event.target.value});
  }

  onClickForm() {
    const newProduct = {};
    const products = this.state.products;

    newProduct.name = this.state.name;
    newProduct.description = this.state.description;
    newProduct.price = this.state.price;
    newProduct.picture = this.state.picture;
    console.log(newProduct);

    products.push(newProduct);

    this.setState({products: products})
  }

  render() {
    const { products } = this.state;

    return (
      <div>
        <div className="container">
        {
          products.map(({ picture, name, price, description }) => (
            <figure className="snip1171">
              <img src={ picture } alt="sample71"/>
              <div className="price">{ price }</div>
              <figcaption>
                <h3>{ name }</h3>
                <p>{ description }</p>
                <a>Add to Cart</a>
              </figcaption>
            </figure>
          ))
        }
        </div>
        <div>
          <form>
            <input type="text" placeholder="Name" onChange={(event) => this.onNameChange(event)}/>
            <input type="text" placeholder="Description" onChange={(event) => this.onDescriptionChange(event)}/>
            <input type="text" placeholder="Price" onChange={(event) => this.onPriceChange(event)}/>
            <input type="text" placeholder="Picture" onChange={(event) => this.onPictureChange(event)}/>
            <button type="button" onClick={() => this.onClickForm()}>Agregar</button>
          </form>
        </div>
      </div>
      
    );
  }

}

export default App;
