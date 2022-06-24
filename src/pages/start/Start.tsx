import React from 'react'

export const Start = () => {
  const message: string = 'Hello World'
  const user = { name: 'Diego', last: 'Mota', age: 40}
  const num: number = 0
  const names = ['Diego', 'Rafael', 'Robson']
  
  const deliverMessageTo = (name: string, message: string,  last?: string) => {
    return `${message}, I am ${name} ${last === undefined ? '' : last.toUpperCase()}`
  }
  
  const displayDay = (date: Date) => {
    return `Today is ${date.toDateString()}`
  }
  
const greetPeople = (people: string | string[]) => {
  if (Array.isArray(people)) { return `Hello ${people.map(person => person).join(', ')}` }
  return `Hello ${people}`
}

  const displayNum = (number: number) => {
    return `The number is ${number}`;
  }

  const sample = (array: string[]) => {
    return array[Math.floor(Math.random() * array.length)];
  }

  const displayRandomName = (names: string[]) => {
    return sample(names)
  }

  const printCoordinates = (coordinates: {x: number, y: number}) => {
    return `The coordinates are x: ${coordinates.x}, y: ${coordinates.y}`
  }

  const takeStringsAndNumbers = (value: string | number) => {
    return typeof value === 'string' ? value.toUpperCase() : value.toFixed(2)
  }

  return (
    <div>
      <h1>Start</h1>
      <p>{deliverMessageTo(user.name, message)}</p>
      <p>{deliverMessageTo('Rafael', message, 'Ruiz')}</p>
      <p>{}</p>
      <p>{displayDay(new Date())}</p>
      <p>{displayNum(num)}</p>
      <p>{displayRandomName(names)}</p>
      <p>{printCoordinates({x: 1, y: 2})}</p>
      <p>{takeStringsAndNumbers(num)}</p>
      <p>{takeStringsAndNumbers('Hello')}</p>
      <p>{greetPeople(names)}</p>
      <p>{greetPeople(displayRandomName(names))}</p>
    </div>
  )
}
