export const EmptyMessage = () => {
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="empty-message">
        <h1>No Tours Left!</h1>
        <div className="refresh-page">
          <button onClick={refreshPage}>Refresh</button>
        </div>
      </div>
    </>
  );
};

export default EmptyMessage;
