import { string, func } from 'prop-types';
import cn from 'classnames';

import './styles.scss';

const Select = ({ register, options, name, error, placeholder, className = '', ...rest }) => (
  <div className="select">
    <select {...register(name)} {...rest} className={cn(className)}>
      <option value="" disabled selected className="placeholder">
        {placeholder}
      </option>
      {options.map((value, i) => {
        console.log(value);
        return (
          <option key={i} value={value.topic ? value.topic.id : value}>
            {value.topic ? value.topic.label : value}
          </option>
        );
      })}
    </select>
    <small className="error-message">{error?.message}</small>
  </div>
);

Select.propTypes = {
  register: func.isRequired,
  name: string,
  type: string,
};

export default Select;
