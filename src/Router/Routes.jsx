import { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Loader } from 'shared/components';

const List = lazy(() => import('../Matter/components/List/List'));

const Routes = () => (
  <Suspense fallback={<Loader size='large' />}>
    <Switch>
      <Route path='/' component={List} />
    </Switch>
  </Suspense>
);

export default Routes;
