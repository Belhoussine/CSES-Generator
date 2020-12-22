async function generateTask() {
    const api = "https://cses-api.herokuapp.com/API/cses";
    setTimeout(loading, 50);
    const data = await fetch(api);
    const tasks = await data.json();
    var t = tasks[Math.floor(Math.random() * tasks.length)];
    task.innerHTML = t.name;
    task.href = t.link;
}

function loading(){
    if(task.innerHTML) return;
        task.innerHTML = "<img src = 'loaders/loading2.gif' width= '200' height= '50'> </img>";
}