import React, { Component } from 'react';
import { displayList } from './helpers';
import './Skills.scss';

class Skills extends Component {
  // icons from fontawesome and devicon
  static defaultProps = {
    dev: [
      { label: 'HTML', icon: 'fab fa-html5' },
      { label: 'CSS', icon: 'fab fa-css3' },
      { label: 'Sass', icon: 'fab fa-sass' },
      { label: 'JavaScript', icon: 'fab fa-js' },
      { label: 'React', icon: 'fab fa-react' },
      { label: 'Node.js', icon: 'fab fa-node' }
      // { label: 'C#', icon: 'devicon-csharp-plain' },
      // { label: '.NET', icon: 'devicon-dot-net-plain' }
    ],
    tools: [
      { label: 'VS Code', icon: 'devicon-visualstudio-plain' },
      // { label: 'Visual Studio', icon: 'devicon-visualstudio-plain' },
      { label: 'Git', icon: 'fab fa-git-alt' },
      { label: 'Github', icon: 'fab fa-github' },
      { label: 'NPM', icon: 'fab fa-npm' },
      { label: 'Adobe XD', icon: 'fab fa-adobe' },
      { label: 'Figma', icon: 'fab fa-figma' }
    ]
  };

  render() {
    return (
      <section className="Skills" id="skills">
        <h2 className="section-title" data-title="Skills">
          Tech I use
        </h2>

        <div className="Skills__container">
          <h3 className="Skills__heading">Development</h3>
          <ul className="Skills__list">{displayList(this.props.dev, 'Skills')}</ul>
          {/* </div>

        <div className="Skills__container"> */}
          <h3 className="Skills__heading">Tools</h3>
          <ul className="Skills__list">{displayList(this.props.tools, 'Skills')}</ul>
        </div>
      </section>
    );
  }
}

export default Skills;
