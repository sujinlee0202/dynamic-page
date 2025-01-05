"use client";

import styled from "styled-components";

const Header = () => {
  const menu = ["제품소개", "회사소개", "고객지원"];

  return (
    <Wrap>
      <Container>
        <div>로고</div>
        <Menu>
          {menu.map((menu, index) => (
            <div key={index}>{menu}</div>
          ))}
        </Menu>
        <div>메뉴</div>
      </Container>
    </Wrap>
  );
};
export default Header;

const Wrap = styled.header`
  background-color: #f8f9fa;
  position: fixed;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  width: 100%;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;
