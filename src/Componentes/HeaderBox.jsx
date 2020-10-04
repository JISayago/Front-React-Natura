import React from 'react';
import './css/HeaderBox.css';

const HeaderBox = function(){
    return(
        <div className ="HeaderBox">
           <div className ="HeaderBox_Top">
             <a href="">Logo Natura</a>
           </div>
           <div className ="HeaderBox_Bot">
               <a href="">Producto</a>
               <a href="">Clientes</a>
               <a href="">Ventas</a>
               <a href="">Pedidos</a>
               <a href="">Balance</a>
           </div>
        </div>
    );
}
export default HeaderBox; 