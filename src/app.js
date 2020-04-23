'use strict'

import React, {Component} from 'react'
import AppContent from './components/app-content'


class App extends Component {

  constructor () {
    super()
    this.state = {
      userinfo: {
        username:'Fernando Dackiuk',
        repos: '122',
        photo: 'https://avatars.githubusercontent.com/u/487669?v=3',
        followers: '102',
        following: '10',
        login: 'fdaciuk'
      },

      repos: [{
        name: 'repos',
        link: '#'
      }],

      starred: [{
        name: 'repos',
        link: '#'
      }]
    }
  }

  render () {
    return (
      <AppContent
        userinfo={this.state.userinfo}
        repos={this.state.repos}
        starred={this.state.starred}
      />
    )
  }
}

export default App
