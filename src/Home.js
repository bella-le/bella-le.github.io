import { Page, Grid } from '@geist-ui/core'
import BelCard from './BelCard';

const Home = () => (
  <Page>
    <Grid.Container justify="center" alignItems='center' height="75vh">
      <Grid md={20}>
        <BelCard />
      </Grid>
    </Grid.Container>
  </Page>
)
export default Home;
