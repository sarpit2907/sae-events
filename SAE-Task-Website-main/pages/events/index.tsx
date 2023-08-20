import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import styles from "@/styles/about.module.css";
import ReactPlayer from "react-player";


const EventsPage = () => {
    return (
        <>
            <Navbar BgColor="black" />
            <div>
                <div className={styles.first_section}>
                    <div className={styles.about}>
                        <h1>Upcoming and past events</h1>
                        <div className={styles.desc}>
                            Step into the realm of automotive innovation, collaboration, and learning at the heart of SAE(Society of Automotive Engineers). Our event page is a gateway to exciting experiences that unite automobile enthusiasts, aspiring engineers, and creative minds under one roof.
                        </div>
                        <hr />
                    </div>
                    <div className={styles.star}>
                        <img src="/images/star.png" />
                    </div>
                </div>
                <div className={styles.intro}>
                    <div className={styles.player}>
                        <ReactPlayer
                            url="/images/rdevents.mp4"
                            height="100%"
                            width="100%"
                            controls
                        />
                    </div>
                    <div className={styles.intro_text}>
                    <div className="container text-center">
                        RC Car  <br />
                        Roadshow
                        <br />
                        </div>
                        <button className={styles.youtube_btn}>
                            Watch on &nbsp;
                            <img src="/images/feYoutube2.png" />
                        </button>
                    </div>
                </div>
                <div className={styles.second_section }>
                    <div className={styles.card}>
                    <div className="container text-center mt-5 mb-5 " style={{ backgroundColor: '#1a1b1a' }} >
                        <div className="row">
                            <div className="col-md-3 ">
                                <div className="card mt-3 mb-3" style={{ width: '100%', margin: '0 10px' }}>

                                    <div>
                                        <Image
                                            src="/images/Freshers_induction.png"
                                            alt="SAE aero design"
                                            width={100}
                                            height={300}
                                            className="card-img-top"
                                        />
                                        <h5 className="card-title mt-3">Freshers's Induction</h5>
                                    </div>

                                    <div className="card-body">
                                        <p className="card-text ">You know what is better than imagining the thrill? It's watching the ATV in action, conquering the terrain with sheer power and agility.
                                            The Society of Automobile Engineers' Induction left us at awe as we witnessed boundless creativity and expertise of automotive engineering minds. The event was a true celebration of the passion, dedication, and sheer talent that drives the world of automobile engineering forward. With cutting-edge technology, the induction was an adrenaline-fueled journey.</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3" >
                                <div className="card mt-3" style={{ width: '100%', margin: '0 10px' }}>

                                    <div>
                                        <Image
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlEr7injYQ_bPaK6JdCYM7IRUtKbSlBmE3GN9Q8fXBrhnBEH6sSrqLzkY9RwhR4nlzxdA&usqp=CAU"
                                            alt="SAE aero design"
                                            width={100}
                                            height={300}
                                            className="card-img-top"
                                        />
                                        <h5 className="card-title mt-3">SAE Clean Snowmobile Challenge</h5>
                                    </div>

                                    <div className="card-body">
                                        <p className="card-text">The SAE Clean Snowmobile Challenge provides participants with the opportunity to enhance their engineering design and project management skills by re-engineering an existing snowmobile to reduce emissions and noise. Participants’ modified snowmobiles compete in a variety of events, including emissions, noise, fuel economy/endurance, acceleration, handling, static display, cold start, and design.</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3" >
                                <div className="card mt-3" style={{ width: '100%', margin: '0 10px' }}>

                                    <div>
                                        <Image
                                            src="https://www.sae.org/binaries/content/gallery/cm/articles/press-releases/2018/06/autodrive-challenge-car.jpg"
                                            alt="SAE aero design"
                                            width={100}
                                            height={300}
                                            className="card-img-top"
                                        />
                                        <h5 className="card-title mt-3">AutoDrive Challenge II™</h5>
                                    </div>

                                    <div className="card-body">
                                        <p className="card-text">This competition continues the strong partnership between GM and SAE in STEM education and will build on the ground-breaking success of the original four-year series, AutoDrive Challenge™. Our second series aims to have participating university teams develop and demonstrate an autonomous vehicle (AV) that can navigate urban driving courses as described by SAE Standard (J3016™) Level 4 automation.</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3" >
                                <div className="card mt-3" style={{ width: '100%', margin: '0 10px' }}>

                                    <div>
                                        <Image
                                            src="https://financialexpresswpcontent.s3.amazonaws.com/uploads/2018/03/WhatsApp-Image-2018-03-11-at-11.14.56-AM.jpeg"
                                            alt="SAE aero design"
                                            width={100}
                                            height={300}
                                            className="card-img-top"
                                        />
                                        <h5 className="card-title mt-3">Baja SAE</h5>
                                    </div>

                                    <div className="card-body">
                                        <p className="card-text">In Baja SAE, engineering students are tasked with designing and building a single-seat, all-terrain sporting vehicle that is to be a prototype for a reliable, maintainable, ergonomic, and economic production vehicle that serves a recreational user market. The students must function as a team to design, engineer, build, test, promote, and compete with a vehicle within the limits of the rules.</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3" >
                                <div className="card mb-3" style={{ width: '100%', margin: '0 10px' }}>

                                    <div>
                                        <Image
                                            src="https://www.racecar-engineering.com/wp-content/uploads/2016/05/upSUNY.jpg"
                                            alt="SAE aero design"
                                            width={100}
                                            height={300}
                                            className="card-img-top"
                                        />
                                        <h5 className="card-title mt-3">Formula Hybrid</h5>
                                    </div>

                                    <div className="card-body">
                                        <p className="card-text">Formula Hybrid Competition is an interdisciplinary design and engineering challenge for undergraduate and graduate university students. They must collaboratively design and build a formula-style electric or plug-in hybrid racecar and compete in a series of events. This educational competition emphasizes drivetrain innovation and fuel efficiency in a high-performance application.</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3" >
                                <div className="card mb-3 mt-3" style={{ width: '100%', margin: '0 10px' }}>

                                    <div>
                                        <Image
                                            src="https://eng.vt.edu/content/dam/eng_vt_edu/student-teams/formula-sae/formula-sae-2.jpg.transform/l-medium/image.jpg"
                                            alt="SAE aero design"
                                            width={100}
                                            height={300}
                                            className="card-img-top"
                                        />
                                        <h5 className="card-title mt-3">Formula SAE®</h5>
                                    </div>

                                    <div className="card-body">
                                        <p className="card-text">The Formula SAE® series competitions challenge teams of university undergraduate and graduate students to conceive, design, fabricate, develop, and compete with small, formula-style vehicles. The competitions give teams the chance to demonstrate and prove both their creativity and engineering skills in comparison to teams from other universities around the world.</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3" >
                                <div className="card mb-3" style={{ width: '100%', margin: '0 10px' }}>

                                    <div>
                                        <Image
                                            src="https://s3.amazonaws.com/cms.ipressroom.com/175/files/20224/628576e2b3aed31116af4632_A+preview+of+the+exterior+of+the+2022+EV./A+preview+of+the+exterior+of+the+2022+EV._hero.png"
                                            alt="SAE aero design"
                                            width={100}
                                            height={300}
                                            className="card-img-top"
                                        />
                                        <h5 className="card-title mt-3">Formula SAE® Electric</h5>
                                    </div>

                                    <div className="card-body">
                                        <p className="card-text">Introduced in 2013, Formula SAE® Electric allows the development of fully electric vehicles within the FSAE® framework. Teams use vehicles powered only by electrical motors and compete in static and dynamic events such as design, presentation, cost, acceleration, skidpad, autocross, endurance, and efficiency.</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3" >
                                <div className="card mb-3" style={{ width: '100%', margin: '0 10px' }}>

                                    <div>
                                        <Image
                                            src="https://cf-images.us-east-1.prod.boltdns.net/v1/static/2838874477001/4d9c31ec-aabe-4e26-91dd-d2bddfee596c/40645bde-6d5d-491d-b8fb-996d38a274eb/1280x720/match/image.jpg"
                                            alt="SAE aero design"
                                            width={100}
                                            height={300}
                                            className="card-img-top"
                                        />
                                        <h5 className="card-title mt-3">Mission Autono</h5>
                                    </div>

                                    <div className="card-body">
                                        <p className="card-text">Our latest challenge, Mission Autono, is part of the Emerging Technology Portfolio, which expands the STEM workforce pipeline by radically investing in diverse participants as they solve new mobility challenges. The Mission Autono program enables participants to develop software seeking SAE J3016 – Level 3 status through a one-year enhanced learning opportunity.</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div style={{ paddingTop: '150vh' }}>
                    <form style={{ backgroundColor: '#e25420' }}>
                        <div className="container body-center text-light mt-3 mb-3" >
                            <h3>Students get the latest Club Programs news and SAE events updates</h3>
                            <div className="form-floating">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                <label className="text-dark" htmlFor="floatingPassword">Name</label>
                            </div>
                            <div className="form-floating mt-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label className="text-dark" htmlFor="floatingInput">Email address</label>
                            </div>
                            
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">I would like to receive product announcements and special offers from SAE International via e-mail</label>
                            </div>
                            <button type="submit" className="btn btn-primary mb-2">Submit</button>
                        </div>
                    </form>
                </div>
            </div>

            <div style={{paddingTop: '10vh' }}>
            <Footer />
            </div>
        </>
    );
};export default EventsPage;