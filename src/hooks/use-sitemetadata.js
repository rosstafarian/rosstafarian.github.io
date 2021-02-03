import { graphql, useStaticQuery } from 'gatsby'

const useSiteMetadata = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    github
                    linkedin
                    email
                }
            }
        }
    `)

    return data.site.siteMetadata
}

export default useSiteMetadata
