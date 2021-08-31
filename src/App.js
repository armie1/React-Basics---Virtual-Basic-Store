import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Producto from "./components/Producto";
import Carrito from "./components/Carrito";

function App() {
  //ARRAY DISTROCTURING
  const [productos, guardarProductos] = useState([
    { id: 1, nombre: "Camisa ReactJS", precio: 50 },
    { id: 2, nombre: "Camisa RactS", precio: 40 },
    { id: 3, nombre: "Camisa RactyJS", precio: 30 },
    { id: 4, nombre: "Camisa RcyJS", precio: 20 },
  ]);

  const [carrito, agregarProducto] = useState( [] );

  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header titulo="Tienda Virtual" />

      <h1>Lista del Producto</h1>
      {productos.map((producto) => (
        <Producto 
        key = {producto.id}
        producto = { producto }
        productos = { productos }
        carrito = {carrito}
        agregarProducto = {agregarProducto}
        />
      ))}

      <Carrito 
      carrito = {carrito}
      agregarProducto = {agregarProducto}
      />

      <Footer fecha={fecha} />
    </Fragment>
  );
}

export default App;
