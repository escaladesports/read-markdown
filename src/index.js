
console.log('Module loaded')

export default function(){
	const def = {
		test: '123'
	}
	const obj = {
		anotherTest: 'abc',
		...def,
	}
	return obj
}