import React from 'react';
import './css/LeftBox.css';

const LeftBox = function (){
    return(
        <div className ="LeftBox">
             <div className ="LeftItem">
                 <a href="">Stock</a>
             </div>
             <div className ="LeftItem">
                 <a href="">Alta de Producto</a>
             </div>
             <div className ="LeftItem">
                 <a href="">Baja de Producto</a>
             </div>
             <div className ="LeftItem">
                 <a href="">Modificacion de Producto</a>
             </div>
        </div>
    );
}
export default LeftBox;