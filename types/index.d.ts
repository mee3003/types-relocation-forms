export interface Customer {
  firstName: string;
  lastName: string;
  salutation: string;
  company: string;
  telNumber: string;
  email: string;
  costsAssumption: boolean;
}

export interface Category {
  id: string;
  subtitle: string;
  name: string;
  sortorder: number;
}

export interface Item {
  categoryRefs: Category[];
  categories: string[];
  name: string;
  id: number;
  colli: number;
  volume: number;
  sortorder: number;
  step?: number;
}

export interface Order {
  customer: Customer;
  date: any;
  date_from: any;
  date_to: any;
  isDateFix: boolean;
  from: Address;
  to: Address;
  services: Service[];
  packing: Packing[];
  items: Item[];
  kleiderbox: number;
  boxNumber: number;
  text: string;
  images: string[];
  volume: string;
  expensive: boolean;
  expensiveText: string;
  bulky: boolean;
  bulkyItems: CustomItem[];
  heavy: boolean;
  heavyItems: CustomItem[];
  customItems: CustomItem[];
}

export interface Service {
  id: number;
  name: string;
  description: string;
  price: string;
  colli: number;
  unit: string;
  sortorder: number;
}

export interface Packing {
  id: number;
  name: string;
  description: string;
  price: string;
  colli: number;
  imgUrl: string;
  sortorder: number;
  unit: string;
}

export interface Address {
  floor: string;
  isAltbau: boolean;
  roomsNumber: string;
  parkingSlot: boolean;
  area: string;
  personsNumber?: string;
  liftType: string;
  runningDistance: string;
  address: string;
  movementObject?: string;
  hasLoft: boolean;
  packservice: boolean;
  demontage?: boolean;
  montage?: boolean;
  stockwerke?: string[];
  keller: boolean;
  garage: boolean;
}

export interface CustomItem {
  name: string;
  weight: number;
  breite: number;
  tiefe: number;
  hoehe: number;
  colli: number;
  itemVolume: number;
}
