
let load = document.querySelector(".load")
let bom = document.querySelector(".bom")
let bombing = document.querySelector(".bombing")
let warning = document.querySelector(".warning")


let musice = localStorage.getItem("musice")
window.onload = function(){
    if(musice){
        if(musice == "no"){
            load.pause()
        }else{
            load.play()
        }
    }else{
        load.play()
    }
    
}



let livel = 0
let many = 0
let span = document.querySelector(".blay .a-l-s .l span")
let manylo = localStorage.getItem("many")

if(manylo){
    many = manylo
    livel = Math.floor(manylo / 20)
    localStorage.setItem("livel" , livel)
    span.innerHTML = livel
}

let livello = localStorage.getItem("livel" )

if(livello){
    span.innerHTML = livello
}




// aaaa




let a = document.querySelector(".a")
let aa = document.querySelector(".aa")
let ss = document.querySelector(".ss")


a.onclick = function(){
    aa.classList.toggle("back")
    ss.classList.remove("back")
    aa.style.border = ""
    ax.style.color = ""
    ax.style.border = ""
    aa.style.backgroundColor = "#0000007a"
    aa.style.boxShadow = "0px 0px 0px 0px red"
    a.style.top = "-3px"
    a.style.left = "3px"
    a.style.boxShadow = "none"
    setTimeout(() => {
        a.style.top = "0"
        a.style.left = "0"
        a.style.boxShadow = "3px -3px 7px 1px #000"
    }, 100);
}

let ax = document.querySelector(".a-x")

ax.onclick = function(){
    aa.classList.remove("back")
    aa.style.border = ""
    ax.style.color = ""
    ax.style.border = ""
    aa.style.backgroundColor = "#0000007a"
    aa.style.boxShadow = "0px 0px 0px 0px red"
}

let voice = document.querySelector(".voice")

voice.onclick = function(){
    if(voice.lastElementChild.style.display === "none"){
        voice.lastElementChild.style.display = "block"
        voice.firstElementChild.style.display = "none"
        localStorage.setItem("musice" , "no")
        load.pause()
    }else{
        voice.lastElementChild.style.display = "none"
        voice.firstElementChild.style.display = "block"
        localStorage.setItem("musice" , "yes")
        load.play()
    }

}

let vibr = document.querySelector(".vibr")

vibr.onclick = function(){
    if(vibr.lastElementChild.style.display === "none"){
        vibr.lastElementChild.style.display = "block"
        vibr.firstElementChild.style.display = "none"
    }else{
        vibr.lastElementChild.style.display = "none"
        vibr.firstElementChild.style.display = "block"
    }
    
}


let music = document.querySelector(".music")

music.onclick = function(){
    if(music.lastElementChild.style.display === "none"){
        music.lastElementChild.style.display = "block"
    }else{
        music.lastElementChild.style.display = "none"
    }
    
}



// ssssssssss


let s = document.querySelector(".s")


s.onclick = function(){
    ss.classList.toggle("back")
    aa.classList.remove("back")
    ss.style.border = ""
    sx.style.color = ""
    sx.style.border = ""
    ss.style.backgroundColor = "#0000007a"
    ss.style.boxShadow = "0px 0px 0px 0px red"
    s.style.top = "-3px"
    s.style.left = "-3px"
    s.style.boxShadow = "none"
    setTimeout(() => {
        s.style.top = "0"
        s.style.left = "0"
        s.style.boxShadow = "-3px -3px 7px 1px #000"
    }, 100);

}

let sx = document.querySelector(".s-x")

sx.onclick = function(){
    ss.classList.remove("back")
    ss.style.border = ""
    sx.style.color = ""
    sx.style.border = ""
    ss.style.backgroundColor = "#0000007a"
    ss.style.boxShadow = "0px 0px 0px 0px red"
}


let shm1 = document.querySelector(".blay .ss .oo100 .shm1")
let shm2 = document.querySelector(".blay .ss .oo100 .shm2")

let tran = document.querySelector(".blay .ss .oo100 .tran")

shm1.innerHTML = "<"
shm2.innerHTML = ">"


