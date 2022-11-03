import { all, takeLatest } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/types';

import { RepositoriesTypes } from './repositories/types';
import { load } from './repositories/sagas';

export default function* rootSaga(): SagaIterator {
  return yield all([takeLatest(RepositoriesTypes.LOAD_REQUEST, load)]);
}
