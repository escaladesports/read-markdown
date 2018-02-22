import { readFile } from 'fs-extra'
import matter from 'gray-matter'
import glob from 'globby'
import { markdown } from 'markdown'

const { toHTML } = markdown

async function readMarkdown(path, options){
	options = {
		results: 'object',
		html: true,
		...options
	}
	let paths = await glob(path)
	let promises = paths.map(path => {
		return readFile(path, 'utf8')
	})
	let contents = await Promise.all(promises)
	let parsed = contents.map(str => {
		let data = matter(str)
		if(options.html && data.content){
			data.content = toHTML(data.content)
		}
		return data
	})
	if(options.results === 'array'){
		return parsed
	}
	let obj = {}
	paths.forEach((path, key) => {
		obj[path] = parsed[key]
	})
	return obj
}

export default readMarkdown