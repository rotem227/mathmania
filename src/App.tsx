import { FC } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Intro from './pages/Intro';
import Practice from './pages/practice';

import PageLayout from "./components/PageLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PageLayout>
        <Intro />
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
]);

const App: FC = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
