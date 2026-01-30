import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { CustomCard } from './CustomCard';

/**
 * ProductCard 컴포넌트
 *
 * 제품 정보를 표시하는 카드 컴포넌트.
 * CustomCard를 기반으로 수직 레이아웃, border/패딩 없는 스타일을 적용한다.
 *
 * 동작 방식:
 * 1. 이미지 영역: 제품 이미지를 원본 비율로 표시
 * 2. 제품 타이틀: 제품명을 표시
 * 3. 메타 정보: 카테고리 태그 + lux, kelvin 스펙 표시
 *
 * Props:
 * @param {string} title - 제품명 [Required]
 * @param {string} imageSrc - 제품 이미지 URL [Required]
 * @param {string} imageAlt - 이미지 대체 텍스트 [Optional, 기본값: '']
 * @param {string} type - 제품 카테고리 ('ceiling' | 'stand' | 'wall' | 'desk') [Optional]
 * @param {number} lux - 조도 값 (lx) [Optional]
 * @param {number} kelvin - 색온도 값 (K) [Optional]
 * @param {function} onClick - 클릭 이벤트 핸들러 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <ProductCard
 *   title="Lumen Desk Pro"
 *   imageSrc="/product1.png"
 *   type="ceiling"
 *   lux={260}
 *   kelvin={3200}
 *   onClick={() => console.log('clicked')}
 * />
 */
const ProductCard = forwardRef(function ProductCard({
  title,
  imageSrc,
  imageAlt = '',
  type,
  lux,
  kelvin,
  onClick,
  sx,
  ...props
}, ref) {
  /**
   * 카테고리 라벨 매핑
   */
  const typeLabels = {
    ceiling: 'Ceiling',
    stand: 'Stand',
    wall: 'Wall',
    desk: 'Desk',
  };
  /**
   * 메타 정보 포맷팅
   * - lux와 kelvin 값을 "260 lx · 3200 K" 형식으로 표시
   */
  const formatMeta = () => {
    const parts = [];
    if (lux !== undefined) {
      parts.push(`${lux} lx`);
    }
    if (kelvin !== undefined) {
      parts.push(`${kelvin} K`);
    }
    return parts.join(' · ');
  };

  const metaText = formatMeta();

  return (
    <CustomCard
      ref={ref}
      layout="vertical"
      variant="ghost"
      mediaSrc={imageSrc}
      mediaAlt={imageAlt || title}
      mediaRatio="auto"
      contentPadding="none"
      gap="sm"
      onClick={onClick}
      sx={sx}
      {...props}
    >
      <Box sx={{ pt: 1 }}>
        {/* 카테고리 태그 */}
        {type && (
          <Chip
            label={typeLabels[type] || type}
            size="small"
            color="primary"
            sx={{
              mb: 0.5,
              height: 24,
              fontSize: '0.75rem',
            }}
          />
        )}

        {/* 제품 타이틀 */}
        <Typography
          variant="body1"
          sx={{
            fontWeight: 500,
            lineHeight: 1.4,
          }}
        >
          {title}
        </Typography>

        {/* 메타 정보 (lux · kelvin) */}
        {metaText && (
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              mt: 0.5,
              fontSize: '0.875rem',
            }}
          >
            {metaText}
          </Typography>
        )}
      </Box>
    </CustomCard>
  );
});

export { ProductCard };
