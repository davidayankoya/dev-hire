import { BiSearch, BiHeart } from 'react-icons/bi'
import Home from '../views/Home'
import Favorites from '../views/Favorites'


const routes = [
  { name: 'Home', path: '/', Icon: BiSearch, index: true, element: Home },
  { name: 'Favorites', path: '/favorites', Icon: BiHeart, element: Favorites },
]

export default routes
