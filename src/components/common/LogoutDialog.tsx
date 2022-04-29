import React from 'react';
import { Dialog, Portal } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';

interface Props {
  visible: boolean;
  closeDialog: () => void;
  onLogout: () => void;
}

const LogoutDialog: React.FC<Props> = ({ visible, closeDialog, onLogout }) => (
  <Portal>
    <Dialog
      visible={visible}
      onDismiss={closeDialog}
      style={{ alignItems: 'center' }}
    >
      <Dialog.Actions
        style={{
          width: '100%',
          backgroundColor: '#ffffff',
          justifyContent: 'center',
        }}
      >
        <Button
          onPress={onLogout}
          style={styles.button}
          labelStyle={styles.out}
        >
          로그아웃
        </Button>
      </Dialog.Actions>
    </Dialog>
  </Portal>
);

const styles = StyleSheet.create({
  button: {
    marginRight: 15,
  },
  out: {
    fontWeight: 'bold',
  },
});

export default LogoutDialog;
