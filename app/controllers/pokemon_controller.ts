import type { HttpContext } from '@adonisjs/core/http'
import { PokemonService } from '#services/pokemon_service'

export default class PokemonController {
  private service = new PokemonService()

  async index({ inertia, request }: HttpContext) {
    const search = request.input('search')
    const type = request.input('type')

    const pokemons = await this.service.getAll({ search, type })

    return inertia.render('home', {
      pokemons,
      filters: { search, type },
    })
  }

  async show({ params, inertia }: HttpContext) {
    const pokemon = await this.service.getByName(params.name)
    const navigation = await this.service.getNavigation(pokemon.id)

    return inertia.render('details', {
      pokemon,
      navigation,
    })
  }
}
