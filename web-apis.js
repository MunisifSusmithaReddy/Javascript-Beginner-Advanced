
function getTimeout() {
    let timeout = setTimeout(function() {
       console.log('Set Timeout called');
       clearTimeout(timeout);
    }, 2000);
}

function getInterval() {
    let count = 0;
    let timeoutInterval = setInterval(function() {
     console.log('Set Interval Loaded', ++count); // 6
     if(count > 5) {
        clearInterval(timeoutInterval)
     }
    }, 2000);
}

