import React, { useState } from 'react';
import styles from './CarsPage.module.scss'
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { carsdata } from '../../mocks';
import carPic from '../../assets/images/car.png'
import { CarCard, Card } from '../../components/Card';
import { Header } from '../../components/Header';

export const CarsPage = () => {
  const [car, setCar] = useState('')
  const [carModel, setCarModel] = useState('')
  const [carYear, setCarYear] = useState(0)
  const [carsData, setCarsData] = useState(carsdata)
  const isFiltersEmpty = !(car || carModel || carYear)

  const handleChangeCar = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setCar(e.target.value)
    setCarsData(carsdata.filter((car) => car.type === e.target.value))
  }

  const handleChangeCarModel = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setCarModel(e.target.value)
    setCarsData(carsdata.filter((car) => car.model === e.target.value))
  }

  const handleChangeCarYear = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setCarYear(Number(e.target.value))
    setCarsData(carsdata.filter((car) => car.year === Number(e.target.value)))
  }

  const clearFiltershandle = () => {
    setCar('')
    setCarModel('')
    setCarYear(0)
  }

  return (
    <>
      <Header />
      <div className={styles.carPage}>
        <div className={styles.filters}>
          <Box sx={{ minWidth: 220 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Марка</InputLabel>
              <Select labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={car}
                label="Марка машины"
                onChange={handleChangeCar}
              >
                {carsdata.map((car, index) => (
                  <MenuItem key={index} value={car.type}>{car.type}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ minWidth: 220 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Модель</InputLabel>
              <Select labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={carModel}
                label="Модель машины"
                onChange={handleChangeCarModel}
              >
                {carsdata.map((car, index) => (
                  <MenuItem key={index} value={car.model}>{car.model}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ minWidth: 220 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Год</InputLabel>
              <Select labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={`${carYear}`}
                label="Год машины"
                onChange={handleChangeCarYear}
              >
                {carsdata.map((car, index) => (
                  <MenuItem key={index} value={car.year}>{car.year}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <Button variant="outlined" className={styles.outlinebutton} startIcon={<DeleteIcon />} onClick={clearFiltershandle}>
            Очистить
          </Button>
          <Button variant='contained' className={styles.button} size='large'>Подобрать детали</Button>
        </div>
        {isFiltersEmpty && (
          <div className={styles.emptyFilters}>
            <img src={carPic} alt="car" />
            <Typography variant="h4" color={'black'} fontSize={16} fontWeight={600}>
              Выберите модель, чтобы мы смогли подобрать для Вас подходящие детали
            </Typography>
          </div>
        )}
        {!isFiltersEmpty && (
          <div className={styles.cars}>
            {carsData.map((car, index) => (
              <CarCard title={`${car.type} ${car.model} ${car.year}`} />
            ))}
          </div>
        )}
      </div >
    </>
  );
};
