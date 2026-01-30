import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { PRODUCT_TYPES } from '../../data/products';

/**
 * ProductFilter 컴포넌트
 *
 * 제품 카테고리를 필터링하는 수직 탭 컴포넌트.
 * MUI Tabs vertical 모드를 사용하여 카테고리 선택 UI를 제공한다.
 *
 * 동작 방식:
 * 1. 전체(All) + 4개 카테고리 탭 표시
 * 2. 탭 클릭 시 onChange 콜백 호출
 * 3. 선택된 카테고리 값 전달
 *
 * Props:
 * @param {string} value - 선택된 카테고리 값 ('all' | 'ceiling' | 'stand' | 'wall' | 'desk') [Optional, 기본값: 'all']
 * @param {function} onChange - 카테고리 변경 시 호출되는 함수 (value) => void [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <ProductFilter
 *   value={selectedCategory}
 *   onChange={(value) => setSelectedCategory(value)}
 * />
 */
const ProductFilter = forwardRef(function ProductFilter({
  value = 'all',
  onChange,
  sx,
  ...props
}, ref) {
  /**
   * 카테고리 목록
   * - all: 전체 보기
   * - ceiling, stand, wall, desk: 제품 타입
   */
  const categories = [
    { value: 'all', label: 'All' },
    { value: PRODUCT_TYPES.CEILING, label: 'Ceiling' },
    { value: PRODUCT_TYPES.STAND, label: 'Stand' },
    { value: PRODUCT_TYPES.WALL, label: 'Wall' },
    { value: PRODUCT_TYPES.DESK, label: 'Desk' },
  ];

  /**
   * 탭 변경 핸들러
   */
  const handleChange = (event, newValue) => {
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <Box ref={ref} sx={sx} {...props}>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
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
  );
});

export { ProductFilter };
