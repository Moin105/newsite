import Head from 'next/head'
import Image from 'next/image'
import React,{useRef,useEffect, useState} from 'react'

import Experience from '../Components/Experience/experience'
import Experties from '../Components/Experties/experties'
import Feedback from '../Components/Feedback/feedback'
import Footer from '../Components/Footer/footer'
import Foots from '../Components/Footer/foots'
import Header from '../Components/Header/header'
// import Banner from '../Components/Landing/Banner'
import Landing from '../Components/Landing/landing'
// import Osama from '../Components/Landing/Osama'
// import Pddf from '../Components/Pdf'
import Project from '../Components/Project/project'
import styles from '../styles/Home.module.css'
// import Resume from './Resume'

export default function Home() {
  // const containerRef = useRef(null);
  // const [show, setShow] = useState(false)
	// useEffect(() => {
	// 	const container = containerRef.current;
	// 	let PSPDFKit;

	// 	(async function () {
	// 		PSPDFKit = await import('pspdfkit');

	// 		if (PSPDFKit) {
	// 			PSPDFKit.unload(container);
	// 		}

	// 		await PSPDFKit.load({
	// 			container,
	// 			document: '../public/pdf.pdf',
	// 			baseUrl: `${window.location.protocol}//${window.location.host}/`,
	// 		});
	// 	})();

		// return () => PSPDFKit && PSPDFKit.unload(container);
	// }, []);
  return (
    <div>
    <div className={styles.container}>
      <Head>
        <title>Osama Bin Sheraz</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Landing/>
      <Experties/>
      {/* <Pddf/> */}
      <Experience/>
      <Project/>
      <Feedback/>
      <Footer/>
      {/* <div ref={containerRef} style={{ height: '100vh' }} /> */}
      </div>
      <Foots/>
      {/* <Resume/> */}
    </div>
    
  )
}
