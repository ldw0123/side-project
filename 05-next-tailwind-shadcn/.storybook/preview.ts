import type { Preview } from '@storybook/react';
import '../app/globals.css'; // tailwind css 연동을 위해 global.css 파일을 import

const preview: Preview = {
  // parameters는 스토리에 대한 메타데이터 정보들, 주로 스토리북 feature와 addon에 대한 설정
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
