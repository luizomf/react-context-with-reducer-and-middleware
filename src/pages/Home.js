import React, { useEffect, useState } from 'react';

export default function Home() {
  const [logado, setLogado] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const rawResponse = await fetch('https://api2.otaviomiranda.com.br/', {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'GET',
        credentials: 'include',
      });

      if (rawResponse.status === 401) {
        setLogado(null);
        return;
      }

      // const response = await rawResponse.json();
      setLogado(true);
    };

    getData();
  }, []);

  return <h1>Home {logado ? 'LOGADO' : 'Não logado'}</h1>;
}
