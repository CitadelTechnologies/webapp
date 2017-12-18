import React from 'react';
import glamorous from 'glamorous';
import Router from 'next/router';

class Project extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.project.name}
      </div>
    );
  }
};

export default Project;
