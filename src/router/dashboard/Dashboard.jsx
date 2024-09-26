import React from "react";
import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import AddUser from "../../pages/users/AddUser";
import GetAllUsers from "../../pages/users/GetAllUsers";
import EditUser from "../../pages/users/EditUser";
import DashboardHome from "../../pages/dashboard/Index";
import GetAllClients from "../../pages/clients/GetAllClients";
import AddClient from "../../pages/clients/AddClient";
import EditClient from "../../pages/clients/EditClient";

const Dashboard = () => {
  const routes = [
    {
      path: "/",
      element: <DashboardHome />,
    },
    {
      path: "/users",
      element: <GetAllUsers />,
    },
    {
      path: "/add-user",
      element: <AddUser />,
    },
    {
      path: "/edit-user/:id",
      element: <EditUser />,
    },
    {
      path: "/clients",
      element: <GetAllClients />,
    },
    {
      path: "/add-client",
      element: <AddClient />,
    },
    {
      path: "/edit-client/:id",
      element: <EditClient />,
    },
  ];
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={
            <React.Suspense fallback={<div>Loading...</div>}>
              {route.element}
            </React.Suspense>
          }
        />
      ))}
    </Routes>
  );
};

export default Dashboard;
