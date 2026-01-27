// section : 02 start 

let fiveCard = document.getElementsByClassName("five-div")

for (var i = 0; i < fiveCard.length; i++) {
    fiveCard[i].onmouseover = function () {
        this.style.width = "250px"
        this.style.height = "250px"
        this.style.boxShadow =
            "rgba(0, 0, 0, 0.4) 0px 2px 4px, " +
            "rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, " +
            "rgba(0, 0, 0, 0.2) 0px -3px 0px inset";
    }
    fiveCard[i].onmouseout = function () {
        this.style.width = "220px"
        this.style.height = "220px"
        this.style.boxShadow =
            "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, " +
            "rgba(0, 0, 0, 0.3) 0px 1px 3px -1px";
    }
}

// section : 02 end 

// section : 03 start 

let shortPara = "We also family more"
let longPara = "We also firmly believed that our customers deserved more choices and straightforward information.Above all, we were committed to delivering truly legendary service at every step. less"

function expendpara() {
    let para = document.getElementById("text-long")

    if (para.innerText === shortPara) {
        para.innerText = longPara
    }
    else {
        para.innerText = shortPara
    }
}

// section :03 end 

// section : 04 start 

var threeCard = document.getElementsByClassName("three-div")

for (var i = 0; i < threeCard.length; i++) {
    threeCard[i].onmouseover = function () {
        this.style.width = "420px"
        this.style.height = "420px"
        this.style.boxShadow =
            "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset";

    }
    threeCard[i].onmouseout = function () {
        this.style.width = "400px"
        this.style.height = "400px"
        this.style.boxShadow = "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, \
                               rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, \
                               rgba(255, 255, 255, 0.08) 0px 1px 0px inset";
    }
}

// section : 04 end

// section : 05 start 

var threeCard = document.getElementsByClassName("three-div-reviews")

for (var i = 0; i < threeCard.length; i++) {
    threeCard[i].onmouseover = function () {
        this.style.width = "420px"
        this.style.height = "200px"
        this.style.boxShadow = "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, \
                                        rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, \
                                        rgba(255, 255, 255, 0.08) 0px 1px 0px inset";
    }
    threeCard[i].onmouseout = function () {
        this.style.width = "400px"
        this.style.height = "200px"
        // box.style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px";
        this.style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px";

    }
}

// section : 05 end

// section : 06 start

var threeCard2 = document.getElementsByClassName("services-card")

for (var i = 0; i < threeCard2.length; i++) {
    threeCard2[i].onmouseover = function () {
        // this.style.width = "460px"
        this.style.height = "460px"
        this.style.boxShadow =
            "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset";

    }
    threeCard2[i].onmouseout = function () {
        // this.style.width = "400px"
        this.style.height = "450px"
        this.style.boxShadow = "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, \
                               rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, \
                               rgba(255, 255, 255, 0.08) 0px 1px 0px inset";
    }
}

// section : 06 end 

// footer : 07 start 

let images = [
    "image/footer img 01.png",
    "image/footer img 02.jpg",
    "image/footer img 03.jpg"
]

let index = 0

function changeImageFooter() {
    index = index + 1

    if (index >= images.length) {
        index = 0
    }
    document.getElementById("footer-img").src = images[index]
}

// footer : 07 end  