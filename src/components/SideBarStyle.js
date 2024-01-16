import styled from 'styled-components';
export const SidebarBlock = styled.div`
  height: 100%;
  padding: 240px 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
export const SidebarList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SidebarItem = styled.div`
  width: 250px;
  height: 150px;

  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;
export const SidebarLink = styled.a`
  width: 100%;
  height: 100%;
`;
export const SidebarImg = styled.img`
  width: 100%;
  height: auto;
`;
export const SidebarPersonal = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-end;
padding: 12px 0 15px 0;
}
`;

export const SidebarPersonalName = styled.p`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #ffffff;
margin-right: 16px;
}
`;
export const SidebarAvatar = styled.p`
width: 43px;
height: 43px;
background-color: #313131;
border-radius: 50%;
}
`;