import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

class Card extends React.Component {
    static propTypes = {
        cards: PropTypes.array,
    }

    render() {
        return (
            <div className={styles.component}>
                <h4 className={styles.title}>{this.props.title}</h4>
            </div>
        )
    }
}

export default Card;