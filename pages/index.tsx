import type { NextPage } from 'next';
import { Card, CardContent, CardHeader, Grid } from '@mui/material';

import { Layout } from '../components/layouts';
import { EntryList } from '../components/ui';

const HomePage: NextPage = () => {
  return (
   <Layout title='Home - Ossana'>
    
    <Grid container spacing={ 2 }>
    
      <Grid item xs={ 12 } sm={ 4 }>
        <Card sx={{ height: 'calc(100vh - 100px )' }}>
          <CardHeader title="Pendientes" />
          
          <CardContent>
            { /*  Agregar nueva entrada   */}
            <EntryList/>
          
          </CardContent>
        
        </Card>
      </Grid>
      
      <Grid item xs={ 12 } sm={ 4 }>
        <Card sx={{height: 'calc(100vh - 100px )' }}>
          <CardHeader title="En progreso" />
        </Card>
      </Grid>
      <Grid item xs={ 12 } sm={ 4 }>
        <Card sx={{height: 'calc(100vh - 100px )' }}>
          <CardHeader title="Completadas" />
        </Card>
      </Grid>
      </Grid>
   </Layout>
   
  )
}

export default HomePage;