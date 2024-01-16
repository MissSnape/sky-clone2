import styled , { css } from 'styled-components';


// export const CenterblockFilter = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   margin-bottom: 51px;
//   position: relative;
// `;

// export const FilterTitle = styled.div`
//   font-style: normal;
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 24px;
//   margin-right: 15px;
// `;

// export const FilterButton = styled.div`
//   font-style: normal;
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 24px;
//   border: 1px solid #ffffff;
//   border-radius: 60px;
//   padding: 6px 20px;
//   position: relative;
//   cursor: pointer;
//   &:not(:last-child) {
//     margin-right: 10px;
//   }
// `;

// export const FilterMenuLeft = styled.div`
//   border-radius: 12px;
//   max-width: 250px;
//   max-height: 305px;
//   background: #313131;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   gap: 24px;
//   padding: 34px;
//   overflow: scroll;
//   position: absolute;
//   top: 50px;
//   left: 90px;
// `;

// export const FilterMenuItem = styled.div`
// color: #fff;
// cursor: pointer;
// &:hover {
//   text-decoration: underline;
//   color: #b672ff;
// }
// `;

// export const FilterMenuCenter = styled.div`
//   border-radius: 12px;
//   max-width: 250px;
//   max-height: 305px;
//   background: #313131;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   gap: 24px;
//   padding: 34px;
//   overflow: scroll;
//   position: absolute;
//   top: 50px;
//   left: 250px;
// `;

// export const FilterMenuRight = styled.div`
//   border-radius: 12px;
//   max-width: 250px;
//   max-height: 305px;
//   background: #313131;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   gap: 24px;
//   padding: 34px;
//   overflow: scroll;
//   position: absolute;
//   top: 50px;
//   left: 400px;
// `;


export const CenterblockFilter = styled.div `
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: 51px;
    column-gap: 10px;
  `
export const FilterTitle = styled.div `
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin-right: 15px;
  `
  
 export const FilterButton = styled.button`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    border: 1px solid #ffffff;
    border-radius: 60px;
    padding: 6px 20px;
    background-color: inherit;
    color: #ffffff;
    width: 144px;
    cursor: pointer;
    &:hover {
      border-color: #d9b6ff;
      color: #d9b6ff;
      transition:
        color 0.3s ease,
        border-color 0.3s ease;
      cursor: pointer;
    }
    &:active {
      border-color: #ad61ff;
      color: #ad61ff;
      transition:
      color 0.3s ease,
      border-color 0.3s ease;
      cursor: pointer;
    }
`
export const FilterButtonClick = styled(FilterButton)`
border-color: #ad61ff;
color: #ad61ff;
transition:
color 0.3s ease,
border-color 0.3s ease;
cursor: pointer;
`
  
export const FilterWrap = styled.div `
    position: relative;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  `

  export const FilterLength = styled.div `
    position: absolute;
    width: 26px;
    height: 26px;
    color: #fff;
    background-color: #ad61ff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    top: -13px;
    right: 8px;
  `

  export const FilterMenu = styled.div `
    position: absolute;
    top: 50px;
    width: 248px;
    box-sizing: border-box;
    background-color: #313131;
    border-radius: 12px;
    padding: 34px;
    overflow-y: hidden;
   overflow-x: hidden;
  `

  export const FilterMenuYear = styled(FilterMenu)`
  width: 248px;
  height: 196px;
`

export const FilterMenuAuthor = styled(FilterMenu)`
height: 305px;
overflow-y: scroll;

&::-webkit-scrollbar {
  width: 4px;
}

&::-webkit-scrollbar-track {
  background-color: #4B4949;

}

&::-webkit-scrollbar-thumb {
  background-color: #FFFFFF;
  border-radius: 2px;
  height: 65px;
}
`

const FilterListMixin = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 28px;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;  
}
a {
  color: #fff;
  transition: color 0.3s ease;
}
a:active,
a:hover {
  color: #ad61ff;
  text-decoration: underline;
  transition: color 0.3s ease;
}
`
export const FilterListMenu = styled.ul`
  hio
  height: 305px;
  ${FilterListMixin};
`;
export const FilterListMenuItem = styled.li``

export const FilterListMenuLink = styled.a``

export const FilterListMenuYear = styled.ul`
  ${FilterListMixin};
  align-items: center;
`;