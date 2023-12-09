import { useEffect, useState } from "react";
import "./App.css";
import DescrTours from "./tourDescr";
import EmptyMessage from "./emptyMessage";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://course-api.com/react-tours-project")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    const updatedData = data.filter((tour) => tour.id !== id);
    setData(updatedData);
  };

  if (loading) return <h3 className="loading-message">Loading...</h3>;
  if (error) return <div className="error-message">Error!;</div>;
  if (data.length == 0) return <EmptyMessage />;

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1>Our Tours</h1>
        <hr className="small-line"></hr>
      </div>
      <div className="tours">
        {data.map((tour) => (
          <DescrTours
            key={tour.id}
            id={tour.id}
            name={tour.name}
            price={tour.price}
            info={tour.info}
            image={tour.image}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </>
  );
}

export default App;
