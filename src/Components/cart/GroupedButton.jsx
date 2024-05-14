import React, { useState } from "react";

import { ButtonGroup, Button, styled } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";

const Component = styled(ButtonGroup)`
    margin-top: 30px;
`;

const StyledButton = styled(Button)`
    border-radius: 50%;
`;

const GroupedButton = ({quantity,id}) => {
    const [ counter, setCounter ] = useState(1);
    const dispatch =  useDispatch()

    const handleIncrement = () => {
        setCounter(counter => counter + 1 );
    };

    const handleDecrement = () => {
        setCounter(counter => counter - 1 );
    };

    return (
        <Component>
            <StyledButton onClick={() =>  dispatch(addToCart(id,1,true))} disabled={counter == 0}>-</StyledButton>
            <Button disabled>{quantity}</Button>
            <StyledButton onClick={() => dispatch(addToCart(id,1))}>+</StyledButton>
        </Component>
    );
}

export default GroupedButton;