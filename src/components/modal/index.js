import React, { useEffect, useState } from 'react';
import useTranslation from 'hooks/useTranslation';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Button from 'components/common/Button';
import smileIcon from 'assets/smilies.svg';
import Input from 'components/form/Input';
import TextArea from 'components/form/textarea';
import { useQuestionMutation } from 'services/questions/questions';
import close from 'assets/close.svg';

import './styles.scss';

const Modal = ({ handleCloseModal = null }) => {
  const [showForm, setShowForm] = useState(true);
  const [sendError, setSendError] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);

  const t = useTranslation();
  const [question, { isSuccess, isError }] = useQuestionMutation();

  const schema = z.object({
    email: z.string().email({ message: t('contact.errors.email') }),
    message: z.string().nonempty({ message: t('contact.errors.message') }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = ({ email, message: body }) => {
    question({ email, body });
  };

  useEffect(() => {
    if (isSuccess) {
      setSendSuccess(true);
      setShowForm(false);
    }
    if (isError) {
      setSendError(true);
      setShowForm(false);
    }
  }, [isSuccess, isError]);

  return (
    <div className="modal-container">
      <div className="modal-content">
        <div className="close-icon" onClick={handleCloseModal} aria-hidden="true">
          <img src={close} alt="close" />
        </div>
        <img className="smiles" src={smileIcon} alt="smileIcon" />
        {showForm && (
          <>
            <h1 className="title">{t('contact.title')}</h1>
            <div className="contact-form">
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="contact-form">
                <label htmlFor="email">{t('contact.labels.email')}</label>
                <Input
                  className="input"
                  register={register}
                  type="email"
                  name="email"
                  error={errors.email}
                />
                <label htmlFor="message">{t('contact.labels.message')}</label>
                <TextArea
                  name="message"
                  placeholder="Your message"
                  register={register}
                  error={errors.message}
                  className="message"
                />
                <div className="button-container">
                  <Button type="submit" className="btn-send">
                    {t('contact.send')}
                  </Button>
                </div>
              </form>
            </div>
          </>
        )}
        {sendSuccess && (
          <div className="result-msg">
            <h1 className="title">{t('contact.success.title')}</h1>
            <p>{t('contact.success.text')}</p>
          </div>
        )}
        {sendError && (
          <div className="result-msg">
            <h1 className="title">{t('contact.error.title')}</h1>
            <p>{t('contact.error.text')}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
