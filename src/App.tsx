import {useEffect, useState} from 'react'
import './App.css'

function App() {

    const [token,setToken] = useState<string>('');

    useEffect(() => {

    },[])

    // arrows function
    const login  = () => {
        fetch('http://localhost:5001/api/v1/auth/connect/token',
            {method:'POST',
                headers: { 'Content-Type': 'application/json' },
                body:JSON.stringify({username:"Camden22",password:"P@ssword1"})})
            .then(response => response.json()).then(data => {
            console.log('Token ', data);
            setToken(data.access_token);
        }).catch((error) => {
            console.error('Error fetching', error);
        });
    }

    const getProducts = () => {
        fetch('http://localhost:5001/api/v1/products',
            {method:'Get',headers: {'Authorization': `Bearer ${token}`,'Content-Type': 'application/json'}}).then(response => response.json()).then(data => {
            console.log('Products ', data);
        }).catch((error) => {
            console.error('Error fetching', error);
        });
    }


  return (
      <div className="card">
          <button onClick={getProducts}>Get Products</button>
        <button onClick={login}>Login</button>
          <p>
              Access Token: {token}
          </p>
      </div>
  )
}

export default App
