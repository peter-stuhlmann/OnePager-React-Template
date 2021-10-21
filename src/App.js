import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

import './assets/css/global.css';

import Router from './components/Router';

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading>Loading...</Loading>}>
        <Router />
      </Suspense>
    </BrowserRouter>
  );
}

const Loading = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
`;
