import { Box, styled, Typography } from '@mui/material';
import { NAV_DATA } from '../../shared';

const Component = styled(Box)`
  display: flex;
  margin: 55px 130px 0 130px;
  justify-content: space-between;
`;
const Container = styled(Box)`
  padding: 12px 8px;
  text-align: center;
`;
const Text = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
  font-family: inherit;
`;
export const NavBar = () => {
  return (
    <Component>
      {NAV_DATA.map(({ url, text }) => {
        return (
          <Container>
            <img src={url} alt='Nav' style={{ width: 64 }} />
            <Text>{text}</Text>
          </Container>
        );
      })}
    </Component>
  );
};
