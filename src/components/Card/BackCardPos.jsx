import "../Card/Card.css";
import { CardContext } from "../../App";
import { useContext } from "react";

export default function BackCardPos() {
  const { cvvNumberShow } = useContext(CardContext);

  return (
    <>
      <div className="BackCard">
        <div className="Cvv_Pos" id="CvvDisplay">
          {cvvNumberShow ? cvvNumberShow : "000"}
        </div>
      </div>
    </>
  );
}
