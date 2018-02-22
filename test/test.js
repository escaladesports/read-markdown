import { expect } from 'chai'
import readMarkdown from '../src'

describe('readMarkdown', () => {
	it('Should parse markdown files', async () => {
		const contents = await readMarkdown(`./markdown/**/*.md`)
		expect(contents).to.not.be.empty
		expect(contents[`./markdown/fish-stick.md`].data.title).to.equal(`Fish Stick`)
	})
})