import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProfileDetailsPage from './Components/ProfilePage/ProfilePage.jsx';
import HomePage from './Components/home/HomePage.jsx';
import LinkedInHeader from './Components/Layout/AppLayout.jsx';
import JobDetails from './Components/JobDetail/JobDetails.jsx';

function App() {
  const router = createBrowserRouter([
    {
      path: "/", element: <LinkedInHeader />,
      children: [{
        path: '',
        element: <HomePage />,
      },
      { path: "/ProfilePage", element: <ProfileDetailsPage /> },
      { path: "/jobDetail", element: <JobDetails /> },
      ],
    },

  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;