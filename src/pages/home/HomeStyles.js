import styled from 'styled-components';

export const Wrapper = styled.div`
width: 100%;
min-height: 100%;
overflow: hidden;
background-color: #383838;
`;

export const Container = styled.div`
max-width: 1920px;
height: 100vh;
margin: 0 auto;
position: relative;
background-color: #181818;

`;

export const Main = styled.main`
flex: 1 1 auto;
display: flex;
flex-wrap: wrap;
justify-content: space-between;

`;
export const MainCenterblock = styled.main`
width: auto;
flex-grow: 3;
padding: 20px 40px 20px 111px;
`;

export const CenterblockH2 = styled.h2`
font-style: normal;
font-weight: 400;
font-size: 64px;
line-height: 72px;
letter-spacing: -0.8px;
margin-bottom: 45px;
`;

export const CenterblockContent = styled.div`
display: flex;
flex-direction: column;
`;

export const MainSidebar = styled.div`
max-width: 418px;
padding: 20px 90px 20px 78px;
`;

export const Bar = styled.div`
position: absolute;
bottom: 0;
left: 0;
width: 100%;
background: rgba(28, 28, 28, 0.5);
`;