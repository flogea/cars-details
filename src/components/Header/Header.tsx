import { Typography } from '@mui/material'
import React from 'react'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'

export const Header = ({ style }: { style?: React.CSSProperties }) => {
  return (
    <nav className={styles.nav} style={style}>
      <Typography variant="body2" color={'black'} fontSize={16} className={styles.navLink}>
        <Link to='/'>
          главная
        </Link>
      </Typography>
      <Typography variant="body2" color={'black'} fontSize={16} className={styles.navLink}>
        <Link to='/cars'>
          автомобили
        </Link>
      </Typography>
      <Typography variant="body2" color={'black'} fontSize={16} className={styles.navLink}>
        <Link to='/details'>
          детали
        </Link>
      </Typography>
      <Typography variant="body2" color={'black'} fontSize={16} className={styles.navLink}>
        <Link to='/'>
          о нас
        </Link>
      </Typography>
    </nav>
  )
}
