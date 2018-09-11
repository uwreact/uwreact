import React from 'react';
import Loadable from 'react-loadable';

const loading = () => <div>Loading</div>;

const LoadableDashboard = Loadable({
  loader: () => import('./DashboardView'),
  loading,
});

const Dashboard = () => <LoadableDashboard />;

export default Dashboard;
