import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
// import {settings} from '../../data/dataStore';
// import Creator from '../Creator/Creator';
import Icon from '../Column/Icon';

class Column extends React.Component {
    static propTypes = {
      icon: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      cards: PropTypes.array,
    }

    render() {
      const {title, icon, cards} = this.props;
      return (
        <section className={styles.component}>
          <h3 className={styles.title}>
            <span className={styles.icon}>
              <Icon name={icon}/>
            </span> {title}
          </h3>
          {/*
          <div className={styles.creator}>
            <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
          </div>
          */}
          <div className={styles.cards}>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))}
          </div> 
        </section> 
      );
    }
}

export default Column;