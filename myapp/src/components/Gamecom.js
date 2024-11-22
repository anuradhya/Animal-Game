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
}
