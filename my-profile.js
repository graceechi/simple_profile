// console.log("This is my profile page!");

window.onload = function() {

    // create a new div element
    const newElement = document.createElement("h1");
    // set the h1's class attribute
    newElement.setAttribute("class", "name");
    // and give it some content
    const newContent = document.createTextNode("Grace Chi");
    // add the text node to the newly created div
    newElement.appendChild(newContent);
    // add the newly created element and its content into the DOM
    document.body.appendChild(newElement);


    const items = ['Houston, TX', 'Aspiring Software Engineer', 'Interested in Blockchain Technology', 'Foodie'];

    function makeUL (array) {
        // create the list element
        const list = document.createElement('ul');
        // set the ul's class attribute
        list.setAttribute("class", "my-details");

        for (let i = 0; i < array.length; i++) {
            // create list item
            const item = document.createElement('li');
            // set the li's class attribute
            item.setAttribute("class", "detail");
            // set its contents
            item.appendChild(document.createTextNode(array[i]));
            // add to list
            list.appendChild(item);
        }
        // return the constructed list
        return list;
    }
    // add the contents of items
    document.body.appendChild(makeUL(items));


    setInterval(showTime, 1000);
    function showTime() {
        let time = new Date();
        let hour = time.getHours();
        let min = time.getMinutes();
        let sec = time.getSeconds();
        am_pm = "AM";

        if (hour > 12) {
            hour -= 12;
            am_pm = "PM";
        }
        if (hour == 0) {
            hr = 12;
            am_pm = "AM";
        }

        hour = hour < 10 ? "0" + hour : hour;
        min = min < 10 ? "0" + min : min;
        sec = sec < 10 ? "0" + sec : sec;

        let currentTime = hour + ":" + min + ":" + sec + " " + am_pm;

        document.getElementById("clock").innerHTML = currentTime;
    }
    showTime();
}