shm2.onclick = function(){

    shm1.style.cursor = "pointer"
    shm1.style.opacity = "1"
    
    if(tran.style.transform === "translateX(0px)"){
        tran.style.transform = "translateX(-250px)"
    }else{
        if(tran.style.transform === "translateX(-250px)"){
            tran.style.transform = "translateX(-500px)"
        }else{
            if(tran.style.transform === "translateX(-500px)"){
                tran.style.transform = "translateX(-750px)"
            }else{
                if(tran.style.transform === "translateX(-750px)"){
                    tran.style.transform = "translateX(-1000px)"
                }else{
                    
                }
            }
        }
    }

    if(tran.style.transform === "translateX(-1000px)"){
        shm2.style.cursor = "not-allowed"
        shm2.style.opacity = ".5"
    }else{
        shm2.style.cursor = "pointer"
        shm2.style.opacity = "1"
    }
    

}

shm1.onclick = function(){

    shm2.style.cursor = "pointer"
    shm2.style.opacity = "1"
    
    if(tran.style.transform === "translateX(-1000px)"){
        tran.style.transform = "translateX(-750px)"
    }else{
        if(tran.style.transform === "translateX(-750px)"){
            tran.style.transform = "translateX(-500px)"
        }else{
            if(tran.style.transform === "translateX(-500px)"){
                tran.style.transform = "translateX(-250px)"
            }else{
                if(tran.style.transform === "translateX(-250px)"){
                    tran.style.transform = "translateX(0px)"
                }else{
                    
                }
            }
        }
    }

    if(tran.style.transform === "translateX(0px)"){
        shm1.style.cursor = "not-allowed"
        shm1.style.opacity = ".5"
    }else{
        shm1.style.cursor = "pointer"
        shm1.style.opacity = "1"
    }
    

}




// --------------------------------------------------------------------------
let but = document.querySelectorAll(".box button")

let man = document.querySelector(".s p")
let box = document.querySelectorAll(".tran .box")

man.innerHTML = many

console.log(many)

let col = "#F44336"

let colorLo = localStorage.getItem("color")


if(colorLo){
    col = colorLo
    box.forEach(bo =>{
        if(bo.getAttribute("data-color") === colorLo){
            bo.querySelector("button").classList.add("actev")
        }
    })
}

let arrcolor = []

let colorarrlo =JSON.parse(localStorage.getItem("colorarr")) 

if(colorarrlo){
    for (let i = 0; i < colorarrlo.length; i++) {
        box.forEach(box =>{
            if(box.getAttribute("data-color") === colorarrlo[i]){
                box.querySelector("button").innerHTML ="Available"
                // box.querySelector("button").style.backgroundColor = "#494966"
                box.querySelector("button").classList.add("after")

            }
        })
    }
    arrcolor = colorarrlo
}

but.forEach((bu)=>{
    bu.onclick = function(){
        if(this.classList.contains("after")){
            but.forEach(b =>{
                b.classList.remove("actev")
            })
            this.classList.add("actev")
            col = this.parentElement.getAttribute("data-color")
            localStorage.setItem("color" , col)
        }else{
            if(+this.previousElementSibling.innerHTML <= +man.innerHTML ){
                this.innerHTML = "Available"
                // this.style.backgroundColor = "#494966"
                // console.log(+this.previousElementSibling.innerHTML)
                // console.log(+man.innerHTML)
                man.innerHTML = parseInt(man.innerHTML) - parseInt(this.previousElementSibling.innerHTML)

                col = this.parentElement.getAttribute("data-color")

                many = many - +this.previousElementSibling.innerHTML
                localStorage.setItem("many" , many )

                arrcolor.push(col)

                localStorage.setItem("colorarr" , JSON.stringify(arrcolor))
                localStorage.setItem("color" , col)

                this.classList.add("after")
                but.forEach(b =>{
                    b.classList.remove("actev")
                })
                this.classList.add("actev")
            }
        }
        
    }
})
// ---------------------------------------------------------------------------

let start = document.querySelector(".start")
let l = document.querySelector(".l")
let cont = document.querySelector(".cont")
let hafaf = document.querySelector(".cont .hafaf")
let slah = document.querySelector(".slah")

let over = document.querySelector(".gameOver")
let exet = document.querySelector(".gameOver button")



