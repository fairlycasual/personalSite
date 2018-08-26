import React from 'react';

class Academics extends React.Component {

  // react is powerful due to one-way data flow, this is why you implement redux (or context API!!!), for a single source of truth
  // I'm going to lazily implement these Modals (?) by making Academics stateful vs prop drilling through?
  constructor (props) {
    super(props);
    this.state = {
      activeModal: null/*set to a number that's the key of the modals object*/,


    }
  }

  // function that onClick sets the active modal to 

  render () {
    return (
    <p>
        My academic work was completed at the University of Utah in the Atmospheric Sciences. <br /> 
        <br />
        As a Research Associate at MesoWest, I endeavored on large-scale validation of instrumentation for NASA, the GSLO<sub>3</sub>S research campaign, and deployed and maintained a network of surface weather stations.
        {/* TODO! Modal of research posters for all projects!!! */}
        <br /> <br />
        I also undertook a research project with Professor Emeritus Dave Whiteman where we quantified the pollutants transported by fog in Persistant Cold Air Pool events. <br /> 
    </p>
    )
  }
}

export default Academics;