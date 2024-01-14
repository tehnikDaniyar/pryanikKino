import { useState } from 'react'
import styles from './styles.module.scss'

export default function Categories() {

	const [isOpen, setisOpen] = useState(false);

	return (
		<div className={`${styles.categories} ${isOpen ? `${styles.open}` : 'close'}`}>
			<div className={styles.icon} onClick={() => setisOpen(!isOpen)}></div>
		</div>
	)
}