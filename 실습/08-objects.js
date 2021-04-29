/*
  [Object 요소 접근 연습]
  
	주어진 객체에서 items의 첫번째 아이템의 name을 result 변수에 할당하세요.
*/

const data = {
  id: 42,
  name: 'gwangju',
  greeting: function() { // : function은 지워버릴 수 있음
    // this: 메서드가 속한 객체의 속성을 참조할 때 사용
    console.log(`안녕하세요, ${this.name}님!`)
  },
  items: [
    {
      id: 1,
      name: 'foo',
    },
    {
      id: 2,
      name: 'bar',
    },
  ],
}

const result = data.items[0].name
const { id, name } = data
data.greeting()
// console.log( name, id)
// console.log(result)


/*
[Object 축약 문법]

아래 변수들을 속성으로 가지는 Object를 축약문법을 활용하여 작성하세요.
*/

const username = 'hailey'
const contact = '010-1234-5678'
const personInfo = {
  username,
  contact,
}
console.log(personInfo)

/*
[Object Destructuring]

주어진 함수를 Object 축약 문법과, destructuring을 사용하여 재작성하세요.
*/

const users = [
  {
    name: 'hailey',
    contact: '010-1234-5678',
  },
  {
    name: 'paul',
    contact: '010-5678-1234',
  },
]

function saveUserData (users) {
  const userData = users.map(( { name, contact }, id) => { // here (destructing assignment)
    return { 
      id,
      name,  // here (속성명 축약)
      contact, // here (속성명 축약)
    }
  })

  return userData
}

console.log(saveUserData(users))