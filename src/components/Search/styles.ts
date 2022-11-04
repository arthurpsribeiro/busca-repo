import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
// import theme from '../../styles/theme';

export const Container = styled.View`
  flex-direction: row;
  padding: 10px;
  border-radius: 10px;

  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Icon = styled(Feather)`
  align-self: center;
  font-size: ${({ theme }) => theme.fontSize.base}px;
  margin-right: 5px;
  color: ${({ theme }) => theme.colors.text_secondary};
`;

export const SearchInput = styled.TextInput.attrs({
  placeholderTextColor: '#848488',
})`
  flex: 1;
  font-size: ${({ theme }) => theme.fontSize.base}px;
  color: ${({ theme }) => theme.colors.text_primary};
`;
