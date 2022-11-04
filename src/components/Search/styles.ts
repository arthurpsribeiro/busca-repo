import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex-direction: row;
  padding: 5px;
  border-radius: 5px;

  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Icon = styled(Feather)`
  align-self: center;
  font-size: ${({ theme }) => theme.fontSize.base}px;
  margin-right: 5px;
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  font-size: ${({ theme }) => theme.fontSize.base}px;
  color: ${({ theme }) => theme.colors.text_primary};
`;
