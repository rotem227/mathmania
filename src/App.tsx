import { FC } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from './pages/home';
import Practice from './pages/practice';
import Settings from './pages/settings';

import PageLayout from "./components/PageLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PageLayout>
        <Home />
      </PageLayout>
    ),
  },
  {
    path: '/practice',
    element: (
      <PageLayout>
        <Practice />
      </PageLayout>
    ),
  },
  {
    path: '/settings',
    element: (
      <PageLayout>
        <Settings />
      </PageLayout>
    ),
  },
]);

const App: FC = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
