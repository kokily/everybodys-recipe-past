import React from 'react';
import { Dialog, Portal } from 'react-native-paper';
import { Button } from 'react-native-elements';
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
          backgroundColor: '#9cc5b7',
          justifyContent: 'center',
        }}
      >
        <Button title="취소" onPress={closeDialog} style={styles.button} />
        <Button title="로그아웃" onPress={onLogout} style={styles.button} />
      </Dialog.Actions>
    </Dialog>
  </Portal>
);

const styles = StyleSheet.create({
  button: {
    marginRight: 15,
  },
});

export default LogoutDialog;
