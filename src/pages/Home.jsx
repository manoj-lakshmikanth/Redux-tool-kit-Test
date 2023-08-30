import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { usersData } from '../store/UserSlice';

const Home = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const selector = useSelector((state) => {
    return state.users.data;
  });

  // console.log(selector);

  async function UserDetails() {
    let response = await axios('https://fakestoreapi.com/products');
    const data = response.data;
    // setData(data);
    dispatch(usersData(data));
  }
  console.log(data);
  useEffect(() => {
    UserDetails();
  }, []);

  return (
    <div>
      {selector.map((items, i) => {
        console.log(items, 'items');
        return (
          <div
            key={i}
            style={{
              border: '1px solid gray',
              borderRadius: '10px',
              width: '30%',
              height: '300px',
            }}
          >
            <img
              src={items.image}
              alt="/"
              style={{ width: '50px', height: '50px', alignSelf: 'center' }}
            />
            <div>
              <p> Rating: &nbsp; {items.rating.rate}</p>
              <p> Title: &nbsp;{items.title}</p>
            </div>
            <p>Description: &nbsp; {items.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
