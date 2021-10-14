import React from 'react'
import HelloWorld from '../components'
import MyButton from '../components/myButton'

export default { title: 'Hello World' }

export const simpleComponent = () => <HelloWorld />

export const button = () => <MyButton>button</MyButton>
