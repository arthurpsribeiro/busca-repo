import React from 'react';
import { ActivityIndicator, FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';

import { ApplicationsState } from '../../store';
import Search from '../../components/Search';
import { Container, Title, VerticalSpacing } from './styles';
import RepositoryItem from '../../components/RepositoryItem';
import { useNavigation } from '@react-navigation/native';

const Home: React.FC = () => {
  const repositories = useSelector(
    (state: ApplicationsState) => state.repositories,
  );

  const { data: repositoriesData, loading: repositoriesLoading } = repositories;

  const navigation = useNavigation();

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
          renderItem={({ item }) => (
            <RepositoryItem
              repository={item}
              handlePress={() =>
                navigation.navigate('RepositoryPage', {
                  url: item.html_url,
                  title: item.name,
                })
              }
            />
          )}
          ListEmptyComponent={() => <Text>Sem resultados para exibir</Text>}
          ItemSeparatorComponent={VerticalSpacing}
        />
      )}
    </Container>
  );
};

export default Home;
