import React from 'react';
import styles from './App.scss';
import List from '../List/List'

class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>My first React app</h1>
        <h2 className={styles.subtitle}>
          A simple to-do app, with lists, columns and card
        </h2>
        <List  
          title={['Things to do', <sup key='1'> soon!</sup>]} 
          adres={'https://cdn.dribbble.com/users/2898440/screenshots/5994174/into_space.gif'}
        />
      </main>
    )
  }
}

export default App;
