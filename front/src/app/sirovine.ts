export interface Sirovine {
    id: number,
    naziv: string,
    kolicina: number,
    min_kolicina: number,
    cijena: number,
    jedinica_mjere: string,
    da_li_se_koristi: boolean,
    dobavljaci_id: number,
    dobavljaci_naziv: string,
}