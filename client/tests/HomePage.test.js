import React from 'react';
import { render } from '@testing-library/react';
import HomePage from '../src/pages/home/Home'; // Đảm bảo bạn nhập đúng đường dẫn đến trang HomePage

test('renders HomePage without errors', () => {
  render(<HomePage />);
});
