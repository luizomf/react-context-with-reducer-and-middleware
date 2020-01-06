import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={{ padding: '10px 0' }}>
      <Link style={{ marginRight: '10px' }} to="/">
        Home
      </Link>
      <Link style={{ marginRight: '10px' }} to="/closed/">
        Closed
      </Link>
      <Link style={{ marginRight: '10px' }} to="/login/">
        Login
      </Link>
    </header>
  );
}
