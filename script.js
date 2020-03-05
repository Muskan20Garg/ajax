console.log("Ajax");


let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler() {
     console.log('You have clicked the fetchBtn');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    //for get request.
    
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true); // in case of gety request, we fetch the data from the file.

    // post request
    //xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true); //true id=s for ayn execution.
    //xhr.getResponseHeader('Content-type', 'application/json'); //in post request we, need to send the data.


    // track the progress.
    xhr.onprogress = function(){
        console.log('On progress');
    }

     //earlier, this gets used, this has five codes
     /*
     0 unsent
     1 - open() hhas been called.
     2- send() has been called
     3- loading, here responseText holds partial data.
     4 - done, the operation is complete.
     */
    // xhr.onreadystatechange = function () {
    //     console.log('ready state is ', xhr.readyState);
        
    // }
    
    

    // What to do when response is ready
    xhr.onload = function () {
        if(this.status === 200){  //200 is the code for done(http status code)

            console.log(this.responseText)
        }
        else{
            console.log("Some error occured")
        }
    }

    // send the request
   // params = `{"name":"test34sad545","salary":"123","age":"23"}`;
    xhr.send();

    console.log("We are done!");

}


let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', popHandler);

function popHandler() {
    console.log('You have clicked the pop handler');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);


    // What to do when response is ready
    xhr.onload = function () {
        if(this.status === 200){
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');
            str = "";
            for (key in obj)
            {
                str += `<li>${obj[key].employee_name} </li>`;
            }
            list.innerHTML = str;  //display the object employee names on the ul list.
        }
        else{
            console.log("Some error occured")
        }
    }

    // send the request
    xhr.send();
    console.log("We are done fetching employees!");
    
}

