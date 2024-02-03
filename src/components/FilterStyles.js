import  styled  from 'styled-components';

export const CenterblockFilter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 51px;
  position: relative;
`;

export const FilterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`;

export const FilterButton = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #ffffff;
  border-radius: 60px;
  padding: 6px 20px;
  position: relative;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const FilterMenuLeft = styled.div`
  border-radius: 12px;
  max-width: 250px;
  max-height: 305px;
  background: #313131;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  padding: 34px;
  overflow: scroll;
  position: absolute;
  top: 50px;
  left: 90px;
`;

export const FilterMenuItem = styled.div`
  color: #fff;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    color: #b672ff;
  }
`;

export const FilterMenuCenter = styled.div`
  border-radius: 12px;
  max-width: 250px;
  max-height: 305px;
  background: #313131;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  padding: 34px;
  overflow: scroll;
  position: absolute;
  top: 50px;
  left: 350px;
`;

export const FilterMenuRight = styled.div`
  border-radius: 12px;
  max-width: 250px;
  max-height: 305px;
  background: #313131;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  padding: 34px;
  overflow: scroll;
  position: absolute;
  top: 50px;
  left: 250px;
`;
