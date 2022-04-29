var a = 59
if(a >=18 && a<60){
    console.log('Apto para Votar')
} else 
    if((a >=16 && a<=17)||a>=60){
        console.log('Voto opcional')
    } else{
        console.log('Inapto')
    }