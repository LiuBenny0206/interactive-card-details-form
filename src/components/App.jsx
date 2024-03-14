import React, {useState} from "react";
import ImagePart from "./ImagePart";
import InputPart from "./InputPart";
import Complete from "./Complete";

function App (){

    const [cardHolderName, setCardHolderName] = useState("");
    const [cardNum, setCNum] = useState("");
    const [cardEM, setCardEM] = useState("");
    const [cardEY, setCardEY] = useState("");
    const [cardC, setCC] = useState("");

    const [submited, setSubmitted] = useState(false);

    return (
        <div className="mainPart">
            <ImagePart 
            cardHolderName={cardHolderName} 
            cardNum={cardNum}
            cardEM={cardEM}
            cardEY={cardEY}
            cardC={cardC}
            />
            {!submited && <InputPart 
            setCardHolderName={setCardHolderName} 
            setCNum={setCNum}
            setCardEM={setCardEM}
            setCardEY={setCardEY}
            setCC={setCC}
            setSubmitted={setSubmitted}
            />}
            {submited && <Complete setSubmitted={setSubmitted}/>
            }  
        </div>
    );
}

export default App;