start.onclick = function(){
    if(aa.classList.contains("back") ||ss.classList.contains("back")){
        if(aa.classList.contains("back") ){
            aa.style.border = "2px solid red"
            ax.style.color = "red"
            ax.style.border = "1px solid #e30101"
            aa.style.backgroundColor = "#ff00004d"
            aa.style.boxShadow = "0px 0px 30px 0px red"
        }
        if(ss.classList.contains("back")){
            ss.style.border = "2px solid red"
            sx.style.color = "red"
            sx.style.border = "1px solid #e30101"
            ss.style.backgroundColor = "#ff00004d"
            ss.style.boxShadow = "0px 0px 30px 0px red"
        }
    }else{
        
        a.classList.add("none")
        s.classList.add("none")
        l.classList.add("none")
        start.classList.add("none")
        cont.classList.add("start-play")
        hafaf.style.height = "0"


        setTimeout(() => {
            cont.onmousemove = function(e){

                slah.style.left = (e.clientX - 45) + "px"
            }
            slah.style.opacity = "1"
        },1000);
        random()
    }
    
}

let divArre =[]
let numder = 0

function random (){
    let setInt1 = setInterval(function(){
        let contwidth = cont.offsetWidth 
        
        let rand = Math.floor(Math.random() * contwidth )- 35  
        
        let div = document.createElement("div")
        div.classList.add("mrkabat")
        div.style.left = rand + "px"
        cont.appendChild(div)

        let topOp = {
            element : div,
            top : -85
        }

        divArre.push(topOp)
    },1000)

    let setInt2 = setInterval(() => {
        let contHeight = document.body.offsetHeight
        divArre.forEach((ele , ndx) =>{
            if(ele.top > contHeight){
                warning.play()
                cont.removeChild(ele.element)
                divArre.splice(ndx , 1) 
                // --------------------
                // window.load()

                    clearInterval(setInt1)
                    clearInterval(setInt2)
                    over.style.display = "flex"

                
                // a.classList.remove("none")
                // s.classList.remove("none")
                // l.classList.remove("none")
                // start.classList.remove("none")
                // cont.classList.remove("start-play")
                // hafaf.style.height = "100%"

                    slah.style.opacity = "0"
                // --------------------
            }else{
                ele.top += 10
                ele.element.style.top = ele.top + "px"
            }
        })
    }, 50);

}

// =========================================================================

exet.onclick = ()=>{
    // console.log(window)
    location.reload()
}



// ------------------------------------------------------------------------------


cont.onclick = function(e){
    bombing.play()
    let divslah = document.createElement ("div")
    divslah.classList.add("divslah")
    divslah.style.left = e.clientX + "px"
    divslah.style.backgroundColor = col
    cont.appendChild(divslah)
    let contHeight = document.body.offsetHeight

    let bottom = 125
    
    const interval = setInterval(()=>{
        if(bottom > contHeight){
            clearInterval(interval)
            cont.removeChild(divslah)
        }else{
            bottom += 25
            divslah.style.bottom = bottom + "px"

        }
        exp(divslah , interval)
    },50)
}

function exp(divslah , interval) {
    divArre.forEach( (e , i) =>{
        if(is_colliding(divslah , e.element)){
            e.element.style.backgroundImage = "url(img/IMG_٢٠٢٣٠٤٠٢_١٥٠٢٥٨.png)"
            e.element.style.width = "130px"
            e.element.style.height = "130px"
            e.element.style.backgroundSize = "130px"
            e.element.style.transform = "translateX(-15px)"

            clearInterval(interval)
            cont.removeChild(divslah)
            bom.play()
            setTimeout(() => {
                divArre.splice(i , 1)
                cont.removeChild(e.element)
                many++
                localStorage.setItem("many" , many )
            }, 300);
            
        }
    })
}
// 
var is_colliding = function( $div1, $div2 ) {
	// Div 1 data
	//var d1_offset             = $div1.offset();
	var d1_height             = $div1.offsetHeight;
	var d1_width              = $div1.offsetWidth;
	var d1_distance_from_top  = $div1.offsettop + d1_height;
	var d1_distance_from_left = $div1.offsetLeft + d1_width;

	// Div 2 data
	//var d2_offset             = $div2.offset();
	var d2_height             = $div2.offsetHeight;
	var d2_width              = $div2.offsetWidth;
	var d2_distance_from_top  = $div2.offsetTop + d2_height;
	var d2_distance_from_left = $div2.offsetLeft + d2_width;

	var not_colliding = ( d1_distance_from_top < $div2.offsetTop || $div1.offsetTop > d2_distance_from_top || d1_distance_from_left < $div2.offsetLeft || $div1.offsetLeft > d2_distance_from_left );

	// Return whether it IS colliding
	return ! not_colliding;
};
