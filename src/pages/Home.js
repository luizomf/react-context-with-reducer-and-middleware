import React, { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const getData = async () => {
      const rawResponse = await fetch('http://localhost:3001/', {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'GET',
        credentials: 'include',
      });

      if (rawResponse.status === 401) console.log('Não logado');

      const response = await rawResponse.json();
      console.log(response);
    };

    getData();
  }, []);

  return <h1>Home</h1>;
}
