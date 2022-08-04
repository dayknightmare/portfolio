import Head from 'next/head'
import Banner from '../components/banner'
import Container from '../components/container'
import Footer from '../components/footer'

const Index = () => {
    return (
        <>
            <Head>
                <title>Portfolio | Miguel Vieira Colombo</title>
                <meta property="og:title" content="Portfolio | Miguel Vieira Colombo" />
                <meta property="og:image" content="/portfolio/img/preview.png" />

                <meta name="twitter:title" content="Portfolio | Miguel Vieira Colombo" />
                <meta name="twitter:image" content=" /portfolio/img/preview.png" />
            </Head>
            <Banner></Banner>
            <Container></Container>
            <Footer></Footer>
        </>

    )
}

export default Index