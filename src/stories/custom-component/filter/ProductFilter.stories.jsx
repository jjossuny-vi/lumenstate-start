import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ProductFilter } from '../../../components/filter/ProductFilter';

export default {
  title: 'Custom Component/Filter/ProductFilter',
  component: ProductFilter,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## ProductFilter

제품 카테고리를 필터링하는 수직 탭 컴포넌트.
MUI Tabs vertical 모드를 사용하여 카테고리 선택 UI를 제공합니다.

### 카테고리
- **All**: 전체 보기
- **Ceiling**: 천장 조명
- **Stand**: 스탠드 조명
- **Wall**: 벽 조명
- **Desk**: 데스크 조명
        `,
      },
    },
  },
  argTypes: {
    value: {
      control: 'select',
      options: ['all', 'ceiling', 'stand', 'wall', 'desk'],
      description: '선택된 카테고리',
      table: {
        type: { summary: "'all' | 'ceiling' | 'stand' | 'wall' | 'desk'" },
        defaultValue: { summary: 'all' },
      },
    },
    onChange: {
      action: 'changed',
      description: '카테고리 변경 시 호출되는 함수',
      table: {
        type: { summary: '(value) => void' },
      },
    },
  },
};

/** 기본 ProductFilter */
export const Default = {
  args: {
    value: 'all',
  },
};

/** 인터랙티브 예시 */
export const Interactive = {
  render: () => {
    const [selected, setSelected] = useState('all');

    return (
      <Box sx={{ display: 'flex', gap: 4 }}>
        <ProductFilter
          value={selected}
          onChange={(value) => setSelected(value)}
        />
        <Box sx={{ p: 2, bgcolor: 'grey.100', borderRadius: 1, minWidth: 200 }}>
          <Typography variant="body2" color="text.secondary">
            선택된 카테고리:
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 600, mt: 0.5 }}>
            {selected.toUpperCase()}
          </Typography>
        </Box>
      </Box>
    );
  },
};

/** 각 카테고리 선택 상태 */
export const SelectedStates = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 4 }}>
      <Box>
        <Typography variant="caption" sx={{ mb: 1, display: 'block' }}>All</Typography>
        <ProductFilter value="all" />
      </Box>
      <Box>
        <Typography variant="caption" sx={{ mb: 1, display: 'block' }}>Ceiling</Typography>
        <ProductFilter value="ceiling" />
      </Box>
      <Box>
        <Typography variant="caption" sx={{ mb: 1, display: 'block' }}>Stand</Typography>
        <ProductFilter value="stand" />
      </Box>
      <Box>
        <Typography variant="caption" sx={{ mb: 1, display: 'block' }}>Wall</Typography>
        <ProductFilter value="wall" />
      </Box>
      <Box>
        <Typography variant="caption" sx={{ mb: 1, display: 'block' }}>Desk</Typography>
        <ProductFilter value="desk" />
      </Box>
    </Box>
  ),
};
