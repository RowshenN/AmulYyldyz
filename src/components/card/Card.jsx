import React, { useContext, useState } from "react";

import "./Card.css";
import empty from "../../images/emptyheart.svg";
import red from "../../images/redheart.svg";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context/Context";

const Card = (props) => {
  const [selected, setSelected] = useState(
    props.selected ? props.selected : false
  );
  const { AddToFav } = useContext(Context);
  const navigate = useNavigate();
  return (
    <div className="cardContainer">
      <div className="cardImage">
        <img
          src={props.surat}
          alt="surat"
          className="!h-[282px] !w-full object-cover"
          onClick={() => navigate("/products/" + props.id)}
        />
        <div
          className="iconDiv"
          onClick={() => {
            setSelected(!selected);
            AddToFav(props.data);
          }}
        >
          {!selected ? (
            <img src={empty} alt="surat" className="cardIcon" />
          ) : (
            <img src={red} alt="empty" className="cardIcon" />
          )}
        </div>
      </div>
      <p className="cardName">{props.name}</p>
    </div>
  );
};

export default Card;
