import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { ProductCard } from '../card/ProductCard';
import { products } from '../../data/products';

/**
 * ProductGrid 컴포넌트
 *
 * 모든 제품을 그리드 형태로 표시하는 컴포넌트.
 * MUI Grid와 ProductCard를 활용하여 반응형 제품 목록을 렌더링한다.
 *
 * 동작 방식:
 * 1. products 데이터에서 모든 제품 정보를 가져옴
 * 2. MUI Grid로 반응형 레이아웃 구성
 * 3. 각 제품을 ProductCard로 렌더링
 *
 * Props:
 * @param {number} columns - 데스크톱 기준 열 개수 [Optional, 기본값: 4]
 * @param {number} spacing - 그리드 간격 [Optional, 기본값: 3]
 * @param {function} onProductClick - 제품 클릭 시 호출되는 함수 (product) => void [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <ProductGrid
 *   columns={4}
 *   spacing={2}
 *   onProductClick={(product) => console.log(product)}
 * />
 */
const ProductGrid = forwardRef(function ProductGrid({
  columns = 4,
  spacing = 3,
  onProductClick,
  sx,
  ...props
}, ref) {
  /**
   * 반응형 열 개수 계산
   * - xs: 2열 (모바일)
   * - sm: 2열 (태블릿 세로)
   * - md: 3열 (태블릿 가로)
   * - lg: columns 값 적용 (데스크톱)
   */
  const getGridSize = () => ({
    xs: 6,
    sm: 6,
    md: 4,
    lg: 12 / columns,
  });

  return (
    <Box ref={ref} sx={sx} {...props}>
      <Grid container columnSpacing={2} rowSpacing={6}>
        {products.map((product) => (
          <Grid key={product.id} size={getGridSize()}>
            <ProductCard
              title={product.title}
              imageSrc={product.images[0]}
              type={product.type}
              lux={product.lux}
              kelvin={product.kelvin}
              onClick={onProductClick ? () => onProductClick(product) : undefined}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
});

export { ProductGrid };
