import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import useContentfulFetch, { ContentfulFetch } from '../hooks/useContentfulFetch'

const HelloWorld = () => {
  const contentfulData: ContentfulFetch = useContentfulFetch(query)

  if (contentfulData.isLoading) {
    return (
      <Container>
        <Typography variant='h2'>Loading...</Typography>
      </Container>
    )
  } else if (contentfulData.fetchData) {
    const pageData = contentfulData.fetchData.data.pageCollection.items[0]
    console.log(pageData)
    return (
      <Container>
        <Typography variant='h1'>{pageData.name}</Typography>
      </Container>
    )
  }
  return (
    <Container>
      <Typography variant='h2'>
        An error occurred while loading the page. Please try reloading
      </Typography>
    </Container>
  )
}

export default HelloWorld

const query = `
{
    pageCollection(where: {name: "Homepage"}) {
      items {
        name
        header {
          name
          brandName
          logo {
            description
            url
          }
        }
        bodyCollection {
          items {
            name
            __typename
            text {
              json
            }
          }
        }
        footer {
          name
          brandName
          logo {
            description
            url
          }
        }
      }
    }
  }
`
