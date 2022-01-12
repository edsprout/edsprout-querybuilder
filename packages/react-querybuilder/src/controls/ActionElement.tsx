import type { ActionProps } from '../types';

export const ActionElement = ({
  className,
  handleOnClick,
  label,
  title,
  disabled,
  testID,
}: ActionProps) => (
  <button
    data-testid={testID}
    disabled={disabled}
    className={className}
    title={title}
    onClick={e => handleOnClick(e)}>
    {label}
  </button>
);

ActionElement.displayName = 'ActionElement';
