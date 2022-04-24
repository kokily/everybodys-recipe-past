import { Alert } from 'react-native';

async function uploadImage(uri: string) {
  const formData = new FormData();
  formData.append('file', uri);

  const response = await fetch('https://api.dnkdream.com/api/upload', {
    method: 'post',
    body: formData,
  });

  if (!response) {
    Alert.alert('Upload Error');
    return;
  }

  const data = await response.json();

  return data.key;
}

export default uploadImage;
