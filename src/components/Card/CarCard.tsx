import React from 'react'
import carForCard from '../../assets/images/carForCard.png'
import { Typography } from '@mui/material'
import styles from './Card.module.scss'

export const CarCard = ({ title }: { title: string }) => {
  return (
    <div className={styles.card}>
      <img src={carForCard} alt="car" />
      <div className={styles.text}>
        <Typography variant="h4" color={'black'} fontSize={16} fontWeight={600}>
          {title}
        </Typography>
      </div>
    </div>
  )
}
