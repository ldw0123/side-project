import { TodoType } from '../../types/TodoType';
import { useState } from 'react';

interface TodoListProps {
  initialTodo: TodoType[];
  updateTodo: (id: number, newText: string) => void;
  deleteTodo: (id: number) => void;
  updateTodoState: (id: number, newState: string) => void; // todo가 done인지, notstart인지
}

export default function TodoList({
  initialTodo,
  updateTodo,
  deleteTodo,
  updateTodoState,
}: TodoListProps) {
  const [isEditing, setIsEditing] = useState<number | null>(null); // 수정 모드인지 나타내는 상태
  const [editingText, setEditingText] = useState('');

  // Todo 항목의 텍스트를 클릭할 때 호출
  const handleEditClick = (id: number, text: string) => {
    setIsEditing(id);
    setEditingText(text);
  };

  // input창에 값을 입력할 때마다 호출. 입력 필드의 값을 가져와서 editingText 상태 변수에 업데이트
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditingText(e.target.value);
    console.log(e.target.value);
  };

  // 변경 사항을 저장하고 수정을 종료
  const handleSaveClick = (id: number) => {
    updateTodo(id, editingText);
    setIsEditing(null);
  };

  // 수정 취소
  const handleCancelClick = () => {
    setIsEditing(null);
  };

  // 토글
  const toggleTodo = (id: number) => {
    const item = initialTodo.find((todo) => todo.id === id);
    if (item) {
      const newState = item.state === 'done' ? 'notstart' : 'done';
      updateTodoState(id, newState);
    }
  };

  return (
    <ul className="mt-7 ml-4">
      {initialTodo.map((item) => (
        <>
          <li key={item.id} className="flex items-center mt-3">
            {/* 토글 버튼 */}
            <button onClick={() => toggleTodo(item.id)} className="mr-1">
              {/* todo 토글 버튼 */}
              {item.state === 'done' ? (
                <span
                  className=""
                  onClick={() => {
                    updateTodo(item.id, item.text);
                  }}
                >
                  {/* 체크 버튼 */}
                  <i className="bi bi-check-circle-fill"></i>
                </span>
              ) : (
                <span
                  className=""
                  onClick={() => {
                    updateTodo(item.id, item.text);
                  }}
                >
                  {/* O 버튼 */}
                  <i className="bi bi-circle"></i>
                </span>
              )}
            </button>

            {/* 각 Todo 항목에서 수정 버튼을 클릭하면, handleEditClick 함수가 호출되어 해당 항목의 isEditing 상태가 true로 변경되고, 입력 필드가 렌더링된다(편집 모드로 전환)
              입력 필드에서 변경 사항을 저장하거나 취소하면, isEditing 상태가 null로 변경되어 다시 텍스트 모드로 전환된다 */}
            {isEditing === item.id ? (
              <div className="flex items-center">
                <input
                  type="text"
                  value={editingText}
                  onChange={handleInputChange}
                  className="mr-2 rounded-md "
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleSaveClick(item.id);
                    }
                  }}
                />
                <button onClick={() => handleSaveClick(item.id)}>저장</button>
                <button onClick={handleCancelClick} className="ml-2">
                  취소
                </button>
              </div>
            ) : (
              <div className="flex items-center">
                {/* item.state가 done 이라면 취소선 */}
                <span
                  className={`${item.state === 'done' ? 'line-through' : ''}`}
                >
                  {item.text}
                </span>
                <button
                  onClick={() => handleEditClick(item.id, item.text)}
                  className="flex absolute right-14"
                >
                  {/* 수정 버튼 */}
                  <i className="bi bi-pencil-fill"></i>
                </button>
              </div>
            )}
            <span className="flex absolute right-5">
              <button onClick={() => deleteTodo(item.id)} className="ml-3">
                {/* 삭제 버튼 */}
                <i className="bi bi-trash-fill"></i>
              </button>
            </span>
          </li>
        </>
      ))}
    </ul>
  );
}
