import React from "react";
import componentA from './ComponentA'; //Mengimpor ComponentA dari file terpisah

const ComponentB = () => {
    return(
        <div>
            <h1> Component B </h1>
            <componentA /> {/*m}
        </div>
    )
}