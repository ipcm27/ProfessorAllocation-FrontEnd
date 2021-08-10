fetch("https://professorallocation.herokuapp.com/Departamentos").then(
    (response) => {
    if (!response.ok) {
        alert("Houve um erro");
    return;
}
response.json().then((json) => {
console.log(json);
    });
}
);