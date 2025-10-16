import PropTypes from 'prop-types';

const Button = ({ width, margin, ...props }) => {
  return (
    <button
      style={{
        width: `${width}px`,
        height: `${width / 3}px`,
        margin: `${margin}px`,
      }}
      {...props}
    >
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  margin: '10px',
};

Button.propTypes = {
  width: PropTypes.number.isRequired,
  margin: PropTypes.number,
};
export default Button;
