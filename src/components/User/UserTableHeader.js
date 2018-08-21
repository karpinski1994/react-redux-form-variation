import React from 'react';

export const UserTableHeader = ({
    field1,
    field2,
    field3
}) => {
    //fieldy do poprawy
    return ( 
        <div>
            <div>
                {field1}
            </div>
            <div>
                {field2}
            </div>
            < div >
                {field3}
            </div>
        </div>
    );
};