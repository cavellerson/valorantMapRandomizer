import React, { useState, useEffect, Component } from 'react';
import ascent from ".//images/ascent.webp"
import bind from ".//images/bind.webp"
import breeze from ".//images/breeze.webp"
import fracture from ".//images/fracture.webp"
import haven from ".//images/haven.jpeg"
import icebox from ".//images/icebox.webp"
import pearl from ".//images/pearl.webp"


function App() {


    const maps = ['Haven', 'Ascent', 'Breeze', 'Bind', 'Icebox', 'Fracture', 'Pearl']

    const outputRandomArrayName = (array) => {
        const lengthOfArray = array.length
        const randomIndex = Math.floor(Math.random() * lengthOfArray)
        return array[randomIndex]
    }

    const mapImgs = [haven, ascent, breeze, bind, icebox, fracture, pearl]



    const [randomMap, setRandomMap] = useState('');

    useEffect(() => {

    }, [randomMap])

  return (
    <div className="App">
        <h1>Valorant Map Randomizer</h1>
        <p>{randomMap ? <p>{randomMap}</p> : <p>Click Button to randomize map</p>}</p>

        <button onClick={() => {
            setRandomMap(outputRandomArrayName(maps))
        }}> Randomize Map
        </button>

        <div>
        <img src={mapImgs[maps.indexOf(randomMap)]}/>
        </div>

        



    </div>



  );
}

export default App;
