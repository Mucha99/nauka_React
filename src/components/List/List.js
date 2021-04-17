import React from 'react';
import Hero from '../Hero/Hero';
import styles from './List.scss'
import PropTypes from 'prop-types';
import Column from '../Column/Column';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    adres: PropTypes.string.isRequired,
    children: PropTypes.node,
  }

  static defaultProps = {
    children: <p>Interesting things I want to check out!</p>,
  }

  render() {
    return (
      <section className={styles.component}>  
        <Hero 
          titleText={this.props.title} 
          adresText={this.props.adres}
        />
        <div className={styles.description}>
          {this.props.children}
        </div>
        <div className={styles.columns}>
          <Column title={'Animals'}/>
          <Column title={'Plants'}/>
          <Column title={'Minerals'}/>
        </div>
      </section>
    )
  }
}
 
export default List;