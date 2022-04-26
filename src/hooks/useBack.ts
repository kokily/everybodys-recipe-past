import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamsList>;
}

function useBack({ navigation }: Props) {
  const onBack = () => {
    navigation.goBack();
  };

  return {
    onBack,
  };
}

export default useBack;
