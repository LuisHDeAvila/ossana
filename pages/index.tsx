import { Typography } from '@mui/material';
import type { NextPage } from 'next'
import { Layout } from '../components/layout';

const HomePage: NextPage = () => {
  return (
   <Layout title='Hola mundo'>
    <Typography variant='h1' color='primary'> Hola mundo </Typography>
   </Layout>
   
  )
}

export default HomePage;