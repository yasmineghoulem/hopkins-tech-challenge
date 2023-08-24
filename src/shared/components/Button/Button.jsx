import { Button as AntdButton } from 'antd';

import './Button.scss';

const Button = ({
  className,
  icon,
  type = 'default',
  size = 'large',
  disabled,
  onClick,
  loading,
  htmlType,
  block,
  children,
}) => (
  <div className={`CP-button${className ? ` ${className}` : ''}`}>
    <AntdButton
      type={type}
      size={size}
      icon={icon}
      disabled={disabled}
      onClick={onClick}
      loading={loading}
      htmlType={htmlType}
      block={block}
    >
      {children}
    </AntdButton>
  </div>
);

export default Button;
