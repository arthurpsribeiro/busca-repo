import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  flex-direction: row;

  /* background-color: red; */
  /* margin-bottom: 2px; */
`;

export const Sumary = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: 10px;

  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.background_secondary};
  border-bottom-style: solid;
`;

export const SumaryHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Avatar = styled.Image`
  width: 60px;
  height: 60px;

  border-radius: 30px;
`;

export const RepositoryName = styled.Text`
  color: ${({ theme }) => theme.colors.text_primary};
  font-weight: 600;
`;

export const RepoitoryInfo = styled.Text`
  color: ${({ theme }) => theme.colors.text_secondary_dark};
`;
