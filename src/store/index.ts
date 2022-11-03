import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { RepositoriesState } from './ducks/repositories/types';

import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

export interface ApplicationsState {
  repositories: RepositoriesState;
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationsState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export default store;
