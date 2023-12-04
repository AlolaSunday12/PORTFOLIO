import React from 'react';

function Success({message}) {
    return (
        <div>
            <div class="alert alert-success">
                {message}
                </div>
        </div>
    );
}

export default Success;