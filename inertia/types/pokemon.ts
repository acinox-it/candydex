export interface Pokemon {
  id: number
  name: string
  types: {
    primary: string
    secondary: string | null
    primaryKey: string
    secondaryKey: string | null
  }
  stats: {
    hp: number
    attack: number
    defense: number
    speed: number
  }
  spriteUrl: string
}

export interface NavigationLink {
  name: string
}

export interface Navigation {
  next: NavigationLink | null
  prev: NavigationLink | null
}

export interface Filters {
  search: string
  type: string
}
