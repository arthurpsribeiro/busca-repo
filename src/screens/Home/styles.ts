import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.xxl}px;
  font-weight: 700;
`;

export const VerticalSpacing = styled.View`
  margin: 5px 0px;
`;
