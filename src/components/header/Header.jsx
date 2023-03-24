import { AppBar, Toolbar, Box, Typography, styled } from '@mui/material';
import { logoURL, subURL } from '../../shared';
import { CustomButton, Search } from '../../components';

const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 55px;
`;
const Component = styled(Box)`
  margin-left: 12%;
  line-height: 0;
`;
const SubHeading = styled(Typography)`
  font-size: 10px;
  font-style: italic;
`;
const PlusImage = styled(`img`)({
  width: 10,
  height: 10,
  marginLeft: 4,
});
const CustomButtonWrapper = styled(Box)`
  margin: 0 5% 0 auto;
`;
export const Header = () => {
  return (
    <StyledHeader>
      <Toolbar style={{ minHeight: 55 }}>
        <Component>
          <img src={logoURL} alt='Logo' style={{ width: 75 }} />
          <Box style={{ display: 'flex' }}>
            <SubHeading>
              Explore
              <Box component='span' style={{ color: '#ffe500' }}>
                {' '}
                Plus
              </Box>
            </SubHeading>
            <PlusImage src={subURL} alt='Sub Logo'></PlusImage>
          </Box>
        </Component>
        <Search />
        <CustomButtonWrapper>
          <CustomButton />
        </CustomButtonWrapper>
      </Toolbar>
    </StyledHeader>
  );
};
