import React from 'react';

const dynamicpage = ({params, searchParams}) => {
    console.log(params);
    console.log(searchParams);
    return (
        <div>
            <h1>this is dynamic page {params.id} {searchParams.category} </h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet ipsa hic qui iure, nostrum debitis tempore numquam magnam illo nesciunt recusandae illum voluptatem veniam error voluptate veritatis quasi. Eius, libero.</p>
            <div> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea maiores aspernatur saepe corporis, possimus reprehenderit iste voluptate voluptatibus doloribus corrupti.

            </div>
             
        </div>
    );
};

export default dynamicpage;