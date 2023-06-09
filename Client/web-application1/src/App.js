// Импортируем библиотеки и компоненты 
import React, { useState } from "react"; 
 
// Создаем функциональный компонент App  
const App = () => { 
  const [textValue, setTextValue] = useState(""); 
  const [selectedSortMethod, setSelectedSortMethod] = useState("asc");
  const [sortedList, setSortedList] = useState(""); 
 
   // Обработчик события изменения текстового поля 
  const handleChange = (e) => { 
    const file = e.target.files[0]; 
 
    let reader = new FileReader(); 
 
    reader.onload = (e) => {
      const fileContent = e.target.result; 
      console.log(fileContent); 
      setTextValue(fileContent);
    }; 
 
    reader.onerror = (e) => alert(e.target.error.name); 
    reader.readAsText(file); 
  }; 
 
  // Обработчик события изменения метода сортировки 
  const handleSortChange = (e) => { 
    setSelectedSortMethod(e.target.value); 
  }; 
 
  // Отправка запроса на сервер 
  const sortList = (fileContent) => {

    console.log(JSON.stringify(JSON.stringify(fileContent.split("\r\n")))); 
    console.log("selectedSortMethod - " + selectedSortMethod);
 
    // Определение пути отправки в зависимости от выбранного метода сортировки
    const url = 
      selectedSortMethod === "asc"
        ? "http://localhost:15647/sort?order=asc"
        : selectedSortMethod === "desс" 
        ? "http://localhost:15647/sort?order=desc"
        : selectedSortMethod === "reverse" 
        ? "http://localhost:15647/sort?order=reverse"
        : "";

    // Отправляем запрос на сервер и выводим отсортированный список в textarea
    fetch(url, { 
      method: "POST", 
      headers: { 
        "Content-Type": "application/json", 
      }, 
      body: JSON.stringify(fileContent.split("\r\n")), 
    })
      .then((response) => {
        response.json().then((data) => { 
          console.log(data);

          let output = "";
          for (let i = 0; i < data.length; i++) {
            output += data[i] + "\n";
          }

          setSortedList(output);
        }); 
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
    resize: "vertical", 
    height: "100vh", 
    width: "45vw", 
  }; 
 
  // стили контейнера для списков 
  const layotStyle = { 
    display: "flex", 
    flexDirection: "row", 
    justifyContent: "center", 
    height: "100vh", 
  }; 
 
  // Возвращаем разметку приложения 
  return ( 
    <> 
      <div align="center"> 
        <input type="file" name="input" onChange={handleChange} /> 
        <select 
          value={selectedSortMethod} 
          onChange={handleSortChange} 
          style={{ marginTop: 15, marginLeft: 15 }} 
        > 
          <option value="asc">asc</option>
          <option value="desс">desс</option> 
          <option value="reverse">reverse</option> 
        </select> 
        <button onClick={() => sortList(textValue)} style={{ marginLeft: 15 }}> 
          Отсортировать 
        </button> 
      </div> 
 
      <div style={layotStyle}> 
        <div style={{ marginRight: "10px", marginLeft: "10px" }}> 
          <form> 
            <dl> 
              <dt> 
                <label htmlFor="title">Исходный список</label> 
              </dt> 
              <dt> 
                <textarea 
                  id="title1"
                  name="title" 
                  value={textValue} 
                  onChange={(e) => setTextValue(e.target.value)} 
                  style={textAreaStyle} 
                ></textarea> 
              </dt> 
            </dl> 
          </form> 
        </div> 
 
        <div style={{ marginLeft: "10px", marginRight: "10px" }}> 
          <form> 
            <dl> 
              <dt> 
                <label htmlFor="title">Отсортированный список</label> 
              </dt> 
              <dt> 
                <textarea 
                  id="title2"
                  name="title" 
                  value={sortedList} 
                  onChange={(e) => setSortedList(e.target.value)} 
                  style={textAreaStyle} 
                ></textarea> 
              </dt> 
            </dl> 
          </form> 
        </div>
        </div> 
    </> 
  ); 
}; 
 
// Экспортируем компонент App
export default App;