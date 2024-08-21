import { GeistProvider, CssBaseline, Themes } from '@geist-ui/core'
import Home from './Home';

const pinkTheme = Themes.createFromLight({
  type: 'pinkTheme',
  palette: {
    background: '#fcf0f3',
    cyan: '#fff',
    link: '#d68195',
  }
})

const App = () => (
  <GeistProvider themes={[pinkTheme]} themeType="pinkTheme">
    <CssBaseline />
    <Home />
  </GeistProvider>
)

export default App;
