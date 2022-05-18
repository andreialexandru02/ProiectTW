// function  divradom() {
//     var divtags=$("div");
//     if(divtags.lenght){
//         var displayDiv=Map.floor(Math.random() * divtags.lenght);
//     }
// }





window.onload = () => {
    
    setTimeout(Buton,3000);
    function Buton() {
        document.getElementById("apasa").remove();
        const button = document.getElementById('generate');
        let ok=0;
        button.onclick = () => {
            let arr= ["text1","text2",'text3','text4','text5']; 
            if( ok == 0){
                randomElement = arr[Math.floor(Math.random() * arr.length)];
                document.getElementById(randomElement).style.display="inline"; 
                ok = 1;
            }
            else{
                document.getElementById(randomElement).style.display="none";
                randomElement = arr[Math.floor(Math.random() * arr.length)];
                document.getElementById(randomElement).style.display="inline";
            }
        }
    }
    // setInterval(StyleButon1,2000);
    // function StyleButon1(){
    //     document.getElementById("generate").style.animation='AnimatieButon 1s'; // nu merge animatie decat o singura data, dar consola merge
    //     document.getElementById("generate").style.animation-iteration-count = 'infinite';
    //     console.log(1);
    // }
    
    
    
        
    

}