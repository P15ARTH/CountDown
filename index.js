alert("Request You to Open in Desktop mode for best view")

const endDate = "25 May 2023 12:00:00 AM"

document.getElementById("end-date").innerText = endDate;

const inputs = document.querySelectorAll("input")

function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000;

    if (diff < 0 ) { 
     document.getElementById("my_audio").play();
     document.getElementById("headline").innerText = "🎁 🎁 🎁 Happy Birthday 🎁 🎁 🎁";
     document.getElementById("show").style.visibility = "hidden";
     document.getElementById("img").style.visibility = "visible";
    }

    if (diff < 0) return;

    // convert into days//
    inputs[0].value = Math.floor(diff / 3600 / 24);
    // convert into hours//
    inputs[1].value = Math.floor(diff / 3600) % 24;
    //convert into minutes
    inputs[2].value = Math.floor(diff / 60) % 60;
    //convert into seconds //
    inputs[3].value = Math.floor(diff) % 60;


}

// initial call
clock()

setInterval(
    () => {
        clock()
    },
    1000
)

//if (diff < 0 ) {
  //  alert("Today is Your Birthday");
//}








