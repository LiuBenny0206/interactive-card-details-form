import React, {useState} from "react";

function InputPart ({setCardHolderName, setCNum, setCardEM, setCardEY, setCC, setSubmitted}){

    const [cardName, setCardName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [cardExpMonth, setCardExpMonth] = useState("");
    const [cardExpYear, setCardExpYear] = useState("");
    const [cardCvc, setCardCvc] = useState("");

    const [numberInputColor, setNumberInputColor] = useState("hsl(270, 3%, 87%)");
    const [expMonthInputColor, setExpMonthInputColor] = useState("hsl(270, 3%, 87%)");
    const [expYearInputColor, setExpYearInputColor] = useState("hsl(270, 3%, 87%)");
    const [cvcInputColor, setCvcInputColor] = useState("hsl(270, 3%, 87%)");

    const [error, setError] = useState(
        {name: false, number: false, expMonth: false, expYear: false, cvc: false}
        );

    const [cardNumberErrorText, setCardNumberErrorText] = useState("Can't be blank");
    const [cardExpMonthErrorText, setCardExpMonthErrorText] = useState("Can't be blank");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // empty checks and worng types
        
        const wrongTypeError = {
            number: !/^\d+$/.test(cardNumber) // 使用正则表达式检查cardNumber是否只包含数字
        };

        const emptyError = {
            name: cardName === "",
            number: cardNumber === "",
            expMonth: cardExpMonth === "",
            expYear: cardExpYear === "",
            cvc: cardCvc === ""
        };

        setNumberInputColor( wrongTypeError.number||emptyError.number ? "hsl(0, 100%, 66%)" : "hsl(270, 3%, 87%)");
        setExpMonthInputColor(emptyError.expMonth ? "hsl(0, 100%, 66%)" : "hsl(270, 3%, 87%)");
        setExpYearInputColor(emptyError.expYear ? "hsl(0, 100%, 66%)" : "hsl(270, 3%, 87%)");
        setCvcInputColor(emptyError.cvc ? "hsl(0, 100%, 66%)" : "hsl(270, 3%, 87%)");
        
        setCardNumberErrorText(wrongTypeError.number? "Wrong format, numbers only" : "");


        const currentErrors = {
            number: emptyError.number || wrongTypeError.number,
            expMonth: emptyError.expMonth,
            expYear: emptyError.expYear,
            cvc: emptyError.cvc
        };

        setError(currentErrors);

        const hasErrors = Object.values(currentErrors).some(isError => isError);


        // 如果没有错误，则提交表单
         if (!hasErrors) {
            setSubmitted(true);
            console.log("Submitted");
        }
    };

    const handleNameChange = (e) => {
        const newName = e.target.value;
        setCardName(newName);
        setCardHolderName(newName);
    };
    const handleCardNumberChange = (e) => {
        const newNumber = e.target.value;
        setCardNumber(newNumber);
        setCNum(newNumber);
    };
    const handleCardExpMonthChange = (e) => {
        const newExpMonth = e.target.value;
        setCardExpMonth(newExpMonth);
        setCardEM(newExpMonth);
    };
    const handleCardExpYearChange = (e) => {
        const newExpYear = e.target.value;
        setCardExpYear(newExpYear);
        setCardEY(newExpYear);
    };

    const handleCvcChange = (e) => {
        const newCvc = e.target.value;
        setCardCvc(newCvc);
        setCC(newCvc);
    };


    return(
        <div className="inputPart">
            <form className="inputForm" onSubmit={handleSubmit}>
                <div className="firstLine">
                    <p id="firstTitle">CARDHOLDER NAME</p>
                    <input 
                        type="text" 
                        name="cardHolderName" 
                        placeholder="e.g. Benny Sehr" 
                        value={cardName}
                        onChange = {handleNameChange}
                    />
                </div>
                <div className="secondLine">
                    <p id="secondTitle">CARD NUMBER</p>
                    <input 
                        type="text" 
                        name="cardNumber" 
                        placeholder="e.g. 1234 5678 9100 0000" 
                        style={{borderColor: numberInputColor}}
                        value={cardNumber}
                        onChange= {handleCardNumberChange}
                    />
                    {error.number && <p className="numErrorText">{cardNumberErrorText}</p>}
                </div>
                <div className="thirdLine">
                    <div className="firstRow">
                        <p className="thirdTitle">EXP. DATE (MM/YY)</p>
                        <input 
                            type="number" 
                            name="mm" 
                            placeholder="MM" 
                            style={{borderColor: expMonthInputColor}}
                            value={cardExpMonth}
                            onChange={handleCardExpMonthChange}    
                        />
                        <input 
                            type="number" 
                            name="yy" 
                            placeholder="YY"
                            style={{borderColor: expYearInputColor}}
                            value={cardExpYear}
                            onChange={handleCardExpYearChange}    
                        />
                    </div>
                    <div className="secondRow">
                        <p className="thirdTitle">CVC</p>
                        <input 
                            type="number" 
                            name="cvc" 
                            placeholder="e.g 123"
                            style={{borderColor: cvcInputColor}}
                            value={cardCvc}
                            onChange={handleCvcChange}
                        />
                    </div>
                </div>
                {(error.expMonth || error.expYear || error.cvc) && <p className="expMonthErrorText">{cardExpMonthErrorText}</p>}
                <button id="formButton" type="submit">Confirm</button>
            </form>
        </div>
    );
}

export default InputPart;