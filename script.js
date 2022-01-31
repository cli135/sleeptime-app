// we call this function in the onclick button attribute
function handleOnClickEvent() {
    //window.alert('buzz!');
    //console.log('fizz!'); // not in production code though
    let output = document.querySelector(".output"); // what is document is my question
    // like html dom object thing?
    // making it appear! as "block" not "none"
    output.style.display = "block"; // also i guess you have to do .style attribute/property/field
    // on the output variable? ok but the .display part makes sense

    // document object - root node of the HTML document
    // HTML becomes a document object when loaded
    // Document Object Model (DOM)
    // querySelector() gives us a matching element (the first) by searching through the CSS things in the doc
    
    // what exactly is an element? a class? an id? a tag??
    // ok, an element is a tag and its contents, like
    // <p>I am an element!</p>
    // source: google search "what is an element in html"
    // source: https://www.tutorialspoint.com/html/html_elements.htm
    let hours = document.getElementById('hours'); // i think we could use double quotes here
    // hours is the element now, the tag and its contents
    hours.innerText = "Placeholder for hours!";

    // ID attribute - unique id for each element

    
    let now = Date.now();
    let minute = 60 * 1000;

    // 14 minutes to fall asleep
    now += 14 * minute;

    let hoursString = ""; // make sure to declare your variables before you use them
    // javascript might not send a warning because it might think it's okay
    // hoursString accumulates our resulting sleep times
    for (let c = 1; c <= 6; c++) {
        // 6 sleep cycles
        now += 90 * minute;
        let curCycle = new Date(now);
        hoursString += curCycle.toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"});
        if (c < 6) {
        hoursString += ", ";
        }
    }

    console.log(hoursString);

    hours.innerText = "If you go to bed now, you should try to wake up at one of the following times: " + hoursString + ". This also allows a 14 minute buffer for you to fall asleep (the average time among humans).";

    }

