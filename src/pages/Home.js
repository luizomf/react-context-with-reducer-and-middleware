import React, { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const getData = async () => {
      const rawResponse = await fetch('https://api2.otaviomiranda.com.br/', {
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
