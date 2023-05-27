import Head from 'next/head'
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Carousel from '../components/carousel';
import Destinations from '../components/Destinations';
import Experience from '../components/Experience';
import Offers from '../components/Offers';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Leisures</title>
      </Head>
      <div>
        <Header />
      </div>
        
      
      <div>
        <SearchBar />
        <div className=' bg-dark-blue'>
          <Carousel />         
        </div>
      </div>
      <Destinations />
      <Experience />
      <Offers />
      <Footer />
    </>
  )
}
