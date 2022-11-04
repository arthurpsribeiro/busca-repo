import { call, put, Effect } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/types';

import { api } from '../../../services/api';

import { loadSuccess, loadFailure } from './actions';

export function* load(action: Effect): SagaIterator {
  const { searchParam } = action.payload;
  try {
    const response = yield call(
      api.get,
      `/search/repositories?q=${searchParam}&per_page=10`,
    );

    yield put(loadSuccess(response.data.items));
  } catch (err) {
    yield put(loadFailure());
  }
}
