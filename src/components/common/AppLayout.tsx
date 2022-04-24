import React, { useState } from 'react';
import { Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Appbar } from 'react-native-paper';
import useAuth from '../../hooks/useAuth';
import LogoutDialog from './LogoutDialog';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface Props {
  children: React.ReactNode;
  title?: string;
  onBack?: () => void;
  navigation: NativeStackNavigationProp<RootStackParamsList>;
}

const AppLayout: React.FC<Props> = ({
  children,
  title,
  onBack,
  navigation,
}) => {
  const [toggle, setToggle] = useState(false);
  const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
  const { onLogout } = useAuth({ navigation });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Appbar.Header style={{ backgroundColor: '#00ab82', marginTop: 0 }}>
        {onBack && <Appbar.BackAction onPress={onBack} />}
        <Appbar.Content title={title ? title : '모두의 레시피'} />
        <Appbar.Action icon={MORE_ICON} onPress={() => setToggle(true)} />
        <LogoutDialog
          visible={toggle}
          closeDialog={() => setToggle(false)}
          onLogout={onLogout}
        />
      </Appbar.Header>
      {children}
    </SafeAreaView>
  );
};

export default AppLayout;
