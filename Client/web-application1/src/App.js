import React, { useState } from "react"; 
 
const App = () => { 
  const [textValue, setTextValue] = useState(""); 
  const [selectedSortMethod, setSelectedSortMethod] = useState(""); 
 
  const handleChange = (e) => { 
    const file = e.target.files[0]; 
 
    let reader = new FileReader(); 
 
    reader.onload = (e) => { 
      const fileContent = e.target.result; 
      console.log(fileContent); 
      setTextValue(fileContent); 
      readFile(fileContent); 
      sortList(selectedSortMethod); 
    }; 
 
    reader.onerror = (e) => alert(e.target.error.name); 
    reader.readAsText(file); 
  }; 
 
  const handleSortChange = (e) => { 
    setSelectedSortMethod(e.target.value); 
  }; 
 
  const readFile = (fileContent) => { 
    fetch("/read", { 
      method: "POST", 
      headers: { 
        "Content-Type": "application/json", 
      }, 
      body: JSON.stringify({ fileContent }), 
    }) 
      .then((response) => { 
        console.log("File read successfully"); 
      }) 
      .catch((error) => { 
        console.error("Error reading file:", error); 
      }); 
  }; 

  const sortList = (selectedSortMethod) => { 
    fetch("/sort", { 
      method: "POST", 
      headers: { 
        "Content-Type": "application/json", 
      }, 
      body: JSON.stringify({ selectedSortMethod }), 
    }) 
      .then((response) => { 
        console.log("Sort successfully"); 
      }) 
      .catch((error) => { 
        console.error("Error sorting file:", error); 
      }); 
  }; 
 
  return ( 
    <>
    <div align="center"> 
      <input type="file" name="input" onChange={handleChange} /> 
      <select value={selectedSortMethod} onChange={handleSortChange} style={{ marginTop: 15, marginLeft: 15 }}> 
        <option value="ask">ask</option> 
        <option value="desk">desk</option> 
        <option value="reverse">reverse</option> 
      </select> 
      </div> 

      <div align="center">
      <textarea 
        cols={30} 
        rows={20} 
        value={textValue} 
        onChange={setTextValue} 
        style={{ marginTop: 15, marginLeft: 15, width: "50%" }} 
      ></textarea> 
    </div> 
    </>
  ); 
}; 
 
export default App;
