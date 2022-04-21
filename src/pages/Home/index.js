import MapView from 'components/mapView';
import Sidebar from 'components/sidebar';

import './styles.scss';

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <MapView />
    </div>
  );
};

export default Home;
