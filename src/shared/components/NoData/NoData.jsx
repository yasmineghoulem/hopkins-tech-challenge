import { Empty } from 'antd';

import './NoData.scss';

export default function NoData(props) {
  const {
    className,
    label,
    size = 'normal', // xsmall, small, normal, large, xlarge
  } = props;

  return (
    <div className='card glass short'>
      <div
        className={`no-data-container ${size} ${className ? className : ''}`}
      >
        <span className='image'>{Empty.PRESENTED_IMAGE_SIMPLE}</span>
        <div className='label'>{label}</div>
      </div>
    </div>
  );
}
