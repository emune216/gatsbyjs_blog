import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';

const IndexPage = () => {
  return (
    <Layout>
      <Content>
        hello blog
      </Content>
    </Layout>
  );
};

export default IndexPage;

const Content = styled.div``;
