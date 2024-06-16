import React from 'react';
import styles from './HomePage.module.scss';
import { Button, Typography } from '@mui/material';
import { carsdata } from '../../mocks';
import { Card } from '../../components/Card';
import { Header } from '../../components/Header';
import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';
import { useNavigate } from 'react-router-dom';


export const HomePage = () => {
  const navigate = useNavigate()

  return (
    <>
      <Header style={{ position: 'absolute', color: 'white' }} />
      <div className={styles.main}>
        <div className={styles.title}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Typography variant="h1" color={'white'} fontFamily={'Tektur'} fontWeight={600} lineHeight={'70px'} fontSize={64}>
              Ваш надежный партнер в мире автозапчастей
            </Typography>
            <Typography variant="h4" color={'white'} fontFamily={'Tektur'} fontWeight={100} fontSize={24}>
              качество и надежность для вашего автомобиля
            </Typography>
          </div>
          <Button variant='contained' className={styles.button} size='large' onClick={() => navigate('/details')}>Подобрать детали</Button>
        </div>

      </div >
      <div className={styles.cars}>
        <Typography variant="h2" color={'black'} fontFamily={'Tektur'} fontWeight={600} lineHeight={'70px'} fontSize={64}>
          Выбрать модель
        </Typography>
        <ul className={styles.carsList}>
          {carsdata.map((car, index) => (
            <li onClick={() => navigate('/cars')} >{car.type}</li>
          ))}
        </ul>
      </div>
      <div className={styles.details}>
        <Typography variant="h2" color={'black'} fontFamily={'Tektur'} fontWeight={600} lineHeight={'70px'} fontSize={64}>
          Популярное
        </Typography>
        <div className={styles.detailsWrapper}>
          <div className={styles.detailsList}>
            {carsdata.map((car, index) => (
              <Card title={`Мотор ${car.type} ${car.model} ${car.year}`} price={32990} onClick={() => navigate('/details')} />
            )).slice(0, 9)}
          </div>
          <Button variant='contained' className={styles.button} size='large' onClick={() => navigate('/details')}>смотреть всё</Button>
        </div>
      </div>
      <div className={styles.about} id='info'>
        <Typography variant="h2" color={'black'} fontFamily={'Tektur'} fontWeight={600} lineHeight={'70px'} fontSize={64}>
          О нас
        </Typography>
        <div className={styles.info}>
          <div className={styles.contacts}>
            <Typography variant="body2" color={'black'} fontSize={'16px'} className={styles.address}>
              г. Санкт-Петербург, пр. Большевиков, 22
            </Typography>
            <Typography variant="body2" color={'black'} fontSize={'16px'} className={styles.phone}>
              +7(911) 758-32-01
            </Typography>
            <Typography variant="body2" color={'black'} fontSize={'16px'} className={styles.mail}>
              kuplugarazh@mail.ru
            </Typography>
          </div>
          <div className={styles.map}>
            <YMaps>
              <Map defaultState={{ center: [59.903049, 30.490057], zoom: 14, type: 'yandex#map' }} modules={["control.ZoomControl", "control.FullscreenControl"]} className={styles.ymapsLayersPane} width={400} height={400}>
                <Placemark defaultGeometry={[59.903049, 30.490057]} />
              </Map>
            </YMaps>
          </div>
        </div>
      </div>
    </>
  );
};
