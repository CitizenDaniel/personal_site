import React from 'react';
import ModalConductor from '../components/ModalConductor';
import SEO from '../components/SEO';
import '../css/global.css';
import FooterSection from '../sections/FooterSection';
import PerformanceSection from '../sections/PerformanceSection';
import TopSection from '../sections/TopSection';
import ProfileSection from '../sections/ProfileSection'
import Layout from '../components/Layout';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentModal: null,
    };

    this.setCurrentModal = this.setCurrentModal.bind(this);
  }

  setCurrentModal(target) {
    this.setState({
      currentModal: target,
    });
  }

  render() {
    return (
      <Layout location={this.props.location}>
        {this.state.currentModal && (
          <ModalConductor
            currentModal={this.state.currentModal}
            setCurrentModal={this.setCurrentModal}
          />
        )}

        <TopSection />
        <PerformanceSection />
        <ProfileSection />
        <FooterSection setCurrentModal={this.setCurrentModal} />

        <SEO />
      </Layout>
    );
  }
}

export default IndexPage;
