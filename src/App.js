import { Switch, BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import RouteFromPath from 'components/routes/RouteFromPath';
import useTranslation from 'hooks/useTranslation';
import routes from 'routes';
import MainLayout from 'components/common/mainLayout/MainLayout';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectAuth } from 'services/auth/auth';
import { ActionCableProvider } from '@thrash-industries/react-actioncable-provider';
import ActionCable from 'actioncable';

function App() {
  const t = useTranslation();
  const { authenticated, user } = useSelector(selectAuth);

  const actionCableUrl = useMemo(() => {
    if (authenticated) {
      let url = process.env.REACT_APP_ACTIONCABLE_URL;
      url = `${url}?access-token=${user.token}&client=${user.client}&uid=${user.uid}`;
      return url;
    }
    return undefined;
  }, [user, authenticated]);

  const cable = ActionCable.createConsumer(actionCableUrl);
  return (
    <>
      <Helmet>
        <title>{t('global.pageTitle')}</title>
      </Helmet>
      <BrowserRouter>
        <MainLayout>
          <ActionCableProvider cable={cable}>
            <Switch>
              {routes.map(route => (
                <RouteFromPath
                  key={`route-${route.path}`}
                  {...route}
                  authenticated={authenticated}
                />
              ))}
            </Switch>
          </ActionCableProvider>
        </MainLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
