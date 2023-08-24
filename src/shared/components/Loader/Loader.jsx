import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import './Loader.scss';

export default function Loader(props) {
  const { size = 'default', card = true } = props;

  const renderLoader = () => (
    <div className='loader-container'>
      <Spin
        className='loader'
        indicator={<LoadingOutlined spin />}
        size={size}
      />
    </div>
  );

  return card ? (
    <div className='card glass short'>{renderLoader()}</div>
  ) : (
    renderLoader()
  );
}
