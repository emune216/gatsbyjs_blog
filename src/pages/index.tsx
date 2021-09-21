import React from 'react';
import styled from 'styled-components';

import ArticlePreview from '../components/ArticlePreview';

const articleList = [
  {
    title: '테스트용',
    desc: '테스트용 블로그글 입니당.'
  },
  {
    title: '테스트용2',
    desc: '테스트용2 블로그글 입니당.'
  },
  {
    title: '테스트용3',
    desc: '테스트용3 블로그글 입니당.'
  },
  {
    title: '테스트용4',
    desc: '테스트용 블로그글 입니당.'
  },
  {
    title: '테스트용5',
    desc: '테스트용2 블로그글 입니당.'
  },
  {
    title: '테스트용6',
    desc: '테스트용3 블로그글 입니당.'
  },
];

const HomePage = () => {
  return (
    <Content>
      {articleList.map((article, idx) => (
        <ArticlePreview
          key={article.title + idx}
          title={article.title}
          desc={article.desc}
        />
      ))}
    </Content>
  );
};

export default HomePage;

const Content = styled.div``;
