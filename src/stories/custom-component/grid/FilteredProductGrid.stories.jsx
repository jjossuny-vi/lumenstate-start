import { FilteredProductGrid } from '../../../components/grid/FilteredProductGrid';

export default {
  title: 'Custom Component/Grid/FilteredProductGrid',
  component: FilteredProductGrid,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## FilteredProductGrid

카테고리 필터와 제품 그리드가 결합된 컴포넌트.
좌측에 수직 탭 필터, 우측에 필터링된 제품 그리드를 표시합니다.

### 구조
- **좌측**: 카테고리 필터 (수직 탭)
- **우측**: 필터링된 제품 그리드

### 카테고리
- All: 전체 보기
- Ceiling: 천장 조명
- Stand: 스탠드 조명
- Wall: 벽 조명
- Desk: 데스크 조명
        `,
      },
    },
  },
  argTypes: {
    defaultCategory: {
      control: 'select',
      options: ['all', 'ceiling', 'stand', 'wall', 'desk'],
      description: '초기 선택 카테고리',
      table: {
        type: { summary: "'all' | 'ceiling' | 'stand' | 'wall' | 'desk'" },
        defaultValue: { summary: 'all' },
      },
    },
    columns: {
      control: { type: 'number', min: 2, max: 6 },
      description: '데스크톱 기준 열 개수',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '4' },
      },
    },
    onProductClick: {
      action: 'productClicked',
      description: '제품 클릭 시 호출되는 함수',
      table: {
        type: { summary: '(product) => void' },
      },
    },
    onCategoryChange: {
      action: 'categoryChanged',
      description: '카테고리 변경 시 호출되는 함수',
      table: {
        type: { summary: '(category) => void' },
      },
    },
  },
};

/** 기본 FilteredProductGrid */
export const Default = {
  args: {
    defaultCategory: 'all',
    columns: 4,
  },
};

/** Ceiling 카테고리 선택 */
export const CeilingSelected = {
  args: {
    defaultCategory: 'ceiling',
    columns: 4,
  },
};

/** Wall 카테고리 선택 */
export const WallSelected = {
  args: {
    defaultCategory: 'wall',
    columns: 4,
  },
};

/** 3열 레이아웃 */
export const ThreeColumns = {
  args: {
    defaultCategory: 'all',
    columns: 3,
  },
};
