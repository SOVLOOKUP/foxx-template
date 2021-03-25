import { Attribute, Entity, Index, Document } from 'type-arango'
// https://joi.dev/api/?v=17.4.0#stringemailoptions

@Document()
export class User extends Entity {
    @Index("hash", { unique: true })
    @Attribute()
    email!: string

    @Attribute()
    username!: string

    @Attribute()
    password!: string
}