"use strict"

var result = {
    t : [],
    f : [],
    r : []
};

$(document).ready(function(){
    $('#parametros').append(`<input type="number" id="valor" min="1" max="99" placeholder="1-99"</input><br>`)

    $('#botao').click(function(){
        let q = parseInt($('#valor').val())
        if (q <= 99 && q > 1) {
            qtoTrue(q)
            $('body').append(`<p>Foi criada uma array de ${q} elementos, dos quais ${result.t.length} <i>true</i> e ${result.f.length} <i>false</i><br>`)
        result.t = []
        result.f = []
        result.r = []
        }
        else {alert('Insira um número entre 0 e 99!')}
    })
})

function qtoTrue(q) {
    let i1 = -1
    let i2 = -1;
    for (let i = 0; i < q; i++){
        var n = Math.round(Math.random()*10) 
        //console.log(n)
        if (n <= 5) { 
            i1++;
            console.log(i1)
            result.t[i1] = n;
            result.r[i] = true;
        }
        else {
            i2++;
            console.log(i2)
            result.f[i2] = n;
            result.r[i] = false;
        }
         
        console.log(result.t, result.f, result.r)
    }
    //for ()

}