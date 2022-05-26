import cn from 'classnames';

import './styles.scss';

const TextArea = ({ register, name, error, placeholder, className = '' }) => (
  <div className="text-area">
    <textarea className={cn(className, { error })} placeholder={placeholder} {...register(name)} />
    <small className="error-message">{error?.message}</small>
  </div>
);
export default TextArea;
