const Notification = ({ setNotification, body, isError }) => {
  if (body === null) return null;
  return (
    <div className="floating">
      <div className={`notification ${isError && "error"}`}>
        <p>{body}</p>
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
