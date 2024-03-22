export interface OdpowiedzBazowa {
  sukces: boolean;
  bledy: Blad[];
  idZapytania: string;
}

export interface Blad {
  kodBledu: number;
  opisBledu: string;
}

export interface SortEvent {
  active: string;
  direction: string
}
