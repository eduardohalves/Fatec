let x:number[] = [1, 2, 3];

for(let i=0; i<3; ++i)
{
    console.log(x[i]);
}

for(let gabriele of x){
    console.log(gabriele);
} 


x.forEach( (v) =>  {console.log(v);
});

x.forEach( function f(v)  {console.log(v);
});

x.forEach( f2);
function f2(v:any)  {console.log(v);
}


x.forEach( tratador);

function tratador(valor:any, indice:any){
    console.log("valor:", valor);
    console.log("índice:", indice);
}

let pessoa:any = {'nome': 'pedro', 'idade':20};

for(let p in pessoa){
    console.log(p);
}


export {}