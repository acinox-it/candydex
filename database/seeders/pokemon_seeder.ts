import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Pokemon from '#models/pokemon'

export default class extends BaseSeeder {
  async run() {
    await Pokemon.createMany([
      { name: 'Bulbasaur', types: 'Grass/Poison', hp: 45, attack: 49, defense: 49, spAttack: 65, spDefense: 65, speed: 45 },
      { name: 'Charmander', types: 'Fire', hp: 39, attack: 52, defense: 43, spAttack: 60, spDefense: 50, speed: 65 },
      { name: 'Squirtle', types: 'Water', hp: 44, attack: 48, defense: 65, spAttack: 50, spDefense: 64, speed: 43 },
      { name: 'Caterpie', types: 'Bug', hp: 45, attack: 52, defense: 43, spAttack: 60, spDefense: 50, speed: 35 },
      { name: 'Weedle', types: 'Bug/Poison', hp: 40, attack: 35, defense: 30, spAttack: 20, spDefense: 20, speed: 25 },
      { name: 'Rattata', types: 'Normal', hp: 30, attack: 56, defense: 35, spAttack: 25, spDefense: 35, speed: 72 },
      { name: 'Pikachu', types: 'Electric', hp: 35, attack: 55, defense: 40, spAttack: 50, spDefense: 50, speed: 90 },
      { name: 'Zubat', types: 'Poison/Flying', hp: 40, attack: 45, defense: 35, spAttack: 15, spDefense: 30, speed: 55 },
      { name: 'Meowth', types: 'Normal', hp: 40, attack: 45, defense: 41, spAttack: 40, spDefense: 37, speed: 90 },
      { name: 'Mankey', types: 'Fighting', hp: 40, attack: 80, defense: 35, spAttack: 35, spDefense: 31, speed: 70 },
      { name: 'Abra', types: 'Psychic', hp: 25, attack: 20, defense: 15, spAttack: 105, spDefense: 55, speed: 90 },
      { name: 'Eevee', types: 'Normal', hp: 55, attack: 55, defense: 50, spAttack: 45, spDefense: 65, speed: 55 },
      { name: 'Dratini', types: 'Dragon', hp: 41, attack: 64, defense: 45, spAttack: 50, spDefense: 45, speed: 50 },
      { name: 'Mew', types: 'Psychic', hp: 100, attack: 100, defense: 100, spAttack: 100, spDefense: 100, speed: 100 },
    ])
  }
}