/*
	[배열 관련 주요 메서드 연습 1]
	
	주어진 배열의 요소 중 null 값을 제거한 새로운 배열을 만드세요.
*/

// tip. null은 조건문에서 거짓? 참?


const homeworks = ['david.zip', null, 'maria.zip', 'tom.zip', null]

const result = []
for (const homework of homeworks) {
	if (homework) {
		result.push(homework)
	}
}
console.log(result)


/*
	[배열 관련 주요 메서드 연습 2]
	
	주어진 배열을 사용하여 아래 문자열을 완성하세요.

	'www.samsung.com/sec/buds/galaxy-buds-pro'

*/

const arr1 = ['www', 'samsung', 'com']
const arr2 = ['galaxy', 'buds', 'pro']
const arr3 = ['sec', 'buds']

const domain = arr1.join('.')		// 'www.samsung.com'
const product = arr2.join('-')	// 'galaxy-buds-pro'
arr3.unshift(domain)						// ['www.samsung.com', 'sec', 'buds']
arr3.push(product)							// ['www.samsung.com', 'sec', 'buds', 'galaxy-buds-pro']
const result = arr3.join('/')

console.log(result)
/*
	[배열 관련 주요 메서드 연습 3]

	주어진 배열의 요소 중 모든 'rainy' 요소를 'sunny'로 교체하세요
	- indexOf 메서드를 사용합니다.

	Hint.
	indexOf의 특징?

*/

const weather = ['sunny', 'sunny', 'sunny', 'sunny', 'rainy', 'rainy', 'sunny']

while (weather.indexOf('rainy') > 0) {
	weather[weather.indexOf('rainy')] = 'sunny'
}


Array.filter((element, index, array) => {
	// do something
})

const numbers = [1, 2, 3, 4, 5]
const oddNums = numbers.filter((num, index) => {
	return num % 2
})

console.log(oddNums)

