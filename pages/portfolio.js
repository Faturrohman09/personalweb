import Link from "next/link";
import Navbar from "../component/navbar";
import Head from "next/head";
import Footer from '../component/footer';
function Portfolio(props) {
    return (
    <>
    <Head>
      <title>Portfolio</title>
    </Head>
    <Navbar web={props.data.data[0].navbar.list}/> 

        <section className="hero">
            <div className="container">
                <div className="text-wrapper w-full">
                    <h1 className="title">Portfolio</h1>
                    <p className="description">
                    Where can I get some?
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. 
                    </p>

                <div className="portfolio-wrapper">
                    <div className="portfolio-item">
                        <img src="/assets/image/valorant1.png" className="portfolio-image" />

                        <h4 className="portfolio-name">Valorant Live Score</h4>
                        <div className="portfolio-category">Mobile Dev</div>
                    </div>

                    <div className="portfolio-item">
                        <img src="/assets/image/valorant2.png" className="portfolio-image" />

                        <h4 className="portfolio-name">Valorant Agent Info</h4>
                        <div className="portfolio-category">Mobile Dev</div>
                    </div>
                </div>
             </div>
            </div>
        </section>
        <Footer />
    </>
    );
}

export default Portfolio;
export async function getServerSideProps() {
    const response = await  fetch('https://personalwebpat.herokuapp.com/')
    const data = await response.json()
  
  
    return {
      props: {data}, // will be passed to the page component as props
    }
  }