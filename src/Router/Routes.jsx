import { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Loader } from 'shared/components';
import './Routes.scss';

const List = lazy(() => import('../Matter/components/List/List'));

const Routes = () => {
  const renderLoader = () => (
    <div className='suspense-loader-container'>
      <Loader size='large' card={false} />
    </div>
  );

  return (
    <Suspense fallback={renderLoader()}>
      <Switch>
        <Route path='/' component={List} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
