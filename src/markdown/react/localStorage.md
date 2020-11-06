# Local Storage

Saving and loading data from local storage
```jsx
// save to local storage
const saveLocal = () => {
    localStorage.setItem("key", JSON.stringify(value))
}
// load from local storage
const getLocal = () => {
    if(localStorage.getItem("key") === null){
        localStorage.setItem("key", JSON.stringify([]));
    }else{
        let value = JSON.parse(localStorage.getItem("key"))
    }
}
```
