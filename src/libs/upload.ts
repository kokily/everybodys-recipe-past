import { Alert } from 'react-native';

async function uploadImage(uri: string) {
  const formData = new FormData();

  formData.append('file', {
    // @ts-ignore
    uri,
    type: `image/${uri.split('.')[3]}`,
    name: `image.${uri.split('.')[3]}`,
  });

  const response = await fetch('https://api.dnkdream.com/api/upload', {
    method: 'POST',
    body: formData,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  if (!response) {
    Alert.alert('에러!');
    return;
  } else {
    const data = await response.json();
    return data.url;
  }
}

export default uploadImage;
