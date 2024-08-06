import React from 'react';
import { FaRegStar, FaStar, FaRegTrashAlt } from 'react-icons/fa'; // 아이콘 관련 라이브러리

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
  task: { content, archive, pinned }, // 과제 정보
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
    <div
      className="cursor-pointer p-4 border-b-[1px] border-[#737373]"
      onClick={onArchive}
    >
      <div className="select-none color-[#fafafa] text-[0.9rem]">
        <div className="flex flex-row">
          <div className="flex-[1] overflow-hidden text-ellipsis text-nowrap">
            {archive ? (
              <>
                <span className="line-through">{content}</span>
                <span className="m-0 mr-[0.8rem] ml-[0.8rem] rounded-[8px] bg-[#15859e] text-[#fff]">
                  finish
                </span>
              </>
            ) : (
              <span>{content}</span>
            )}
          </div>

          <div className="flex justify-center items-center" onClick={onPin}>
            {pinned ? (
              <FaStar className="mr-4 text-[#45cae7]" />
            ) : (
              <FaRegStar className="mr-4 text-[#45cae7]" />
            )}
          </div>

          <div className="flex justify-center items-center" onClick={onRemove}>
            <FaRegTrashAlt className="text-[#FF6347]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
