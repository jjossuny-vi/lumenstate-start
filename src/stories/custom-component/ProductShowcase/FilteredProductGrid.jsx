import { forwardRef, useState, useMemo } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { ProductCard } from '../../../components/card/ProductCard';
import { products, PRODUCT_TYPES } from '../../../data/products';

/**
 * FilteredProductGrid 컴포넌트
 *
 * 카테고리 필터와 제품 그리드가 결합된 컴포넌트.
 * 수직 탭으로 카테고리를 선택하면 해당 제품만 그리드에 표시된다.
 *
 * 동작 방식:
 * 1. 좌측에 카테고리 필터 탭 표시 (수직)
 * 2. 우측에 필터링된 제품 그리드 표시
 * 3. 탭 클릭 시 해당 카테고리 제품만 필터링
 *
 * Props:
 * @param {string} defaultCategory - 초기 선택 카테고리 [Optional, 기본값: 'all']
 * @param {number} columns - 데스크톱 기준 열 개수 [Optional, 기본값: 4]
 * @param {function} onProductClick - 제품 클릭 시 호출되는 함수 (product) => void [Optional]
 * @param {function} onCategoryChange - 카테고리 변경 시 호출되는 함수 (category) => void [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <FilteredProductGrid
 *   defaultCategory="all"
 *   columns={4}
 *   onProductClick={(product) => console.log(product)}
 *   onCategoryChange={(category) => console.log(category)}
 * />
 */
const FilteredProductGrid = forwardRef(function FilteredProductGrid({
  defaultCategory = 'all',
  columns = 4,
  onProductClick,
  onCategoryChange,
  sx,
  ...props
}, ref) {
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory);

  /**
   * 카테고리 목록
   */
  const categories = [
    { value: 'all', label: 'All' },
    { value: PRODUCT_TYPES.CEILING, label: 'Ceiling' },
    { value: PRODUCT_TYPES.STAND, label: 'Stand' },
    { value: PRODUCT_TYPES.WALL, label: 'Wall' },
    { value: PRODUCT_TYPES.DESK, label: 'Desk' },
  ];

  /**
   * 필터링된 제품 목록
   */
  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') {
      return products;
    }
    return products.filter((product) => product.type === selectedCategory);
  }, [selectedCategory]);

  /**
   * 카테고리 변경 핸들러
   */
  const handleCategoryChange = (event, newValue) => {
    setSelectedCategory(newValue);
    if (onCategoryChange) {
      onCategoryChange(newValue);
    }
  };

  /**
   * 반응형 열 개수 계산
   */
  const getGridSize = () => ({
    xs: 6,
    sm: 6,
    md: 4,
    lg: 12 / columns,
  });

  return (
    <Box ref={ref} sx={{ display: 'flex', gap: 4, ...sx }} {...props}>
      {/* 카테고리 필터 */}
      <Box sx={{ flexShrink: 0 }}>
        <Tabs
          orientation="vertical"
          value={selectedCategory}
          onChange={handleCategoryChange}
          sx={{
            '& .MuiTabs-indicator': {
              left: 0,
              right: 'auto',
            },
            '& .MuiTab-root': {
              alignItems: 'flex-start',
              textAlign: 'left',
              minHeight: 48,
              px: 2,
            },
          }}
        >
          {categories.map((category) => (
            <Tab
              key={category.value}
              value={category.value}
              label={category.label}
            />
          ))}
        </Tabs>
      </Box>

      {/* 제품 그리드 */}
      <Box sx={{ flex: 1 }}>
        <Grid container columnSpacing={2} rowSpacing={6}>
          {filteredProducts.map((product) => (
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
    </Box>
  );
});

export { FilteredProductGrid };
