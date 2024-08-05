import React from 'react';
import { action } from '@storybook/addon-actions';
import Task from './task';

export default {
  component: Task, // component: 구성 요소 그 자체 (ex: Task)
  title: 'Task', // title : 스토리북 좌측 트리메뉴에 표기될 스토리 명
  // Data 로 끝나는 export 항목은 stories export 대상이 아님을 표기
  excludeStories: /.*Data$/, // excludeStories : 스토리 렌더링 대상에서 미포함 될 대상
};

// base data (위에서 생성한 Task 컴포넌트의 state)
export const taskData = {
  id: 1,
  title: 'Test Task',
  state: 'TASK_INBOX',
  updateAt: new Date(2018, 0, 1, 9, 0),
};

export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTast'),
};

/**
 * Task 컴포넌트의 유형별 테스트 state 작성
 * 1. 기본
 * 2. pinned 된 task (상단 고정)
 * 3. 완료된 task
 */
export const Default = () => <Task task={{ ...taskData }} {...actionsData} />;
export const Pinned = () => (
  <Task task={{ ...taskData, state: 'TASK_PINNED' }} {...actionsData} />
);
export const Archived = () => (
  <Task task={{ ...taskData, state: 'TASK_ARCHIVED' }} {...actionsData} />
);

////////////////////////////////////////////////////////////

// import { fn } from '@storybook/test';
// import Task from './task';

// export const ActionsData = {
//   onArchiveTask: fn(),
//   onPinTask: fn(),
// };

// export default {
//   component: Task, // component: 구성 요소 그 자체 (ex: Task)
//   title: 'Task', // title : 스토리북 좌측 트리메뉴에 표기될 스토리 명
//   tags: ['autodocs'],
//   excludeStories: /.*Data$/, // excludeStories : 스토리 렌더링 대상에서 미포함 될 대상
//   args: {
//     ...ActionsData,
//   },
// };

// export const Default = {
//   args: {
//     task: {
//       id: '1',
//       title: 'Test Task',
//       state: 'TASK_INBOX',
//     },
//   },
// };

// export const Pinned = {
//   args: {
//     task: {
//       ...Default.args.task,
//       state: 'TASK_PINNED',
//     },
//   },
// };

// export const Archived = {
//   args: {
//     task: {
//       ...Default.args.task,
//       state: 'TASK_ARCHIVED',
//     },
//   },
// };
