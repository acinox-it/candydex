import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Pokemon extends BaseModel {
  static table = 'pokemon'

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  /**
   * Stored in DB as a string like "Grass/Poison".
   */
  @column()
  declare types: string

  @column()
  declare hp: number

  @column()
  declare attack: number

  @column()
  declare defense: number

  @column({ columnName: 'sp_attack' })
  declare spAttack: number

  @column({ columnName: 'sp_defense' })
  declare spDefense: number

  @column()
  declare speed: number

  @column.dateTime({ autoCreate: true, columnName: 'created_at' })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, columnName: 'updated_at' })
  declare updatedAt: DateTime
}
