import PropTypes from 'prop-types';
import '../CSS/Ring.css';

function Ring(props) {
  const { completed } = props;
  return (
    <div className="rings">
      <div className="percent1">
        <svg>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#379cf6" />
              <stop offset="100%" stopColor="#307bbe" />
            </linearGradient>
          </defs>
          <circle cx="27" cy="27" r="27" />
          <circle stroke="url(#gradient)" cx="27" cy="27" r="27" style={{ strokeDashoffset: `calc(440 - (17 * ${completed}) / 10)` }} />
        </svg>
        <div className="number">
          <h2>
            {`${completed}%`}
          </h2>
          <h3 className="Completed">completed</h3>
        </div>
      </div>
    </div>
  );
}

Ring.propTypes = {
  completed: PropTypes.number,
};

Ring.defaultProps = {
  completed: 0,
};

export default Ring;
