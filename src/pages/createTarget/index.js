import React from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import useTranslation from 'hooks/useTranslation';
import TopHeader from 'components/common/topheader';
import Input from 'components/form/Input';
import Button from 'components/common/Button';
import Select from 'components/form/select';
import { TARGET_TOPICS } from 'constants/constants';
import newTarget from 'assets/newTarget.svg';
import smiles from 'assets/smilies.svg';

import './styles.scss';
import useTopics from 'hooks/useTopics';
const CreateTarget = () => {
  const t = useTranslation();

  const { topics } = useTopics();
  console.log(topics);

  const schema = z.object({
    area: z.string().nonempty({ message: t('newTarget.errors.area') }),
    title: z.string().nonempty({ message: t('newTarget.errors.title') }),
    topic: z.string().nonempty({ message: t('newTarget.errors.topic') }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = data => {
    console.log(data);
  };
  return (
    <div className="target-container">
      <TopHeader>{t('newTarget.header')}</TopHeader>
      <img src={newTarget} alt="target" className="targe-icon" />
      <div className="title">{t('newTarget.title')}</div>
      <div className="target-form">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <label htmlFor="area">{t('newTarget.labels.areaLabel')}</label>
          <Input
            className="input"
            register={register}
            type="number"
            name="area"
            error={errors.area}
          />
          <label htmlFor="title">{t('newTarget.labels.targetTitle')}</label>
          <Input
            className="input"
            register={register}
            type="string"
            name="title"
            error={errors.area}
          />
          <label htmlFor="topic">{t('newTarget.labels.topic')}</label>
          <Select
            name="topic"
            options={[...topics]}
            register={register}
            placeholder={t('newTarget.labels.topicPlaceholder')}
            error={errors.topic}
            className="topic"
          />

          {/* {error && error.data && (
            <p className="error-message">{error.data.errors?.full_messages[0]}</p>
          )} */}

          <div className="button-container">
            <Button type="submit">{t('newTarget.save')}</Button>
          </div>
        </form>
      </div>
      <img src={smiles} alt="smiles" className="smiles" />
    </div>
  );
};

export default CreateTarget;
