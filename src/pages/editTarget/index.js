import React, { useEffect, useState, useCallback } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useHistory, useLocation } from 'react-router';

import { useDeleteTargetMutation } from 'services/target/target';
import routesPaths from 'routes/routesPaths';
import useTopics from 'hooks/useTopics';
import useTranslation from 'hooks/useTranslation';
import TopHeader from 'components/common/topheader';
import Input from 'components/form/Input';
import Button from 'components/common/Button';
import Select from 'components/form/select';
import useTargets from 'hooks/useTargets';
import newTarget from 'assets/newTarget.svg';
import smiles from 'assets/smilies.svg';

import './styles.scss';

const EditTarget = () => {
  const [currentTarget, setCurrentTarget] = useState(null);

  const t = useTranslation();
  const { topics } = useTopics();
  const { targets } = useTargets();
  const location = useLocation();
  const { push } = useHistory();
  const [deleteTarget] = useDeleteTargetMutation();

  const findTarget = useCallback(
    id => {
      const found = targets.find(target => target.id == id);
      setCurrentTarget(found);
    },
    [targets]
  );

  useEffect(() => {
    let params = new URLSearchParams(location.search);
    let targeId = params.get('targeId');
    findTarget(targeId);
  }, [location, findTarget]);

  const schema = z.object({
    radius: z.string().nonempty({ message: t('editTarget.errors.area') }),
    title: z.string().nonempty({ message: t('editTarget.errors.title') }),
    topic: z.string().nonempty({ message: t('editTarget.errors.topic') }),
  });

  const {
    register,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const handleDeleteTarget = () => {
    deleteTarget(currentTarget.id)
      .unwrap()
      .then(() => {
        push(routesPaths.profile);
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="edit-target-container">
      <TopHeader>{t('editTarget.header')}</TopHeader>
      <img src={newTarget} alt="target" className="targe-icon" />
      <div className="title">{t('editTarget.title')}</div>
      {currentTarget && (
        <div className="target-form">
          <form noValidate>
            <label htmlFor="radius">{t('editTarget.labels.areaLabel')}</label>
            <Input
              className="input"
              register={register}
              type="number"
              name="radius"
              error={errors.radius}
              defaultValue={currentTarget.radius}
            />
            <label htmlFor="title">{t('editTarget.labels.targetTitle')}</label>
            <Input
              className="input"
              register={register}
              type="string"
              name="title"
              error={errors.title}
              defaultValue={currentTarget.title}
            />
            <label htmlFor="topic">{t('editTarget.labels.topic')}</label>
            <Select
              name="topic"
              options={topics}
              register={register}
              error={errors.topic}
              className="topic"
              active={currentTarget.topic_id}
            />
            <div className="button-container">
              <Button handleClick={handleDeleteTarget}>{t('editTarget.button.delete')}</Button>
            </div>
          </form>
        </div>
      )}
      <img src={smiles} alt="smiles" className="smiles" />
    </div>
  );
};

export default EditTarget;
