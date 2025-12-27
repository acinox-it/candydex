import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Pokemon from '#models/pokemon'

export default class extends BaseSeeder {
  async run() {
    await Pokemon.createMany([
      { name: 'Bulbasaur', types: 'Grass/Poison', hp: 45, attack: 49, defense: 49, sp_attack: 65, sp_defense: 65, speed: 45 },
      { name: 'Charmander', types: 'Fire', hp: 39, attack: 52, defense: 43, sp_attack: 60, sp_defense: 50, speed: 65 },
      { name: 'Squirtle', types: 'Water', hp: 44, attack: 48, defense: 65, sp_attack: 50, sp_defense: 64, speed: 43 },
      { name: 'Caterpie', types: 'Bug', hp: 45, attack: 52, defense: 43, sp_attack: 60, sp_defense: 50, speed: 35 },
      { name: 'Weedle', types: 'Bug/Poison', hp: 40, attack: 35, defense: 30, sp_attack: 20, sp_defense: 20, speed: 25 },
      { name: 'Rattata', types: 'Normal', hp: 30, attack: 56, defense: 35, sp_attack: 25, sp_defense: 35, speed: 72 },
      { name: 'Pikachu', types: 'Electric', hp: 35, attack: 55, defense: 40, sp_attack: 50, sp_defense: 50, speed: 90 },
      { name: 'Zubat', types: 'Poison/Flying', hp: 40, attack: 45, defense: 35, sp_attack: 15, sp_defense: 30, speed: 55 },
      { name: 'Meowth', types: 'Normal', hp: 40, attack: 45, defense: 41, sp_attack: 40, sp_defense: 37, speed: 90 },
      { name: 'Mankey', types: 'Fighting', hp: 40, attack: 80, defense: 35, sp_attack: 35, sp_defense: 31, speed: 70 },
      { name: 'Abra', types: 'Psychic', hp: 25, attack: 20, defense: 15, sp_attack: 105, sp_defense: 55, speed: 90 },
      { name: 'Eevee', types: 'Normal', hp: 55, attack: 55, defense: 50, sp_attack: 45, sp_defense: 65, speed: 55 },
      { name: 'Dratini', types: 'Dragon', hp: 41, attack: 64, defense: 45, sp_attack: 50, sp_defense: 45, speed: 50 },
      { name: 'Mew', types: 'Psychic', hp: 100, attack: 100, defense: 100, sp_attack: 100, sp_defense: 100, speed: 100 },
    ])
  }
}