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
  RecipeScreen: {
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
  serving: number;
  all_price: number;
  all_cost: number;
  cost_ratio: number;
  materials: MaterialType[];
  content: string;
  user_id: string;
  username: string;
  createdAt: string;
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
  materialId: string;
  title: string;
  usage: string;
  unit: UnitType;
  divide: DivideType;
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
