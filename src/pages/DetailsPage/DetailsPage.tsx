import { Typography } from '@mui/material';
import React from 'react';
import { carsdata } from '../../mocks';
import { Card } from '../../components/Card';
import { Header } from '../../components/Header';
import styles from './DetailsPage.module.scss'

export const DetailsPage = () => {
  return (
    <>
      <Header />
      <div className={styles.detailsPage}>
        <Typography variant="h2" color={'black'} fontSize={16}>
          детали
        </Typography>
        <div className={styles.list}>
          {carsdata.map((car, index) => (
            <Card title={`${car.type} ${car.model} ${car.year}`} price={32990} />
          ))}
        </div>
      </div>
    </>
  );
};
