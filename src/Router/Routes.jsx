import { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Loader } from 'shared/components';

const MatterList = lazy(() => import('../Matter/components/List'));

const Routes = () => (
  <Suspense fallback={<Loader size='large' />}>
    <Switch>
      <Route path='/' component={MatterList} />
    </Switch>
  </Suspense>
);

export default Routes;
