/**
 * Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
 * clock that shows you the current machine time?
 * 
 * Can you make it so that it updates every second, and shows time in the following formats - 
 * HH:MM::SS (Eg. 13:45:23)
 * HH:MM::SS AM/PM (Eg 01:45:23 PM)
 */
function timeCallback() {
    let d = new Date();
    console.clear();
    console.log(d.toLocaleTimeString())
    console.log(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());

}

setInterval(timeCallback, 1000);

/**
 * Output for the above:
 * 
 * 10:26:39 PM
 * 22:26:39
 */