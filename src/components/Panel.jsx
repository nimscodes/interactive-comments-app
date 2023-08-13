import classNames from 'classnames';

const Panel = ({ children, className, ...rest }) => {
  const classes = classNames(
    'rounded p-4 shadow bg-white w-full my-2',
    className
  );
  return (
    <div {...rest} className={classes}>
      {children}
    </div>
  );
};

export default Panel;
