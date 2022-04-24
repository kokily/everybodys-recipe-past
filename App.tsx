import 'react-native-gesture-handler';
import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { Provider } from 'react-native-paper';
import { ThemeProvider } from 'react-native-elements';
import { UserContextProvider } from './src/context/UserContext';
import Navigation from './src/navigation/Navigation';

const queryClient = new QueryClient();

export default function App() {
  return (
    <UserContextProvider>
      <QueryClientProvider client={queryClient}>
        <Provider>
          <ThemeProvider>
            <Navigation />
          </ThemeProvider>
        </Provider>
      </QueryClientProvider>
    </UserContextProvider>
  );
}
