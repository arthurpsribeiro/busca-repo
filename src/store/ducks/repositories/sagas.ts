import { call, put } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/types';

import { api } from '../../../services/api';

import { loadSuccess, loadFailure } from './actions';

export function* load(): SagaIterator {
  try {
    const response = yield call(api.get, 'repositories');

    console.log(response);

    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}
