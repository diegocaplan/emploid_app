import 'react-native-gesture-handler';
import RootNavigator from './src/Navigator/RootNavigator';
import { AuthProvider } from './src/Context/AuthContext';
export default function App() {
  return (
    <>
    <AuthProvider>
    <RootNavigator/>
    </AuthProvider>
    </>
  );
}


