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
      sortList(fileContent, selectedSortMethod); 
    }; 
 
    reader.onerror = (e) => alert(e.target.error.name); 
    reader.readAsText(file); 
  }; 
 
  const handleSortChange = (e) => { 
    setSelectedSortMethod(e.target.value); 
  }; 
 

  const sortList = (fileContent, selectedSortMethod) => { 
    fetch("http://localhost:5000/sort", { 
      method: "POST", 
      headers: { 
        "Content-Type": "application/json", 
      }, 
      body: JSON.stringify({ fileContent, selectedSortMethod }), 
    }) 
      .then((response) => { 
        console.log("Sort successfully"); 
      }) 
      .catch((error) => { 
        console.error("Error sorting file:", error); 
      }); 
  }; 

  // стили для текстового поля
  const textAreaStyle = {
    marginTop: 15, 
    marginBottom: 20, 
    width: "100%" , 
    resize: 'vertical', 
    height: '100vh', 
    width: "45vw"
  }

  // стили контейнера для списков
  const layotStyle = {
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'center',  
    height: '100vh'
  }
 
  return ( 
    <>
    <div align="center"> 
      <input type="file" name="input" onChange={handleChange} /> 
      <select 
        value={selectedSortMethod} 
        onChange={handleSortChange} 
        style={{ marginTop: 15, marginLeft: 15 }}
      > 
        <option value="ask">ask</option> 
        <option value="desс">desс</option> 
        <option value="reverse">reverse</option> 
      </select>
      <button 
      value={selectedSortMethod} 
      onChange={handleSortChange}
      style={{ marginLeft: 15 }} >
      Отсортировать  
      </button>
    </div> 

    <div style={layotStyle}>
      <div style={{marginRight: '10px', marginLeft: '10px'}}>
        <form>
          <dl>
            <dt><label for="title">Исходный список</label></dt>
              <dt>      
                <textarea 
                  id="title" 
                  name="title"
                  // cols={40} 
                  // rows={50} 
                  value={textValue} 
                  onChange={setTextValue} 
                  style={textAreaStyle} >
                </textarea>
              </dt>
          </dl>
        </form>
      </div>

      <div style={{marginLeft: '10px', marginRight: '10px'}}>
        <form>
          <dl>
            <dt><label for="title">Отсортированный список</label></dt>
              <dt>      
                <textarea 
                  id="title" 
                  name="title"
                  // cols={40} 
                  // rows={50} 
                  value={textValue} 
                  onChange={setTextValue} 
                  style={textAreaStyle} >
                </textarea>
              </dt>
          </dl>
        </form>
      </div>
    </div>
    </>
  ); 
}; 
 
export default App;
