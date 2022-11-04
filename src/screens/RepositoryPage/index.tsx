import React, { useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import WebView from 'react-native-webview';

import { Container } from './styles';

type params = {
  url: string;
  title: string;
};

const RepositoryPage: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const { url, title } = route.params as params;

  useEffect(() => {
    navigation.setOptions({ title });
  }, [navigation, title]);

  return (
    <Container>
      <WebView source={{ uri: url }} />
    </Container>
  );
};

export default RepositoryPage;
