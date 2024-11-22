import {useState} from "react";
import animals from "../AnimalsDb";
import "../assets/gamecom.css";

export default function Gamecom(){
    const [targetAnimal,setTargetAnimal]=useState(getRandomAnimal());
    const [result,setResult]=useState(null);

    function getRandomAnimal(){
        const randomIndex=Math.floor(Math.random()*animals.length);
        return animals[randomIndex];
    }

    const handleAnimalClick=(id)=>{
        if (id===targetAnimal.id){
            setResult("Win");
        }else{
            setResult("Lose");
        }
    }

    const restartGame=()=>{
        setTargetAnimal(getRandomAnimal());
        setResult(null);
    };

    return(
        <>
        <div className="game-page">
            <div>
                <h1>Animal Matching Game</h1>
            </div>
            <div>
                <div>
                    {result && (
                        <div className="result">
                            <h2>Result</h2>
                            <h2>{result}</h2>
                            <button onClick={restartGame}>Play Again</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
        </>
    )
}
