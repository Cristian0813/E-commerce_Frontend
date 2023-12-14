import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';

function ButtonAdd() {
    const [show, setShow] = useState(false);
    const target = useRef(null);

    const toggleTooltip = () => {
        setShow(!show);
    };

    return (
        <>
            <Button ref={target} onClick={toggleTooltip}>
                Agregar al carrito
            </Button>
            <Overlay target={target.current} show={show} placement="right">
                {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                        Agregado
                    </Tooltip>
                )}
            </Overlay>
        </>
    );
}

export default ButtonAdd;
