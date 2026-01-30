import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ProductCard } from '../../../components/card/ProductCard';
import { products } from '../../../data/products';

export default {
  title: 'Custom Component/Card/ProductCard',
  component: ProductCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## ProductCard

제품 정보를 표시하는 카드 컴포넌트.
CustomCard를 기반으로 수직 레이아웃, border/패딩 없는 미니멀한 스타일을 적용합니다.

### 구조
1. **이미지 영역**: 제품 이미지 (원본 비율 유지)
2. **제품 타이틀**: 제품명
3. **카테고리 태그**: 제품 타입 표시 (Ceiling, Stand, Wall, Desk)
4. **메타 정보**: lux, kelvin 스펙 표시 (예: "260 lx · 3200 K")

### 특징
- border 없음 (ghost variant)
- 콘텐츠 패딩 없음
- 수직 레이아웃
- 원본 이미지 비율 유지
        `,
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: '제품명',
      table: {
        type: { summary: 'string' },
      },
    },
    imageSrc: {
      control: 'text',
      description: '제품 이미지 URL',
      table: {
        type: { summary: 'string' },
      },
    },
    imageAlt: {
      control: 'text',
      description: '이미지 대체 텍스트',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    type: {
      control: 'select',
      options: ['ceiling', 'stand', 'wall', 'desk'],
      description: '제품 카테고리',
      table: {
        type: { summary: "'ceiling' | 'stand' | 'wall' | 'desk'" },
      },
    },
    lux: {
      control: 'number',
      description: '조도 값 (lx)',
      table: {
        type: { summary: 'number' },
      },
    },
    kelvin: {
      control: 'number',
      description: '색온도 값 (K)',
      table: {
        type: { summary: 'number' },
      },
    },
    onClick: {
      action: 'clicked',
      description: '클릭 이벤트 핸들러',
      table: {
        type: { summary: 'function' },
      },
    },
  },
};

/** 기본 ProductCard - Controls에서 props 조작 가능 */
export const Default = {
  args: {
    title: products[0].title,
    imageSrc: products[0].images[0],
    type: products[0].type,
    lux: products[0].lux,
    kelvin: products[0].kelvin,
  },
  render: (args) => (
    <ProductCard {...args} sx={{ width: 280 }} />
  ),
};

/** 단일 카드 예시 */
export const SingleCard = {
  render: () => (
    <ProductCard
      title={products[0].title}
      imageSrc={products[0].images[0]}
      type={products[0].type}
      lux={products[0].lux}
      kelvin={products[0].kelvin}
      sx={{ width: 280 }}
    />
  ),
};

/** 카테고리 태그 변형 */
export const CategoryTags = {
  render: () => (
    <Stack direction="row" spacing={3}>
      <ProductCard
        title="Ceiling Type"
        imageSrc={products[0].images[0]}
        type="ceiling"
        lux={260}
        kelvin={3200}
        sx={{ width: 200 }}
      />
      <ProductCard
        title="Stand Type"
        imageSrc={products[1].images[0]}
        type="stand"
        lux={480}
        kelvin={4400}
        sx={{ width: 200 }}
      />
      <ProductCard
        title="Wall Type"
        imageSrc={products[2].images[0]}
        type="wall"
        lux={320}
        kelvin={3800}
        sx={{ width: 200 }}
      />
      <ProductCard
        title="Desk Type"
        imageSrc={products[9].images[0]}
        type="desk"
        lux={280}
        kelvin={3300}
        sx={{ width: 200 }}
      />
    </Stack>
  ),
};

/** 제품 그리드 (3열) */
export const ProductGrid = {
  render: () => (
    <Box sx={{ width: 900 }}>
      <Grid container spacing={3}>
        {products.slice(0, 6).map((product) => (
          <Grid key={product.id} size={{ xs: 6, md: 4 }}>
            <ProductCard
              title={product.title}
              imageSrc={product.images[0]}
              type={product.type}
              lux={product.lux}
              kelvin={product.kelvin}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  ),
};

/** 모든 제품 */
export const AllProducts = {
  render: () => (
    <Box sx={{ width: 1200 }}>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid key={product.id} size={{ xs: 6, sm: 4, md: 3 }}>
            <ProductCard
              title={product.title}
              imageSrc={product.images[0]}
              type={product.type}
              lux={product.lux}
              kelvin={product.kelvin}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  ),
};
