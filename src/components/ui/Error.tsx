import React from 'react';

interface ErrorProps{
error: string
}
function Error({error}: ErrorProps) {
    return (
        <div className="text-red-600 text-center">{error}</div>
    );
}

export default Error;