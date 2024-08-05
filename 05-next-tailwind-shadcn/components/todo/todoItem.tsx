import React from 'react';
import PropTypes from 'prop-types';
import { FaRegStar, FaStar, FaRegTrashAlt } from 'react-icons/fa'; // 아이콘 관련 라이브러리
// import './TaskItem.scss';

interface TaskProps {
  idx: number;
  content: string;
  archive: boolean;
  pinned: boolean;
}

export interface TodoProps {
  task: TaskProps;
  onPinTask: () => void;
  onArchiveTask: () => void;
  onRemoveTask: () => void;
}

const Todo: React.FC<TodoProps> = ({
  task: { idx, content, archive, pinned }, // 과제 정보
  onPinTask, // 과제 핀 설정 함수
  onArchiveTask, // 과제 완료 설정 함수
  onRemoveTask, // 과제 삭제 함수
}) => {
  const onArchive = (e: React.MouseEvent<HTMLDivElement>) => {
    onArchiveTask();
    e.stopPropagation();
  };

  const onPin = (e: React.MouseEvent<HTMLDivElement>) => {
    onPinTask();
    e.stopPropagation();
  };

  const onRemove = (e: React.MouseEvent<HTMLDivElement>) => {
    onRemoveTask();
    e.stopPropagation();
  };

  return (
    <div className={'Task-container'} onClick={onArchive}>
      <div className={'Task'}>
        <div className={`Task-content`}>
          {archive ? (
            <>
              <span className={'Task-content-fin'}>{content}</span>
              <span className={'Task-content-fin-icon'}>finish</span>
            </>
          ) : (
            <span>{content}</span>
          )}
        </div>

        <div className={'Task-pin'} onClick={onPin}>
          {pinned ? (
            <FaStar className={'Task-pin-iconDone'} />
          ) : (
            <FaRegStar className={'Task-pin-icon'} />
          )}
        </div>

        <div className={'Task-remove'} onClick={onRemove}>
          <FaRegTrashAlt className={'Task-remove-icon'} />
        </div>
      </div>
    </div>
  );
};

export default Todo;
