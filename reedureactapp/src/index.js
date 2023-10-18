import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Assuming you have defined Root and Team components somewhere in your code
import Root from './Root';
import Team from './Team';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    // Assuming rootLoader and teamLoader are defined somewhere in your code
    loader: rootLoader,
    children: [
      {
        path: 'team',
        element: <Team />,
        loader: teamLoader,
      },
    ],
  },
]);

const AppWithRouter = (
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppWithRouter />);
