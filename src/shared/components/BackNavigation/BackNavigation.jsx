import { useHistory } from 'react-router-dom';
import { LeftOutlined } from '@ant-design/icons';

import './BackNavigation.scss';

export default function BackNavigation({ onGoBack }) {
  let history = useHistory();
  const handleGoBack = () => (onGoBack ? onGoBack() : history.goBack());
  return (
    <div className='navigate-back' onClick={handleGoBack}>
      <LeftOutlined />
      <span>Zurück</span>
    </div>
  );
}
