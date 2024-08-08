const lista =[]

function agregarnombre(){

    let nombre = document.getElementById("nombre")
    let persona= {
        nombre:nombre.value,

    }

    nombre.value=""
    lista.push(persona)
        mostrarlista()

}

function mostrarlista(){

    let salida = document.getElementById("salida")
    salida.innerHTML =""

    lista.map((elemento,indice)=>{
        salida.innerHTML +=`
        
        <tr>
        <td>${elemento.nombre}</td>
        <td>*</td>
    </tr>        
        `
    })
}