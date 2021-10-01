import React, { useEffect, useState } from 'react';
import api from "../../services/api";

function Header() {
  
  const [char, setChar] = useState();
  var desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dignissim laoreet mauris, sed vestibulum dui pharetra sit amet. Morbi fermentum sem est, nec eleifend eros pharetra quis. Morbi tortor diam, elementum in nunc ut, viverra faucibus eros."

  useEffect(() => {
    //pegar o valor dinamicamente
    var id = 4
      api
      .get("/char/" + id)
      .then((response) => setChar(response.data))
      .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
      });
  }, []);
  if(char != null){
    return (
      <div className="mt-4">
        <br />
        <h2 className="text-capitalize">
          {char[0].name_singular_male}
        </h2>
        <p>
          {desc}
        </p>
      </div>
    )
  }
  else{
    return null
  }
  
}

export default Header;
