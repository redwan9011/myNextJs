import React from 'react';

const dynamicpage = ({params, searchParams}) => {
    console.log(params);
    console.log(searchParams);
    return (
        <div>
            <h1>this is dynamic page {params.id} {searchParams.category} </h1>
        </div>
    );
};

export default dynamicpage;