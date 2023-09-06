"use client"
import Spline from '@splinetool/react-spline';

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <div
    className={`relative text-[16px] color-white`}
  >{children}</div>
}

export default function App() {
  return (
    <Wrapper>
      <Spline className={`absolute margin-0 top-0 right-0`} scene="https://prod.spline.design/zbTwaL0-hYYh3vJx/scene.splinecode" />
    </Wrapper>
  );
}
