import { expect } from 'chai'
import * as mocha from 'mocha'
import { GraphQLSchema, graphql, introspectionQuery } from 'graphql'
import { addResolveFunctionsToSchema } from 'graphql-tools'
import planetsPlugin from './index'

const pluginOptions = {
    apiHost: 'http://swapi.co/api',
}

// tslint:disable:no-unused-expression
describe('Schema Loading Tests', () => {
    let schema: GraphQLSchema
    before(async () => {
        const registration = await planetsPlugin(pluginOptions)
        schema = registration.schema
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
        const { schema } = await planetsPlugin(pluginOptions)
        const result = await graphql(schema, introspectionQuery)
        const types = result.data.__schema.types.filter(type => {
            return type.name === 'RootQuery' || type.name === 'Planet'
        })
        expect(types.length).to.equal(2)
    })
})

describe('Query Execution Tests', () => {
    let schema: GraphQLSchema
    before(async () => {
        const registration = await planetsPlugin(pluginOptions)
        schema = registration.schema
        addResolveFunctionsToSchema(schema, registration.resolvers)
    })
    it('Allows querying for a single plant', async () => {
        const results = await graphql(schema, '{ planet(planetID: 1) { name }}')
        expect(results).to.exist
        expect(results.data.planet.name).to.equal('Tatooine')
    }).timeout(5000)
})
