import { Stack } from 'expo-router';
import * as Sentry from '@sentry/react-native';


const RootLayout = () => {

  return (
    <Stack initialRouteName='index' screenOptions={{ headerShown: false }}>
      <Stack.Screen 
        name="index"
        options={{ headerShown: false }} 
      />
    </Stack>
  );
}

export default Sentry.wrap(RootLayout);