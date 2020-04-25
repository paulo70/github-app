'user strict'

import React, {PropTypes} from 'react'
import Search   from './search'
import UserInfo from './user-info'
import Actions  from './actions'
import Repos    from './repos'

const AppContent = ({
  userinfo,
  repos,
  starred,
  isFecthing,
  handleSearch,
  getRepos,
  getStarred
}) => (
  <div className='app'>
    <Search isDisabled = { isFecthing } handleSearch={ handleSearch }/>

    { isFecthing && <div> carregando... </div> }

    { !!userinfo && <UserInfo userinfo= { userinfo } /> }

    { !!userinfo && <Actions getRepos = { getRepos } getStarred = { getStarred } /> }

    { !!repos.length &&
      <Repos
        className ='repos rola'
        title ='Repositórios:'
        repos = {repos}
      />
    }


    { !!starred.length &&
      <Repos
        className ='starred'
        title ='favoritos:'
        repos = {starred}
      />
    }

  </div>
)

AppContent.propTypes = {
  userinfo:PropTypes.object.isRequired,
  repos:PropTypes.array.isRequired,
  starred:PropTypes.array.isRequired
}

export default AppContent
