
import PropTypes from 'prop-types';
import '../../styles/Components.style/MenuBoton.css';

const Button = ({ icon, text }) => {
  return (
    <div className="buttonMenuGraf">
      <div className="button-icon">
        {icon}
      </div>
      <div className="button-text">{text}</div>
    </div>
  );
}

Button.propTypes = {
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
