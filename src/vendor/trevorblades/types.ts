export interface Entity {
    code: string,
    name: string
}

export interface Continent extends Entity {}

export interface EntityWithNativeName extends Entity {
    native: string
}

export interface Language extends EntityWithNativeName {}
export interface State extends Entity {}

export interface Country extends EntityWithNativeName {
    capital: string,
    currency: string,
    emoji: string,
    languages: Language[],
    phone: string,
    states: State[],
    continent: Continent
}