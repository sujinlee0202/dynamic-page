"use client";

import Image from "next/image";
import Header from "../components/Header";
import styled from "styled-components";

import image from "../../../public/newyork.jpg";

const MainPage = () => {
  return (
    <Wrap>
      <Header />
      <SectionnWrapper>
        <Section>
          <SectionRight>
            <H3>나만의 스마트한 브라우저</H3>
            <h1>네이버 웨일로 일상을 바꿔보세요.</h1>
            <p>
              더 가볍게, 더 편하게, 내 일상에 딱 맞는 브라우저가 여기 있습니다.
              새로운 인터넷으로 하루를 열어 보세요. 작지만 큰 변화가 시작됩니다.
            </p>
            <button>웨일 다운로드</button>
          </SectionRight>
          <ImageWrapper>
            <Image src={image} alt='newyork' />
          </ImageWrapper>
        </Section>
      </SectionnWrapper>
    </Wrap>
  );
};
export default MainPage;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

const SectionnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
`;

const Section = styled.section`
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  &:first-of-type {
    padding-top: 60px;
  }
`;

const SectionRight = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  & > img {
    border-radius: 100%;
    flex: 1;
    max-width: 100%;
    height: auto;
    aspect-ratio: 1 / 1;
    object-fit: cover;
  }
`;

const H3 = styled.h3`
  color: rgb(33, 135, 236);
`;
