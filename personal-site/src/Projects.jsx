import React from 'react';

class Projects extends React.Component {
  render () {
    return (
      <p>
          My most recent project was a client-side caching library for GraphQL applications, you can check it out by clicking <a href="http://www.flacheql.io"><div>here</div></a> <br />
          We architected a caching engine that significantly outperforms major libraries such as Apollo or Relay, is easier to implement, and offers functionality not found in any other caching engine. <br />
          <br />
          From this project I, along with my team, was invited to speak at SoCal React on the topic of GraphQL and frontend optimization for performant applications. <br />
          <br />
      </p>
    )
  }
}

export default Projects;