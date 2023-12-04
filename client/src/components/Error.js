import React from 'react';

function Error({ message }) {
    return (
        <div>
            <div class="alert alert-danger" mt-2>
                {message}
                </div>
        </div>
    );
}

export default Error;