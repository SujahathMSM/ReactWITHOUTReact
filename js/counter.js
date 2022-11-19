// create a React component without React

export function counterComponent() {

    //get the ID of root from index.html
    let root = document.getElementById('root');

    //set counter to 0
    let counter = 0;

    //create fragment
    const fragment = document.createDocumentFragment()
    
    //create a button for counter
    let btn = document.createElement('button'); //creating a button tag
    btn.setAttribute('id', 'btn-counter')  //adding id for button tag
    btn.textContent = "Counter"

    // create count text div
    const current_count = document.createElement('div');
    current_count.setAttribute('id', 'elem-counter')

    // creating a reset button
    const reset_btn = document.createElement('button');
    reset_btn.setAttribute('id', 'count-reset')
    reset_btn.textContent = "Reset"

    // test hello world with root
    // root.innerHTML = `<h1>Hello, World!</h1>`
    // console.log("Hello this works")

    const current_count_display = count => {
        current_count.innerHTML = `<span style = "color: red"> Counter ${count}`
    }

    const reset_counter = count => {
        if (count > 10) {
            root.appendChild(reset_btn)
        } else {
            if (document.body.contains(document.getElementById('count-reset'))){
                reset_btn.remove()
            }
        }
    }

    document.addEventListener('click', event => {
        if(event.target && event.target.id==="btn-counter"){
            console.log('count');
            counter+=1;
            console.log(counter)
            current_count_display(counter)
            reset_counter(counter)
        }
    })

    document.addEventListener('click', event => {
        if (event.target && event.target.id === "count-reset") {
            counter = 0
            current_count.innerHTML = "counter reset"
        }
    })

    fragment.appendChild(btn)
    fragment.appendChild(current_count)

    console.log("Finally Did it")

    return root.appendChild(fragment);
}

