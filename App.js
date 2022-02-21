import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, Box, Button } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <Box>Hello world</Box>
      <Button>
        Click me!
      </Button>
    </NativeBaseProvider>
  );
}