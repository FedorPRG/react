import React from 'react';
import { Link } from 'react-router-dom';

function AboutPage() {
  return ( <>
    <h1>О нас</h1>
    <Link to={'/'}>Главная страница</Link>
  </> );
}

export default AboutPage;