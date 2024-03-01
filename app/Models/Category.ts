import { BaseModel, HasManyThrough, column, hasManyThrough } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import Periodical from './Periodical'
import PeriodicalCategory from './PeriodicalCategory'

export default class Category extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  // prima modello e poi tabella pivot
  @hasManyThrough([() => Periodical, () => PeriodicalCategory])
  public periodicals: HasManyThrough<typeof Periodical>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
