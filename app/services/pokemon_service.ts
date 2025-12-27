import Pokemon from '#models/pokemon'

export class PokemonService {
  /**
   * Normalize a type string for CSS classes (e.g. "Grass" -> "grass").
   */
  private normalizeType(type: string): string {
    return type.trim().toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
  }

  /**
   * Split the raw types string from DB into structured data.
   */
  private parseTypes(types: string) {
    const parts = String(types)
      .split('/')
      .map((t) => t.trim())
      .filter(Boolean)

    const primary = parts[0] || 'Unknown'
    const secondary = parts[1] || null

    return {
      primary,
      secondary,
      primaryKey: this.normalizeType(primary),
      secondaryKey: secondary ? this.normalizeType(secondary) : null,
    }
  }

  /**
   * Generate the sprite URL for a given pokemon name.
   */
  private getSpriteUrl(name: string): string {
    return `pokemons/${name}.svg`
  }

  /**
   * Transform a database model instance into a frontend-ready object.
   */
  public transform(pokemon: Pokemon) {
    const types = this.parseTypes(pokemon.types)

    return {
      id: pokemon.id,
      name: pokemon.name,
      types,
      stats: {
        hp: pokemon.hp,
        attack: pokemon.attack,
        defense: pokemon.defense,
        speed: pokemon.speed,
      },
      spriteUrl: this.getSpriteUrl(pokemon.name),
    }
  }

  /**
   * Fetch all pokemons with optional filters.
   */
  public async getAll(filters: { search?: string; type?: string } = {}) {
    const query = Pokemon.query().orderBy('id', 'asc')

    if (filters.search) {
      query.where('name', 'like', `%${filters.search}%`)
    }

    if (filters.type) {
      query.where('types', 'like', `%${filters.type}%`)
    }

    const pokemons = await query
    return pokemons.map((p) => this.transform(p))
  }

  /**
   * Find a single pokemon by name.
   */
  public async getByName(name: string) {
    const pokemon = await Pokemon.findByOrFail('name', name)
    return this.transform(pokemon)
  }

  /**
   * Get navigation links (next/prev) for a pokemon.
   */
  public async getNavigation(currentId: number) {
    const next = await Pokemon.query().where('id', '>', currentId).orderBy('id', 'asc').first()
    const prev = await Pokemon.query().where('id', '<', currentId).orderBy('id', 'desc').first()

    return {
      next: next ? { name: next.name } : null,
      prev: prev ? { name: prev.name } : null,
    }
  }
}
