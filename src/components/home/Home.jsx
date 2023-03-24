import { Box, styled } from '@mui/material';

import { Banner, NavBar } from '../../components';

const Component = styled(Box)`
  padding: 10px 10px;
  background: #f2f2f2;
`;
export const Home = () => {
  return (
    <>
      <NavBar />
      <Component>
        <Banner />
      </Component>
    </>
  );
};
