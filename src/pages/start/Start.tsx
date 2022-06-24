import React from 'react'

type Person = { name: string, last: string, age: number }
const person: Person = { name: 'Diego', last: 'Mota', age: 40}
interface User { name: string, last: string, age: number }
const user: User = { name: 'Diego', last: 'Mota', age: 40 }

type Fish = { swim: () => "I swim" }
const fish: Fish = { swim: () => "I swim" }
type Bird = { fly: () => "I fly" }
const bird: Bird = { fly: () => "I fly" }
type Human = { swim: () => "I swim", fly: () => "I fly" }
const human: Human = { swim: () => "I swim", fly: () => "I fly" }

interface Circle { kind: 'circle', radius: number }
interface Square { kind: 'square', sideLength: number }
interface Rectangle { kind: 'rectangle', height: number, width: number }
type Shape = Circle | Square | Rectangle
const circle = { kind: 'circle', radius: 10 } as const
const square = { kind: 'square', sideLength: 10 } as const
const rectangle = { kind: 'rectangle', height: 10, width: 10 } as const

export const Start = () => {
  const message: string = 'Hello World'
  const number: number = 0
  const names = ['Diego', 'Rafael', 'Gabriel']
  //const hash = { key1: 'value1', key2: 'value2' }
  
  const string_1: string = 'Hello World'
  const string_2 = 'Hello World' as string
  //const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement
  
  interface Options { width: number, height: number }

  const getPersonalData = (person: Person) => {
    return `${person.last}, ${person.name}: ${person.age}`
  }
  
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

  const displayNumber = (number: number) => {
    return `The number is ${number}`;
  }

  const getSampleFromArray = (array: string[]) => {
    return array[Math.floor(Math.random() * array.length)];
  }

  const displayRandomName = (names: string[]) => {
    return getSampleFromArray(names)
  }

  const printCoordinates = (coordinates: {x: number, y: number}) => {
    return `The coordinates are x: ${coordinates.x}, y: ${coordinates.y}`
  }

  const takeStringsAndNumbers = (value: string | number) => {
    return typeof value === 'string' ? value.toUpperCase() : value.toFixed(2)
  }

  const displayCardinalDirection = (direction: 'N' | 'S' | 'E' | 'W') => {
    return `The direction is ${direction}`
  }

  const configure = (options: Options | 'auto' ) => {
    return options === 'auto' ? 'auto' : `width: ${options.width}, height: ${options.height}`
  }

  const nullTest = (thing: string | null | undefined) => {
    return thing === null ? 'null' : thing === undefined ? 'undefined' : thing
  }

  const nil = null
  const nil2 = nil!
  const undef = undefined
  const undef2 = undef!

  const getUsersOnLineMessage = (numUsersOnLine: number) => {
    if (numUsersOnLine) {
      if (numUsersOnLine > 1) {
        return `There are ${numUsersOnLine} users online`
      }
      return `There is ${numUsersOnLine} user online`
    }
    return 'There are no users online'
  }

  const true_boolean = !!'Hello World'
  const false_boolean = !'Hello World'

  const move = (animal: Fish | Bird | Human) => {
    if ('swim' in animal && 'fly' in animal) {
      return 'I swim and fly'
    } else if ('swim' in animal) {
      return 'I swim'
    } else 
    if ('fly' in animal) {
      return 'I fly'
    }
  }
  
  const isFish = (pet: Fish | Bird | Human): pet is Fish => {
    return (pet as Fish).swim !== undefined
  }

  const testInstanceOf = (value: Date | string) => {
    if (value instanceof Date) {
      return 'It is a date'
    } else {
      return 'It is a string'
    }
  }
  
  const numString = Math.random() > 0.5 ? 0 : 'Hello World'
  const numString2 = Math.random() > 0.5 ? 0 : 'Hello World'
  const displayType = (value: number | string): number | string  => {
    return `The value is ${typeof value}`
  }

  const getArea = (shape: Shape) => {
    if (shape.kind === 'circle') {
      return Math.PI * Math.pow(shape.radius!, 2)
    } else if (shape.kind === 'square') {
      return Math.pow(shape.sideLength!, 2)
    } else if (shape.kind === 'rectangle') {
      return shape.height * shape.width
    }
  }

  return (
    <div>
      <h1>Start</h1>
      <p>{deliverMessageTo(user.name, message)}</p>
      <p>{deliverMessageTo('Rafael', message, 'Ruiz')}</p>
      <p>{displayDay(new Date())}</p>
      <p>{displayNumber(number)}</p>
      <p>{displayRandomName(names)}</p>
      <p>{printCoordinates({x: 1, y: 2})}</p>
      <p>{takeStringsAndNumbers(number)}</p>
      <p>{takeStringsAndNumbers('Hello')}</p>
      <p>{greetPeople(names)}</p>
      <p>{greetPeople(displayRandomName(names))}</p>
      <p>{getPersonalData(person)}</p>
      <p>{string_1}</p>
      <p>{string_2}</p>
      {/* <p>{hash}</p> */}
      <p>{displayCardinalDirection('N')}</p>
      <p>{configure('auto')}</p>
      <p>{configure({width: 100, height: 200})}</p>
      <p>null {nullTest(null)}</p>
      <p>Hello {nullTest('Hello')}</p>
      <p>undefine2 {nullTest(undef2)}</p>
      <p>nil2 {nullTest(nil2)}</p>
      <p>{getUsersOnLineMessage(0)}</p>
      <p>{getUsersOnLineMessage(1)}</p>
      <p>{getUsersOnLineMessage(3)}</p>
      <p>boolean {true_boolean ? true.toString() : false.toString()}</p>
      <p>boolean {false_boolean ? true.toString() : false.toString()}</p>
      <p>{move(fish)}</p>
      <p>{move(bird)}</p>
      <p>{move(human)}</p>
      <p>{testInstanceOf(new Date()) }</p>
      <p>{testInstanceOf('Hello') }</p>
      <p>{displayType(numString)}</p>
      <p>{displayType(numString2)}</p>
      <p>{isFish(fish) ? fish.swim() : 'I am not a fish'}</p>
      <p>circle {getArea(circle)}</p>
      <p>square {getArea(square)}</p>
      <p>rectangle {getArea(rectangle)}</p>
    </div>
  )
}
