import FC from 'react';
import Head from 'next/head';
import { Box } from '@mui/material';
import { Navbar } from '../ui';

interface Props {
  title?: string;
}

export const Layout:FC<Props> = ({ title = 'Ossana', children }) => {
  return (
    <Box sx={{ flexFlow: 1 }}>
      <Head>
        <title> { title } </title>
      </Head>
      <Navbar/>
      { /* Sidebar */ }
      <Box sx={{ paddingTop: '10px 20px' }}>
        { children }
      </Box>
    </Box>
  )
}