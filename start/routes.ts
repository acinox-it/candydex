/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import PokemonController from '#controllers/pokemon_controller'

router.get('/', [PokemonController, 'index']).as('home')
router.get('/pokemon/:name', [PokemonController, 'show']).as('pokemon.show')

