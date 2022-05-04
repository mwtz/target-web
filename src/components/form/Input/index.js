import { string, func, object } from 'prop-types';
import cn from 'classnames';

import './styles.scss';

const Input = ({
  register,
  type = 'text',
  name,
  error,
  handleFocus,
  placeholder = '',
  defaultValue = null,
}) => (
  <div className="d-flex flex-column text-center Input">
    {defaultValue ? (
      <input
        className={cn({ error })}
        type={type}
        {...register(name)}
        onFocus={handleFocus}
        placeholder={placeholder}
        value={defaultValue}
      />
    ) : (
      <input
        className={cn({ error })}
        type={type}
        {...register(name)}
        onFocus={handleFocus}
        placeholder={placeholder}
      />
    )}
    <small className="error-message">{error?.message}</small>
  </div>
);

Input.propTypes = {
  register: func.isRequired,
  error: object,
  name: string,
  type: string,
};

export default Input;
