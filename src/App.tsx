import { FC } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Theme } from 'react-daisyui';

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
    <Theme dataTheme='dark'>
      <RouterProvider router={router} />
    </Theme>
  )
}

export default App;
