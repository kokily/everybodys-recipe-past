import AsyncStorage from '@react-native-async-storage/async-storage';

export function getCookie(cname: string, cookie: string) {
  let name = cname + '=';
  let decodedCookie = decodeURIComponent(unescape(cookie));
  let ca = decodedCookie.split(';');

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }

  return '';
}

export async function setCookies(cookies: string[]) {
  await AsyncStorage.setItem(
    'access_token',
    // @ts-ignore
    getCookie('access_token', cookies)
  );
  await AsyncStorage.setItem(
    'refresh_token',
    //@ts-ignore
    getCookie('refresh_token', cookies)
  );
}

export async function removeCookies() {
  await AsyncStorage.removeItem('access_token');
  await AsyncStorage.removeItem('refresh_token');
}
