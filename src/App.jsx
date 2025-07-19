// App.jsx
import React from 'react';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import appStore from './utils/appStore';
import Login from './components/Login';
import Browse from './components/Browse';
import Body from './components/Body'; // handles auth logic

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />, // Body does auth check and renders routes
    children: [
      {
        path: '/',
        element: <Login />,
      },
      {
        path: '/browse',
        element: <Browse />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
