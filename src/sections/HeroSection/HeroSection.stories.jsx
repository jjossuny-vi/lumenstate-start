import { HeroSection } from './HeroSection';

export default {
  title: 'Section/HeroSection',
  component: HeroSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## HeroSection

브랜드 메시지와 제품 분위기를 전달하는 히어로 섹션.
LineGrid를 활용한 2열 구성으로, 양쪽 컬럼에 비디오 배경을 적용합니다.

### 구조
- **좌측 컬럼**: 브랜드 타이틀 + 서브타이틀, 비디오 배경
- **우측 컬럼**: 빈 공간, 비디오 배경
- **구분선**: LineGrid의 1px 라인

### 비디오 소스
- 좌측: landscape-motion.mp4
- 우측: 9-motion.mp4
        `,
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: '히어로 타이틀',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Lumenstate' },
      },
    },
    subtitle: {
      control: 'text',
      description: '히어로 서브타이틀',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Light defines the space.' },
      },
    },
  },
};

/** 기본 HeroSection */
export const Default = {
  args: {},
};

/** 커스텀 타이틀 */
export const CustomTitle = {
  args: {
    title: 'Welcome',
    subtitle: 'Discover the art of light.',
  },
};
