import styled from '@emotion/styled'

export const AboutBackground = styled.div`
  position: absolute;
  background: #171717;
  width: 100%;
  height: 80%;
`;

export const RotateDivider = styled.div`
  transform: translateX(-5%) rotateZ(-3deg);
  width: 110%;
  background: #23262b;
  height: 90%;
`;

export const Inner = styled.div`
  ${tw('w-full xxl:w-5/6 text-center lg:text-left')};
  margin: auto;
`;

export const Title = styled.h1`
  ${tw('text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white mb-8 tracking-wide relative inline-block')};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;
