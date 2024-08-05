import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TodoItem, { TodoProps } from './todoItem'; // TodoItem과 그 Props 타입을 가져옴

// Task 타입 정의
interface TaskProps {
  idx: number;
  content: string;
  archive: boolean;
  pinned: boolean;
}

// Test Data
// task 객체: TodoItem 컴포넌트에 전달될 기본 데이터
const task: TaskProps = {
  idx: 1,
  content: '오늘할일',
  archive: false,
  pinned: false,
};

// actions 객체: TodoItem 컴포넌트의 이벤트 핸들러로 사용될 함수들을 정의
// action() 함수: 이벤트가 발생했을 때 Storybook의 액션 패널에 로그를 남긴다
const actions = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
  onRemoveTask: action('onRemoveTask'),
};

// 스토리 추가
export default {
  title: 'TodoItem', // title: 스토리북 컴포넌트의 이름
  component: TodoItem, // component: 스토리북에서 사용할 컴포넌트를 지정
  decorators: [
    // decorators: 스토리에 데코레이터를 추가
    (Story) => (
      // 모든 스토리를 20rem의 패딩이 있는 div로 감싼다
      <div style={{ padding: '0 20rem' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof TodoItem>;

// Template(): TodoItem 컴포넌트의 기본 형태를 정의하는 함수. 이 함수는 args를 받아 TodoItem 컴포넌트에 전달한다
const Template: StoryFn<TodoProps> = (args: TodoProps) => (
  <TodoItem {...args} />
);

// Template.bind({})를 사용하여 템플릿을 복제하고, 각 스토리의 args를 설정하여 컴포넌트에 전달되는 속성을 정의
export const Default = Template.bind({});
Default.args = {
  task,
  ...actions,
};

export const Archived = Template.bind({});
Archived.args = {
  task: { ...task, archive: true },
  ...actions,
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: { ...task, pinned: true },
  ...actions,
};

export const ArchivedAndPinned = Template.bind({});
ArchivedAndPinned.args = {
  task: { ...task, archive: true, pinned: true },
  ...actions,
};
