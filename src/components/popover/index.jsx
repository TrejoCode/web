/**
 * @version 1.0.0
 * @author Trejocode - Sergio
 * @description Componente del <Popover />
*/

import React from 'react';

const Popover = ({ description, link }) => {

    return(
        <div className="popover justify-center">
            <div className="container justify-center">
                <a href = { link } className="text-center">
                    { description }
                </a>
            </div>
        </div>
    )

};

export default Popover;