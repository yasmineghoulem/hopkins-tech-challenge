import { Radio } from 'antd';

import './RadioGroup.scss';

export default function RadioGroup({
  options = [],
  value,
  onChange = () => {},
}) {
  return (
    <Radio.Group
      className='radio-group'
      optionType='button'
      options={options}
      value={value}
      onChange={onChange}
    />
  );
}
