import React from 'react';
import { Repository } from '../../store/ducks/repositories/types';

import {
  Container,
  Sumary,
  SumaryHeader,
  Avatar,
  RepositoryName,
  Stargazers,
  OwnerName,
} from './styles';

interface RepositoryItemProps {
  repository: Repository;
}

const RepositoryItem: React.FC<RepositoryItemProps> = ({
  repository,
}: RepositoryItemProps) => {
  return (
    <Container>
      <Avatar
        source={{
          uri: repository.owner.avatar_url,
        }}
      />
      <Sumary>
        <SumaryHeader>
          <RepositoryName>{repository.name}</RepositoryName>
          <Stargazers>{repository.stargazers_count} stars</Stargazers>
        </SumaryHeader>
        <OwnerName>{repository.owner.login}</OwnerName>
      </Sumary>
    </Container>
  );
};

export default RepositoryItem;
