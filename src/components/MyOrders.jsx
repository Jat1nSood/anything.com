import React, { useState, useEffect } from 'react';
import '../CSS/myorders.css'
import { constSelector, useRecoilValue } from 'recoil';
import {userEmail as loggedInEmail} from '../state/atoms/Email';


export default function MyOrders() {
  const userEmail  = useRecoilValue(loggedInEmail);
  const [orders, setOrders] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/myorders?user=${userEmail}`, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
     
      setOrders(data.order.addedProduct)
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='MyOrders'>
      <h2>Your Orders</h2>
      {orders && orders.length > 0 ? (
        <ul>
          {orders.map((order, index) => (
            <li style = {{listStyle :"none"}}key={index}>
              <div className='myorderCard'>
                <div className='myOrderImage'>
                <img src={order.url} alt='myorderimage'/>

                </div>
                <div className='myOrderDescription'>
                  <h3>{order.title}</h3>

                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>You have not placed any order :(</p>
      )}
    </div>
  );
}
