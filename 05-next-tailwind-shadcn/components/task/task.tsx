import PropTypes from 'prop-types';
import './task.css';

interface TaskItem {
  id: number;
  title: string;
  state: string;
}

interface TaskProps {
  task: TaskItem;
  onArchiveTask: (id: number) => void;
  onPinTask: (id: number) => void;
}

export default function Task({
  task: { id, title, state },
  onPinTask,
  onArchiveTask,
}: TaskProps) {
  return (
    <div className={`list-item ${state}`}>
      <label
        htmlFor={`archiveTask-${id}`}
        aria-label={`archiveTask-${id}`}
        className="checkbox"
      >
        <input
          type="checkbox"
          disabled={true}
          name="checked"
          id={`archiveTask-${id}`}
          checked={state === 'TASK_ARCHIVED'}
        />
        <span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
      </label>

      <label htmlFor={`title-${id}`} aria-label={title} className="title">
        <input
          type="text"
          value={title}
          readOnly={true}
          name="title"
          id={`title-${id}`}
          placeholder="Input title"
        />
      </label>
      {state !== 'TASK_ARCHIVED' && (
        <button
          className="pin-button"
          onClick={() => onPinTask(id)}
          id={`pinTask-${id}`}
          aria-label={`pinTask-${id}`}
          key={`pinTask-${id}`}
        >
          <span className={`icon-star`} />
        </button>
      )}
    </div>
  );
}

// 데이터 요구사항 명시
// 컴포넌트에 필요한 데이터 형태를 명시하려면 React에서 propTypes를 사용하는 것이 가장 좋다. 이는 자체적 문서화일 뿐만 아니라, 문제를 조기에 발견하는 데 도움이 된다
// 이제 Task 컴포넌트가 잘못 사용된다면 경고가 나타난다
Task.propTypes = {
  /** Composition of the task */
  task: PropTypes.shape({
    /** Id of the task */
    id: PropTypes.string.isRequired,
    /** Title of the task */
    title: PropTypes.string.isRequired,
    /** Current state of the task */
    state: PropTypes.string.isRequired,
  }),
  /** Event to change the task to archived */
  onArchiveTask: PropTypes.func,
  /** Event to change the task to pinned */
  onPinTask: PropTypes.func,
};
