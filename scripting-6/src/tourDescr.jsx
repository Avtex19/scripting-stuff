import { useState } from "react";

export const DescrTours = (props) => {
  const [expand, setExpand] = useState(false);
  const { id, name, price, info, image, onDelete } = props;
  const previewInfo = info.substring(0, 170).concat("...");

  return (
    <div key={id} className="tour">
      <div className="img-location">
        <img src={image} alt={name} />

        <div className="price-and-name">
          <h4>{name}</h4>
          <h5
            style={{
              color: "#63A8C1",
              cursor: "pointer",
              backgroundColor: "#E2F1F7",
              padding: "5px",
            }}
          >
            {"$" + price}
          </h5>
        </div>

        <div className="information">
          <p>{expand ? info : previewInfo}</p>
          <p
            onClick={() => setExpand((state) => !state)}
            className="read-collapse" //  If the user clicks "Read more", the expand state is set to true and the full info is displayed. If they click "collapse", the expand state is set to false and the previewInfo is displayed.
            style={{ color: "#63A8C1", cursor: "pointer" }}
          >
            {expand ? "Collapse" : "Read more"}
          </p>
          <button className="delete-btn" onClick={() => onDelete(id)}>
            Not Interested!
          </button>
        </div>
      </div>
    </div>
  );
};

export default DescrTours;
