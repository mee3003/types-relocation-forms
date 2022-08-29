export interface Category {
  id: number;
  subtitle: string;
  name: string;
  sortorder: number;
}

export interface Item {
  categoryRefs: string[];
  categories: Category[];
  name: string;
  id: number;
  colli: number;
  volume: number;
  sortorder: number;
  step?: number;
}

export interface Order {
  //#region customer
  firstName: string;
  lastName: string;
  salutation: string;
  company: string;
  telNumber: string;
  email: string;
  costsAssumption: boolean;
  //#endregion

  //#region data
  isDateFix: boolean;
  date: number;
  date_from: number;
  date_to: number;
  //#endregion

  //#region from address

  from_floor: string;
  from_isAltbau: boolean;
  from_roomsNumber: string;
  from_parkingSlot: boolean;
  from_square: string;
  from_liftType: string;
  from_runningDistance: string;
  from_address: string;
  from_movementObject: string;
  from_hasLoft: boolean;
  from_packservice: boolean;
  from_demontage: boolean;
  from_stockwerke?: string[];
  from_keller: boolean;
  from_garage: boolean;
  //#endregion

  //#region to address
  to_floor: string;
  to_isAltbau: boolean;
  to_parkingSlot: boolean;
  to_liftType: string;
  to_runningDistance: string;
  to_address: string;
  to_movementObject: string;
  to_hasLoft: boolean;
  to_packservice: boolean;
  to_montage: boolean;
  to_stockwerke?: string[];
  to_keller: boolean;
  to_garage: boolean;

  //#endregion
  services: Service[];
  packings: Packing[];
  items: Item[];
  kleiderbox: number;
  boxNumber: number;
  text: string;
  images: string[];
  volume: string;
  expensive: boolean;
  expensiveText: string;
  bulky: boolean;
  bulkyItems: string;
  heavy: boolean;
  heavyItems: string;
  customItems: CustomItem[];
}

export interface Service {
  id: number;
  price: number;
  unit: string;
  name: string;
  tenant: string;
  customervisible: boolean;
  description: string;
  sortorder: number;
  colli: number;
}

export interface Packing {
  id: number;
  name: string;
  description: string;
  price: number;
  imgurl: string;
  colli: number;
  sortorder: number;
  tenant: string;
  unit: string;
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
