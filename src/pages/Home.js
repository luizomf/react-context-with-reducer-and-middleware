import React, { useEffect, useState } from 'react';
import { apiURL } from '../config/appConfig';

export default function Home() {
  const [logado, setLogado] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const getData = async () => {
      setLoading(true);

      try {
        const rawResponse = await fetch(`${apiURL}`, {
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'GET',
          credentials: 'include',
          signal: controller.signal,
        });

        if (rawResponse.status === 401) {
          setLogado(null);
          setLoading(false);
          return;
        }
      } catch (e) {
        setLogado(null);
        setLoading(false);
      }

      // const response = await rawResponse.json();
      setLogado(true);
      setLoading(false);
    };

    getData();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div>
      <h1>Home {logado ? 'LOGADO' : 'Não logado'}</h1>
      <p>{loading ? 'Carregando, aguarde...' : 'OK'}</p>
    </div>
  );
}
