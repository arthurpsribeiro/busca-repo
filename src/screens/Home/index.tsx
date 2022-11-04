import React from 'react';
import { ActivityIndicator, FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';

import { ApplicationsState } from '../../store';
import Search from '../../components/Search';
import { Container, Title, VerticalSpacing } from './styles';

const Home: React.FC = () => {
  const repositories = useSelector(
    (state: ApplicationsState) => state.repositories,
  );

  const { data: repositoriesData, loading: repositoriesLoading } = repositories;

  return (
    <Container>
      <Title>Repositórios</Title>
      <VerticalSpacing />
      <Search />
      <VerticalSpacing />

      {repositoriesLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={repositoriesData}
          renderItem={({ item }) => <Text>{item.name}</Text>}
          ListEmptyComponent={() => <Text>Sem resultados para exibir</Text>}
        />
      )}
    </Container>
  );
};

export default Home;
