import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import { ApplicationsState } from '../../store';
import Search from '../../components/Search';
import { Container, Title, VerticalSpacing } from './styles';
import RepositoryItem from '../../components/RepositoryItem';
import { useNavigation } from '@react-navigation/native';
import ListSeaparator from '../../components/RepositoryList/ListSeaparator';
import EmptyComponent from '../../components/RepositoryList/EmptyComponent';
import Loading from '../../components/RepositoryList/Loading';

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
        <Loading />
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
          ListEmptyComponent={EmptyComponent}
          ItemSeparatorComponent={ListSeaparator}
          showsVerticalScrollIndicator={false}
        />
      )}
    </Container>
  );
};

export default Home;
