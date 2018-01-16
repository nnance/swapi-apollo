import { expect } from 'chai'
import * as mocha from 'mocha'
import { DocumentNode, ObjectTypeDefinitionNode } from 'graphql'
import planetsPlugin from './index'

// tslint:disable:no-unused-expression
describe.only('Loading Types Document Tests', () => {
    let doc: DocumentNode
    before(async () => {
        const gqlModule = await planetsPlugin()
        doc = gqlModule.document
    })
    it('Document can be loaded', async () => {
        expect(doc).to.exist
    })
    it('Document has a planet type', () => {
        expect(doc.definitions.find(_ => (_ as ObjectTypeDefinitionNode).name.value === 'Planet')).to.exist
    })
})
