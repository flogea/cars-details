import React from 'react'
import styles from './Card.module.scss'
import { Typography } from '@mui/material'
import motor from '../../assets/images/motor.png'

type CardProps = {
  title: string;
  price: number;
  onClick?: () => void
}

export const Card = ({ title, price, onClick }: CardProps) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.image}>
        <img src={motor} alt="мотор" />
      </div>
      <div className={styles.text}>
        <Typography variant="h4" color={'black'} fontSize={20}>
          {title}
        </Typography>
        <Typography variant="h4" color={'#646464'} fontSize={16}>
          {price} ₽
        </Typography>
      </div>
    </div>
  )
}
