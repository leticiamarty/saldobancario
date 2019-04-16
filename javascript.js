// let casa = {  sala:["sofa","mesa","tapete","televisão"],  
//     quarto:["cama","guarda roupa","ventilador"],
//     cozinha:["fogão","geladeira","mesa","pia"]
// }


// let nome = prompt("qual é o seu nome ?");
// let saldo = 300;
// let vlrsaque = prompt ("ola " +nome+ " .digite o valor do saldo");
// let novosaldo = saldo - vlrsaque;

// if (vlrsaque <= saldo ){
//   alert("saque aprovado.seu novo saldo é:" +novosaldo)  
// }
// else {
//     alert("saldo insuficiente");
// }


let senhacadastrada = "lele123";
let senhaentrada = prompt ("digite a sua senha cadastrada");
let saldodiario = 500 ;

if(senhacadastrada===senhaentrada){
    let saldo = 300;
    let vlrsaque=prompt("qual o valor do saque?");
 
    if((vlrsaque<=saldo) && (vlrsaque<=saldodiario)){
        alert("saque aprovado!");
    }

    if(vlrsaque<=saldodiario){
        alert("saque aprovado!");
    }
    else{ 
        alert("saldo diario de" + saldodiario + "reais.")

    }

}

else{
    alert("senha incorreta!");
}




