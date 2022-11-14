// ** Icon imports
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'

const navigation = () => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/'
    },
    {
      title: 'Polygon',
      icon: CubeOutline,
      path: '/polygon'
    },
    {
      title: 'Optimism',
      icon: CubeOutline,
      path: '/optimism'
    }
  ]
}

export default navigation
