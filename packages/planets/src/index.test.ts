require('replayer')

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
        schema = await planetsPlugin(pluginOptions)
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
        const schema = await planetsPlugin(pluginOptions)
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
        schema = await planetsPlugin(pluginOptions)
    })
    it('Allows querying for a single planet', async () => {
        const results = await graphql(schema, '{ planet(planetID: 1) { name }}')
        expect(results).to.exist
        expect(results.data.planet.name).to.equal('Tatooine')
    }).timeout(5000)
    it('Allows querying for a all planets', async () => {
        const results = await graphql(schema, '{ allPlanets { name }}')
        expect(results).to.exist
        expect(results.data.allPlanets.length).to.equal(61)
        expect(results.data.allPlanets[2].name).to.equal('Hoth')
    }).timeout(5000)
})
