import Carousel from 'react-multi-carousel';
import { styled } from '@mui/material';

import { BANNER_DATA, RESPONSIVE } from '../../shared';

import 'react-multi-carousel/lib/styles.css';

const Image = styled('img')({
  width: '100%',
  height: 280,
});

export const Banner = () => {
  return (
    <Carousel
      infinite={true}
      autoPlay={true}
      swipeable={false}
      draggable={false}
      slidesToSlide={1}
      autoPlaySpeed={3000}
      responsive={RESPONSIVE}
      dotListClass='custom-dot-list-style'
      itemClass='carousel-item-padding-40-px'
      containerClass='carousel-container'
    >
      {BANNER_DATA.map(({ url }) => (
        <Image src={url} alt='Banner Image' />
      ))}
    </Carousel>
  );
};
