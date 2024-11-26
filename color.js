let color = document.getElementById("bgcolor")
let Bradius = document.getElementById("Radius")
let image =document.querySelector("img")

function backcolor(a){
    if(a.key=== "Enter"){
        document.body.style.backgroundColor=color.value
    }
}

function Border(a){
    if(a.key === "Enter"){
        image.style.borderRadius=`${Bradius.value}px`
    }
}
