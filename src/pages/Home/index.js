import Button from 'components/common/Button';
import MapView from 'components/mapView';
import useTranslation from 'hooks/useTranslation';
import { useLogoutMutation } from 'services/auth/auth';

import './styles.scss';

const Home = () => {
  const t = useTranslation();
  const [logout, { isLoading }] = useLogoutMutation();

  const handleLogout = () => logout().then(() => localStorage.removeItem('user'));

  return (
    <div className="home">
      <MapView />
      <div className="home__logout">
        <Button handleClick={handleLogout} disabled={isLoading}>
          {t('home.logoutBtn')}
        </Button>
      </div>
    </div>
  );
};

export default Home;
