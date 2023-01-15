import React, { useRef, useCallback, useEffect } from 'react'
import Intro from './components/intro/Intro';
import About from './components/about/About';
import Work from './components/work/Work';
import Contact from './components/contact/Contact';
import NavigationBar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useInView } from 'react-intersection-observer';

const App = () => {
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);

  const { ref: homeView, inView: homeSelected } = useInView({threshold:0.7});
  const { ref: aboutView, inView: aboutSelected } = useInView({threshold:0.5});
  const { ref: projectsView, inView: projSelected } = useInView({threshold:0.3});
  const { ref: contactView, inView: contactSelected } = useInView({threshold:0.5});

  const aboutRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  const about = useCallback(
    (node) => {
      aboutRef.current = node;
      aboutView(node);
    },
    [aboutView],
  );

  const projects = useCallback(
    (node) => {
      projectsRef.current = node;
      projectsView(node);
    },
    [projectsView],
  );

  const contact = useCallback(
    (node) => {
      contactRef.current = node;
      contactView(node);
    },
    [contactView],
  );

  return (
    <>  
      <NavigationBar about={aboutRef} projects={projectsRef} contact={contactRef} homeSelected={homeSelected} aboutSelected={aboutSelected} projSelected={projSelected} contactSelected={contactSelected} />
      <Intro useref={homeView} />
      <About useref={about} />
      <Work useref={projects} />
      <Contact useref={contact} />
      <Footer/>
    </>    
  )
}

export default App