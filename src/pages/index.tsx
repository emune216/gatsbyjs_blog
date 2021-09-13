import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';

const IndexPage = () => {
  return (
    <Layout>
      <Content>
        <div style={{ border: '1px solid black' }}>
          blog
        </div>
      </Content>
    </Layout>
  );
};

export default IndexPage;

const Content = styled.div``;
