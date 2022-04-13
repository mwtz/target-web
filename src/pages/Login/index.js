import { useCallback, useEffect } from 'react';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { api } from 'services/api';
import { useLoginMutation } from 'services/auth/auth';
import useAuth from 'hooks/useAuth';
import useTranslation from 'hooks/useTranslation';
import routesPaths from 'routes/routesPaths';
import Input from 'components/form/Input';
import Button from 'components/common/Button';
import MobileSample from 'components/mobileSample/index';
import smileIcon from 'assets/smilies.svg';

import './styles.scss';

const Login = () => {
  const t = useTranslation();
  const dispatch = useDispatch();
  const { push } = useHistory();
  const [login, { isLoading, isSuccess, error }] = useLoginMutation();
  const { authenticated, user } = useAuth();

  const schema = z.object({
    email: z.string().email({ message: t('login.errors.emailMsg') }),
    password: z.string().min(1, { message: t('login.errors.passwordMsg') }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = data => login(data);

  const resetErrors = useCallback(() => dispatch(api.util.resetApiState()), [dispatch]);

  const handleFocus = () => error && resetErrors();

  useEffect(() => {
    if (isSuccess) {
      push(routesPaths.index);
    }
  }, [isSuccess, user, push]);

  useEffect(() => resetErrors, [resetErrors]);

  if (authenticated) {
    return <Redirect to={routesPaths.index} />;
  }

  return (
    <div className="d-flex">
      <div className="d-flex flex-column justify-content-start align-items-center login-form">
        <div className="d-flex flex-column align-items-center login-msg">
          <img src={smileIcon} alt="smileIcon" />
          <h1 className="mt-3">{t('login.title')}</h1>
          <h2>{t('login.subtitle')}</h2>
          <p>{t('login.loginMsg')}</p>
        </div>
        <form
          className="d-flex flex-column align-items-center"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <label htmlFor="email">{t('login.labels.email')}</label>
          <Input
            register={register}
            type="email"
            name="email"
            error={errors.email}
            handleFocus={handleFocus}
          />

          <label htmlFor="password">{t('login.labels.password')}</label>
          <Input
            register={register}
            type="password"
            name="password"
            error={errors.password}
            handleFocus={handleFocus}
          />

          {error && error.data && <p className="error-message">{error.data.errors}</p>}

          <div className="button-container">
            <Button type="submit" disabled={isLoading}>
              {t('login.loginButton')}
            </Button>
            <Link className="forgot-password" href="#">
              {t('login.forgotPasswordMsg')}
            </Link>
          </div>
        </form>
        <div className="d-flex flex-column align-items-center text-center signup">
          <Link className="facebook-signup" href="#">
            {t('login.facebookSignup')}
          </Link>
          <Link className="email-signup" to={routesPaths.signup}>
            {t('login.dontHaveAccountMsg')}
          </Link>
        </div>
      </div>
      <MobileSample />
    </div>
  );
};

export default Login;
