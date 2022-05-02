import { Switch, BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import RouteFromPath from 'components/routes/RouteFromPath';
import useTranslation from 'hooks/useTranslation';
import useAuth from 'hooks/useAuth';
import routes from 'routes';
import MainLayout from 'components/common/mainLayout/MainLayout';

function App() {
  const t = useTranslation();
  const { authenticated } = useAuth();

  return (
    <>
      <Helmet>
        <title>{t('global.pageTitle')}</title>
      </Helmet>
      <BrowserRouter>
        <MainLayout>
          <Switch>
            {routes.map(route => (
              <RouteFromPath key={`route-${route.path}`} {...route} authenticated={authenticated} />
            ))}
          </Switch>
        </MainLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
