type RootStackParamsList = {
  WelcomeScreen: undefined;
  LoginScreen: undefined;
  RegisterScreen: undefined;
  HomeScreen: undefined;
  InitScreen: undefined;
  MenuScreen: {
    id: string;
  };
  MaterialScreen: {
    id: string;
  };
  AddMaterialScreen: {
    id: string;
  };
  CostScreen: {
    id: string;
  };
};

type InputType = {
  email: string;
  password: string;
  error: string;
};

interface RecipeType {
  id: string;
  title: string;
  thumbnail: string;
  content: string;
  serving: number;
  all_cost: number;
  fk_user_id: string;
  materials: MaterialType[];
}

type UnitType =
  | 'kg'
  | 'g'
  | 'ℓ'
  | '㎖'
  | 'cup'
  | 'Tbsp'
  | 'Tsp'
  | 'cc'
  | 'oz'
  | 'ea';
type DivideType = '주재료' | '부재료' | '소스';

interface MaterialType {
  id: string;
  name: string;
  divide: DivideType;
  unit: UnitType;
  usage: string;
  price: string;
  cost: string;
}

interface User {
  user_id: string;
  username: string;
}

interface InitType {
  title: string;
  serving: string;
  thumbnail: string;
}

interface FileType {
  type: string;
  path: string;
  name: string;
}
