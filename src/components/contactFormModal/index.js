import React from 'react';
import useTranslation from 'hooks/useTranslation';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Button from 'components/common/Button';
import smileIcon from 'assets/smilies.svg';
import Input from 'components/form/Input';
import TextArea from 'components/form/textarea';
import { useSendQuestionMutation } from 'services/questions/questions';
import close from 'assets/close.svg';

import './styles.scss';

const ContactFormModal = ({ handleCloseModal = null }) => {
  const t = useTranslation();
  const [sendQuestion, { isSuccess, isError }] = useSendQuestionMutation();
  const showForm = !isSuccess && !isError;

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
    sendQuestion({ email, body });
  };

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
        {isSuccess && (
          <div className="result-msg">
            <h1 className="title">{t('contact.success.title')}</h1>
            <p>{t('contact.success.text')}</p>
          </div>
        )}
        {isError && (
          <div className="result-msg">
            <h1 className="title">{t('contact.error.title')}</h1>
            <p>{t('contact.error.text')}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactFormModal;
