import React from 'react';
import { useDispatch } from 'react-redux';
import * as RepositoriesActions from '../../store/ducks/repositories/actions';

import { Container, SearchInput, Icon } from './styles';

const Search: React.FC = () => {
  const dispatch = useDispatch();

  const handleSearch = (searchParam: string) => {
    dispatch(RepositoriesActions.loadRequest(searchParam));
  };

  return (
    <Container>
      <Icon name="search" />
      <SearchInput
        onEndEditing={(event: { nativeEvent: { text: string } }) => {
          const searchParam = event.nativeEvent.text;
          handleSearch(searchParam);
        }}
        placeholder="Busca por repositórios"
      />
    </Container>
  );
};

export default Search;
