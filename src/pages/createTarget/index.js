import React, { useEffect, useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useHistory, useLocation } from 'react-router';
import { NotificationContainer, NotificationManager } from 'react-notifications';

import { useCreateTargetMutation } from 'services/target/target';
import routesPaths from 'routes/routesPaths';
import useTopics from 'hooks/useTopics';
import useTranslation from 'hooks/useTranslation';
import TopHeader from 'components/common/topheader';
import Input from 'components/form/Input';
import Button from 'components/common/Button';
import Select from 'components/form/select';
import useTargets from 'hooks/useTargets';
import { TARGETS_LIMIT } from 'constants/constants';
import newTarget from 'assets/newTarget.svg';
import smiles from 'assets/smilies.svg';

import './styles.scss';

const CreateTarget = () => {
  const [lat, setLat] = useState('0');
  const [lng, setLng] = useState('0');
  const [error, setError] = useState(false);

  const t = useTranslation();
  const { topics } = useTopics();
  const { targets } = useTargets();
  const location = useLocation();
  const { push } = useHistory();
  const [createTarget, { isSuccess }] = useCreateTargetMutation();

  useEffect(() => {
    let params = new URLSearchParams(location.search);
    let lat = params.get('lat');
    let lng = params.get('lng');
    setLat(lat);
    setLng(lng);
  }, [location]);

  const schema = z.object({
    radius: z.string().nonempty({ message: t('newTarget.errors.area') }),
    title: z.string().nonempty({ message: t('newTarget.errors.title') }),
    topic: z.string().nonempty({ message: t('newTarget.errors.topic') }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = data => {
    if (targets.length === TARGETS_LIMIT) {
      setError(true);
      return;
    }
    setError(false);
    const { title, radius, topic } = data;
    const { id: topic_id } = JSON.parse(topic);
    createTarget({
      title,
      radius,
      lat,
      lng,
      topic_id,
    }).then(data => console.log(data));
  };

  useEffect(() => {
    if (isSuccess) {
      push(routesPaths.profile);
    }
  }, [isSuccess, push]);

  const notification = () => {
    NotificationManager.success('Success message', 'Title here', 5000, () => {
      push(routesPaths.profile);
    });
  };
  return (
    <div className="target-container">
      <TopHeader>{t('newTarget.header')}</TopHeader>
      <img src={newTarget} alt="target" className="targe-icon" />
      <div className="title">{t('newTarget.title')}</div>
      <div className="target-form">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <label htmlFor="radius">{t('newTarget.labels.areaLabel')}</label>
          <Input
            className="input"
            register={register}
            type="number"
            name="radius"
            error={errors.radius}
          />
          <label htmlFor="title">{t('newTarget.labels.targetTitle')}</label>
          <Input
            className="input"
            register={register}
            type="string"
            name="title"
            error={errors.title}
          />
          <label htmlFor="topic">{t('newTarget.labels.topic')}</label>
          <Select
            name="topic"
            options={topics}
            register={register}
            placeholder={t('newTarget.labels.topicPlaceholder')}
            error={errors.topic}
            className="topic"
          />
          {error && <p className="error-message-limit">{t('newTarget.errors.limit')}</p>}

          <div className="button-container">
            <Button type="submit">{t('newTarget.save')}</Button>
          </div>
          <Button handleClick={notification}>Try</Button>
        </form>
      </div>
      <img src={smiles} alt="smiles" className="smiles" />
      <NotificationContainer />
    </div>
  );
};

export default CreateTarget;
