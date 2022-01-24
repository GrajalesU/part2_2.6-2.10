const Notification = ({ message, setNotification }) => {
  if (message === null) return null;
  return (
    <div className="floating">
      <div className="notification">
        <p>{message}</p>
        <button
          onClick={() => {
            setNotification(null);
          }}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Notification;
