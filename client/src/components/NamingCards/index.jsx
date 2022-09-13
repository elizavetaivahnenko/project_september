import React from 'react'
import styles from './NamingCards.module.sass'
import CONSTANTS from '../../constants'


function NamingCards({ kitCards }) {
	return (
		<div className={styles.cardContainer}>
			{kitCards.map((card, i) => (
				<div className={styles.card} key={i}>
					<div className={styles.mainContainer}>
					<img src={`${CONSTANTS.STATIC_IMAGES_PATH}more-benifits-high-quality-icon.png`} alt='img' />
					<h3>{card.title}</h3></div>
					<p>{card.text}</p>
					<button className={styles[card.blueButton == true ? 'blueButton' : 'whiteButton']}>{card.button}</button>
				</div>
			))}
		</div>
			
  )
}

export default NamingCards





