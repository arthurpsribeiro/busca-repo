import React from 'react';
import { Repository } from '../../store/ducks/repositories/types';

import {
  Container,
  Sumary,
  SumaryHeader,
  Avatar,
  RepositoryName,
  RepoitoryInfo,
} from './styles';

interface RepositoryItemProps {
  repository: Repository;
  handlePress: () => void;
}

const RepositoryItem: React.FC<RepositoryItemProps> = ({
  repository,
  handlePress,
}: RepositoryItemProps) => {
  return (
    <Container onPress={handlePress}>
      <Avatar
        source={{
          uri: repository.owner.avatar_url,
        }}
      />
      <Sumary>
        <SumaryHeader>
          <RepositoryName>{repository.name}</RepositoryName>
          <RepoitoryInfo>{repository.stargazers_count} stars</RepoitoryInfo>
        </SumaryHeader>
        <RepoitoryInfo>{repository.owner.login}</RepoitoryInfo>
      </Sumary>
    </Container>
  );
};

export default RepositoryItem;
