import React from "react";
import Header from './Header'
import { Link } from "react-router-dom";
import Footer from "./Footer";
import data from "../../data";

const Home = () => {
  return (
    <div className="grid-container">
      <Header/>
      <main>
        <div className="row center">
            {
              data.products && data.products.map((product)=>(
                <div className="card">
                <Link to={`/product/${product._id}`}>
                <img className="medium" src={product.image} alt={product.brand} />
              </Link>
              <div className="card-body">
                <Link to={`/product/${product._id}`}>
                  <h2>{product.name}</h2>
                </Link>
                <div className="rating">
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star-half-alt"></i>
                  </span>
                  <span>
                    <i className="far fa-star"></i>
                  </span>
                </div>
                <div className="price">
               {`$${product.price}`}
                </div>
              </div>
          </div>
          
              ))
            }
        </div>
      </main>
      
    <Footer/>
    </div>
  );
};
export default Home;
