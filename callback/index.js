function getData(url, success, error){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();
    xhr.onload = function() {
        if(xhr.status === 200){
            success(JSON.parse(xhr.response))
        } else {
            error(xhr.response)
        }
    }
}

function success(data){
    console.log("Success")
    console.log(data)
}

function error(err){
    console.log('An error occured - ${err}');
}


getData("https://reqres.in/api/users/1", (data) => {
    console.log("Response1 ->", data)
    getData("https://reqres.in/api/users/2", (data2) => {
        console.log("Response2 ->", data2)
        getData("https://reqres.in/api/users/3", (data3) => {
            console.log("Response3 ->", data3)
        }, error)
    }, error)
}, error);

