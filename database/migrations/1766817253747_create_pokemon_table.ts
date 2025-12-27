import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'pokemon'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name', 100).notNullable()
      table.string('types', 100).notNullable()
      table.integer('hp').notNullable()
      table.integer('attack').notNullable()
      table.integer('defense').notNullable()
      table.integer('sp_attack').notNullable()
      table.integer('sp_defense').notNullable()
      table.integer('speed').notNullable()
      
      table.timestamp('created_at')
      table.timestamp('updated_at')

      table.index(['name'], 'idx_name')
      table.index(['types'], 'idx_types')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}