import { expect } from 'chai'
import * as mocha from 'mocha'
import { GraphQLSchema, graphql, introspectionQuery } from 'graphql'
import planetsPlugin from './index'

// tslint:disable:no-unused-expression
describe('Schema Loading Tests', () => {
    let schema: GraphQLSchema
    before(async () => {
        schema = await planetsPlugin()
    })
    it('Schema can be loaded', async () => {
        expect(schema).to.exist
    })
    it('Schema has a planet type', () => {
        expect(schema.getType('Planet')).to.exist
    })
})

describe('Schema Introspection Tests', () => {
    it('Allows querying the schema for types', async () => {
        const schema = await planetsPlugin()
        const result = await graphql(schema, introspectionQuery)
        const types = result.data.__schema.types.filter(type => {
            return type.name === 'RootQuery' || type.name === 'Planet'
        })
        expect(types.length).to.equal(2)
    })
})
