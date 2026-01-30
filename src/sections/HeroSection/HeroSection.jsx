import { forwardRef, useRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import LineGrid from '../../components/layout/LineGrid';
import VideoScrubbing from '../../components/media/VideoScrubbing';
import { content } from '../../data/content';

/**
 * HeroSection 컴포넌트
 *
 * 브랜드 메시지와 제품 분위기를 전달하는 히어로 섹션.
 * LineGrid를 활용한 2열 구성으로, 양쪽 컬럼에 비디오 배경을 적용한다.
 *
 * 동작 방식:
 * 1. 좌측 컬럼: 브랜드 타이틀과 서브타이틀 표시, 비디오 배경
 * 2. 우측 컬럼: 빈 공간, 비디오 배경
 * 3. 두 컬럼 사이에 LineGrid의 1px 라인 표시
 *
 * Props:
 * @param {string} title - 히어로 타이틀 [Optional, 기본값: content.hero.title]
 * @param {string} subtitle - 히어로 서브타이틀 [Optional, 기본값: content.hero.subtitle]
 * @param {string} leftVideo - 좌측 컬럼 배경 비디오 URL [Optional, 기본값: content.hero.videos.row1Col1]
 * @param {string} rightVideo - 우측 컬럼 배경 비디오 URL [Optional, 기본값: content.hero.videos.row1Col2]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <HeroSection />
 * <HeroSection title="Custom Title" subtitle="Custom Subtitle" />
 */
const HeroSection = forwardRef(function HeroSection({
  title = content.hero.title,
  subtitle = content.hero.subtitle,
  leftVideo = content.hero.videos.row1Col1,
  rightVideo = content.hero.videos.row1Col2,
  sx,
  ...props
}, ref) {
  const containerRef = useRef(null);

  /**
   * 비디오 스크러빙 공통 스타일
   */
  const videoScrubbingStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  /**
   * 좌측 컬럼 스타일 (landscape 비디오 - 16:9 비율)
   */
  const leftColumnStyle = {
    position: 'relative',
    aspectRatio: '16 / 9',
    overflow: 'hidden',
  };

  /**
   * 우측 컬럼 스타일 (product 비디오 - 9:16 비율)
   */
  const rightColumnStyle = {
    position: 'relative',
    aspectRatio: '9 / 16',
    overflow: 'hidden',
  };

  return (
    <Box ref={(node) => {
      containerRef.current = node;
      if (typeof ref === 'function') ref(node);
      else if (ref) ref.current = node;
    }} sx={{ width: '100%', ...sx }} {...props}>
      <LineGrid container gap={0}>
        {/* 좌측 컬럼: 타이틀 + 서브타이틀 (2:1 비율 중 2) */}
        <Grid size={{ xs: 12, md: 8 }} sx={leftColumnStyle}>
          {/* 비디오 배경 - 스크롤에 따라 재생 */}
          <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
            <VideoScrubbing
              src={leftVideo}
              containerRef={containerRef}
              startInView
              ratio="16/9"
              sx={videoScrubbingStyle}
            />
          </Box>
          {/* 오버레이 (가독성 향상) */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              bgcolor: 'rgba(0, 0, 0, 0.3)',
              zIndex: 1,
            }}
          />
          {/* 콘텐츠 */}
          <Box
            sx={{
              position: 'relative',
              zIndex: 2,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              p: 6,
            }}
          >
            <Typography
              variant="h1"
              sx={{
                color: 'common.white',
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 400,
                mb: 2,
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: 'common.white',
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 300,
                opacity: 0.9,
              }}
            >
              {subtitle}
            </Typography>
          </Box>
        </Grid>

        {/* 우측 컬럼: 빈 공간 + 비디오 배경 (2:1 비율 중 1) */}
        <Grid size={{ xs: 12, md: 4 }} sx={rightColumnStyle}>
          {/* 비디오 배경 - 스크롤에 따라 재생 */}
          <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
            <VideoScrubbing
              src={rightVideo}
              containerRef={containerRef}
              startInView
              ratio="9/16"
              sx={videoScrubbingStyle}
            />
          </Box>
        </Grid>
      </LineGrid>
    </Box>
  );
});

export { HeroSection };
