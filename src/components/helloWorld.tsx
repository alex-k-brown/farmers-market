import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

interface HelloWorldProps {
  text: string
}

const HelloWorld = ({ text }: HelloWorldProps) => {
  return (
    <Box>
      <Typography variant='h1'>{text}</Typography>
    </Box>
  )
}

export default HelloWorld
