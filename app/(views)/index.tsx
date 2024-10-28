import { Alert, Button, StatusBar, StyleSheet, Text, ToastAndroid, View } from "react-native";
import * as Sentry from "@sentry/react-native";

export default function Index() {

  const handleSentryError = () => {
    console.log('handleSentryError')
    Sentry.captureException(new Error("CapturaErrorEjemplo"));
    ToastAndroid.show("Captura de error envíada", ToastAndroid.SHORT)
  }

  return (
    <View
      style={styles.container}
    >
      <Text style={styles.textTitle}>
        Albano Test 2
      </Text>
      <Button
        title="Presione el botón para enviar un error a Sentry"
        onPress={() => {
          Alert.alert('Sentry', '¿Estás seguro que deseas envíar un error a Sentry?', [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            { text: 'Aceptar', onPress: handleSentryError },
          ]);
          Sentry.captureException(new Error("First error"));
        }}

      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  textTitle: { 
    fontSize: 20, 
    color: "black", 
    marginBottom: 20 
}
});