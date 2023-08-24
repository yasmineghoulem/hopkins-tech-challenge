import { Button } from 'shared/components';

import './Error.scss';

export default function Error(props) {
  const { error, onRetry } = props;

  return (
    <div className='card glass short'>
      <div className='error-container'>
        <div className='error-icon'>Ups!</div>
        <div className='error-message'>{error}</div>
        {onRetry && <Button onClick={onRetry}>Erneut versuchen</Button>}
      </div>
    </div>
  );
}
