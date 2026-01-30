import Box from '@mui/material/Box';
import { ProductGrid } from '../../../components/gallery/ProductGrid';

export default {
  title: 'Custom Component/Gallery/ProductGrid',
  component: ProductGrid,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## ProductGrid

모든 제품을 그리드 형태로 표시하는 컴포넌트.
MUI Grid와 ProductCard를 활용하여 반응형 제품 목록을 렌더링합니다.

### 반응형 Breakpoint
| Breakpoint | 열 개수 |
|------------|--------|
| xs (모바일) | 2열 |
| sm (태블릿 세로) | 2열 |
| md (태블릿 가로) | 3열 |
| lg (데스크톱) | 4열 |
        `,
      },
    },
  },
  argTypes: {
    columns: {
      control: { type: 'number', min: 2, max: 6 },
      description: '데스크톱 기준 열 개수',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '4' },
      },
    },
    spacing: {
      control: { type: 'number', min: 1, max: 8 },
      description: '그리드 간격',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '3' },
      },
    },
    onProductClick: {
      action: 'productClicked',
      description: '제품 클릭 시 호출되는 함수',
      table: {
        type: { summary: '(product) => void' },
      },
    },
  },
};

/** 기본 ProductGrid - 4열 */
export const Default = {
  args: {
    columns: 4,
    spacing: 3,
  },
};

/** 2열 레이아웃 */
export const TwoColumns = {
  args: {
    columns: 2,
    spacing: 3,
  },
};

/** 3열 레이아웃 */
export const ThreeColumns = {
  args: {
    columns: 3,
    spacing: 3,
  },
};

/** 간격 조절 */
export const SpacingVariants = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <Box>
        <Box sx={{ mb: 2, fontWeight: 600 }}>spacing: 1</Box>
        <ProductGrid columns={4} spacing={1} />
      </Box>
      <Box>
        <Box sx={{ mb: 2, fontWeight: 600 }}>spacing: 4</Box>
        <ProductGrid columns={4} spacing={4} />
      </Box>
    </Box>
  ),
};
