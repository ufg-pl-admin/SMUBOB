import {OdpowiedzBazowa} from "@common/model/common";

export interface AnonimoweEZawiadomienieRequest {
  nrRejestracyjny: string;
  nrVin: string;
  marka: string;
  model: string;
  imieWlascicielaPojazdu: string;
  nazwiskoWlascicielaPojazdu: string;
  nazwaFirmyWlascicielaPojazdu: string;
  peselWlascicielaPojazdu: string;
  imieZglaszajacego: string;
  nazwiskoZglaszajacego: string;
  informacjeDodatkowe: string;
  response: string;
}

export interface AnonimoweEZawiadomienieResponse {
  uuidZawiadomienia: string,
  numerZawiadomienia: string
}



export interface AnonimoweEZawiadomienieCheckResponse {
  jestUbezpieczony: boolean;
  ezawiadomienieIstnieje: boolean;
}



export interface PobierzStatusEzawiadomieniaRequest {
  identyfikatorEZawiadomienia: string;
  nrRejestracyjny: string;
  nrVin: string;
}

export interface SprawdzStatusEzawiadomieniaResponse {
  odpowiedzBazowa: OdpowiedzBazowa;
  statusEZawiadomienia: string;
}
