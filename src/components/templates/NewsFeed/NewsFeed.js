import React, { useEffect, useState } from 'react';
import { MainWrapper } from 'assets/styles/GlobalStyledComponents/MainWrapper.style';
import { Button } from 'components/atoms/Button/Button';
import { Wrapper, NewsSectionHeader, TitleWrapper, ContentWrapper } from './NewsFeed.styles';
import axios from 'axios';

export const query = `
{
  allArticles {
    id
    title
    category
    content
    image {
      url
    }
  }
}
  `;

const NewsFeed = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .post(
        'https://graphql.datocms.com/',
        {
          query,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
          },
        }
      )
      .then(({ data: { data } }) => {
        setArticles(data?.allArticles || []);
      })
      .catch(() => {
        setError('Sorry, we could not load news feed for you');
      });
  }, []);

  return (
    <Wrapper>
      <NewsSectionHeader>University news feed</NewsSectionHeader>
      {articles.length > 0 ? (
        articles.map(({ title, category, content, image = null }) => (
          <MainWrapper key={title}>
            <TitleWrapper>
              <h3>{title}</h3>
              <p>{category}</p>
            </TitleWrapper>
            <ContentWrapper>
              <p>{content}</p>
              {image ? <img src={image.url} alt={title} /> : null}
            </ContentWrapper>
            <Button isBig>Read more</Button>
          </MainWrapper>
        ))
      ) : (
        <NewsSectionHeader>{error ? error : 'Loading...'}</NewsSectionHeader>
      )}
    </Wrapper>
  );
};

export default NewsFeed;
