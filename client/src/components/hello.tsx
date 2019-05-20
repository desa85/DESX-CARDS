import * as React from 'react'
import { Game } from './Game'

export interface AppProps {param: number;}

export class App extends React.Component<AppProps, {}> {
  render() {
    return (
      <Game user = 'Artem' />
    )
  }
}