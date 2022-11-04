import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;
export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  color: ${({ theme }) => theme.colors.text_secondary};
`;
