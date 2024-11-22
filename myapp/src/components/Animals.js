import React from "react";

export default function AnimalCards({animals,onClick}){
    return(
        <div style={styles.grid}>
            {animals.map((animal)=>(
                <div
                key={animal.id}
                style={styles.card}
                onClick={()=>onClick(animal)}
                >
                <img 
                src={request()}
            ))}
        </div>
    )
}