import React, { Component } from 'react';

import styles from './Projects.css';
import axios from 'axios';
import ProjectPreview from './ProjectPreview/ProjectPreview';
import Spinner from '../UI/Spinner/Spinner';
import Modal from '../UI/Modal/Modal';
import ProjectModal from './ProjectModal/ProjectModal';
// import Button from '../UI/Button/Button';
import Container from '../../hoc/Container/Container';
import PageHeader from '../UI/PageHeader/PageHeader';
import Aux from '../../hoc/Aux';

class Projects extends Component {
  state = {
    projects: null,
    showModal: false,
    modalContent: null
  }

  getProjects = () => {
    axios.get('https://olbesp-portfolio.firebaseio.com/projects.json')
      .then(response => {
        const projects = response.data;
        this.setState({ projects });
        console.log(this.state.projects);
      })
      .catch(error => {
        console.log(error);
      });
  }

  showModalHandler = (e) => {
    if (this.state.projects) {
      this.state.projects.forEach(project => {
        if (e.target.parentNode.id === project.id) {
          this.setState({ modalContent: project, showModal: true });
        }
      });
    }
  }

  closeModalHandler = () => {
    this.setState({ showModal: false, modalContent: null });
  }

  componentDidMount() {
    this.getProjects();
  }

  render() {

    let portfolio = <div style={{
      display:'flex',
      alignItems:'center', 
      justifyContent:'center',
      height: '100vh'
    }}><Spinner /></div>;
    let projectModal = <div></div>;
    let projectsPreview;

    if (this.state.projects) {
      projectsPreview = this.state.projects
        .filter(project => project.image)
        .map(project => (
          <ProjectPreview id={project.id} 
            key={project.id} 
            title={project.title} 
            img={project.image}
          />
        )
      );
      portfolio = (
        <Aux>
          <Container>
            <PageHeader title="My featured works" />
            <div className={styles.Projects} onClick={this.showModalHandler}>
              {projectsPreview}
            </div>
          </Container>
        </Aux>
      );
    }

    if (this.state.modalContent) {
      const project = this.state.modalContent;
      projectModal = <ProjectModal 
        title={project.title} 
        image={project.image}
        description={project.description}
        tools={project.tools}
        code={project.links.code}
        app={project.links.app}
        closeModal={this.closeModalHandler} />
    }

    return (
      <Aux>
        <Modal show={this.state.showModal} modalClosed={this.closeModalHandler}>
          {projectModal}
        </Modal>
        {portfolio}
      </Aux>
    );
  }
}

export default Projects;