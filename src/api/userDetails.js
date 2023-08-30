import axios from 'axios';

async function UserDetails() {
  console.log('first');
  let response = await axios('https://fakestoreapi.com/products');
  console.log(response.data);
}

export default UserDetails;
