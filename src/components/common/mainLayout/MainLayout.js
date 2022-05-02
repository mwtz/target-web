import React from 'react';
import useAuth from 'hooks/useAuth';
import MapView from 'components/mapView';
import MobileSample from 'components/mobileSample';

import './styles.scss';

const MainLayout = ({ children }) => {
  const { authenticated } = useAuth();

  return (
    <div className="main-layout">
      {children}
      {authenticated ? <MapView /> : <MobileSample />}
    </div>
  );
};

export default MainLayout;
