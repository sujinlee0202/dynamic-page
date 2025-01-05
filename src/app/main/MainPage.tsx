"use client";

import Image from "next/image";
import Header from "../components/Header";
import styled from "styled-components";
import { useInView } from "framer-motion";

import image from "../../../public/newyork.jpg";
import { useRef } from "react";

const MainPage = () => {
  const sectionData = [
    {
      sectionId: 1,
      title: "나만의 스마트한 브라우저",
      description: "네이버 웨일로 일상을 바꿔보세요.",
      content:
        "더 가볍게, 더 편하게, 내 일상에 딱 맞는 브라우저가 여기 있습니다. 새로운 인터넷으로 하루를 열어 보세요. 작지만 큰 변화가 시작됩니다.",
      ref: useRef(null),
      buttonText: "웨일 다운로드",
    },
    {
      sectionId: 2,
      title: "오늘 할 일도 빠르게",
      description: "시간 걱정 없는 화상회의 웨일온",
      content:
        "별도 애플리케이션 설치 없이 네이버 웨일만 있으면 바로 사용할 수 있는 온라인 화상회의 서비스입니다. PC와 모바일 어디서나 시간 제한 없이 편리하게 회의에 참여하세요.",
      ref: useRef(null),
      buttonText: "자세히 보기",
    },
    {
      sectionId: 3,
      title: "오늘 할 일도 빠르게",
      description: "가볍게 열고 닫는 사이드바",
      content:
        "사이드바에는 나에게 필요한 다양한 서비스가 있습니다. 메인 화면을 방해하지 않으면서 그때그때 필요한 서비스를 가볍게 열어 보세요.",
      ref: useRef(null),
      buttonText: "자세히 보기",
    },
    {
      sectionId: 4,
      title: "오늘 할 일도 빠르게",
      description: "깔끔한 캡처와 간단한 편집",
      content:
        "4개의 옵션으로 원하는 영역만 깔끔하게 캡쳐하고 간단히 편집해보세요. 단축키를 사용하면 더욱 빠른 캡처가 가능합니다.",
      ref: useRef(null),
      buttonText: "자세히 보기",
    },
  ];

  const inViewState1 = useInView(sectionData[0].ref, { once: true });
  const inViewState2 = useInView(sectionData[1].ref, { once: true });
  const inViewState3 = useInView(sectionData[2].ref, { once: true });
  const inViewState4 = useInView(sectionData[3].ref, { once: true });

  const inViewStates = [inViewState1, inViewState2, inViewState3, inViewState4];

  return (
    <Wrap>
      <Header />
      <SectionnWrapper>
        {/** Vertical Section */}
        {sectionData.map((data, index) =>
          data.sectionId % 2 !== 0 ? (
            // 홀수 섹션
            <Section ref={data.ref} key={index}>
              <SectionRight>
                <H3 $isInView={inViewStates[index]}>{data.title}</H3>
                <H1 $isInView={inViewStates[index]}>{data.description}</H1>
                <Paragraph $isInView={inViewStates[index]}>
                  <p>{data.content}</p>
                  {data.sectionId === 1 ? (
                    // 첫 섹션 버튼 색상 변경
                    <button style={{ backgroundColor: "green" }}>
                      {data.buttonText}
                    </button>
                  ) : (
                    <button>{data.buttonText}</button>
                  )}
                </Paragraph>
              </SectionRight>
              <ImageWrapper $isInView={inViewStates[index]}>
                <Image src={image} alt='newyork' />
              </ImageWrapper>
            </Section>
          ) : (
            // 짝수 섹션
            <Section ref={data.ref} key={index}>
              <ImageWrapper $isInView={inViewStates[index]}>
                <Image src={image} alt='newyork' />
              </ImageWrapper>
              <SectionRight>
                <H3 $isInView={inViewStates[index]}>{data.title}</H3>
                <H1 $isInView={inViewStates[index]}>{data.description}</H1>
                <Paragraph $isInView={inViewStates[index]}>
                  <p>{data.content}</p>
                  <button>{data.buttonText}</button>
                </Paragraph>
              </SectionRight>
            </Section>
          )
        )}
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

const ImageWrapper = styled.div<{ $isInView?: boolean }>`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  opacity: ${({ $isInView }) => ($isInView ? 1 : 0)};
  transform: scale(${({ $isInView }) => ($isInView ? 1 : 0.5)});
  transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0, 0.71, 0.2, 1.01);
  transition-delay: 0.5s;

  & > img {
    border-radius: 100%;
    flex: 1;
    max-width: 100%;
    height: auto;
    aspect-ratio: 1 / 1;
    object-fit: cover;
  }
`;

const H3 = styled.h3<{ $isInView?: boolean }>`
  color: rgb(33, 135, 236);

  transform: ${(props) => (props.$isInView ? "none" : "translateY(50px)")};
  opacity: ${(props) => (props.$isInView ? 1 : 0)};
  transition: all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s;
`;

const H1 = styled.h1<{ $isInView?: boolean }>`
  transform: ${(props) => (props.$isInView ? "none" : "translateY(50px)")};
  opacity: ${(props) => (props.$isInView ? 1 : 0)};
  transition: all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s;
`;

const Paragraph = styled.div<{ $isInView?: boolean }>`
  transform: ${(props) => (props.$isInView ? "none" : "translateY(50px)")};
  opacity: ${(props) => (props.$isInView ? 1 : 0)};
  transition: all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s;
`;
