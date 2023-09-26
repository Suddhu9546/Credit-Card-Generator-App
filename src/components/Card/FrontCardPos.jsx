import "./Card.css";
import { CardContext } from '../../App'
import { useContext } from 'react'


function FrontCardPos() {
  const { cardHolderNameShow } = useContext(CardContext)
  const { cardNumberShow } = useContext(CardContext)
  const { monthShow } = useContext(CardContext)
  const { yearShow } = useContext(CardContext)

  return (
    <>
      <div className="frontCard">
        <div>
        <div className="CardNo" id="CardNumber">
          { cardNumberShow?cardNumberShow:"0000 0000 0000 0000" }
        </div>
        <div className="Card_Position">
        <div className="CardUserNam" id="CardUserName" >
        { cardHolderNameShow?cardHolderNameShow:"JANE APPLESEED" }
        </div>
        <div className="Card-Date" id="CardDate">
        { monthShow?monthShow:"00" }/{ yearShow?yearShow:"00" }
        </div>
        </div>
      </div>
      </div>

    </>
  );
}

export default FrontCardPos;
