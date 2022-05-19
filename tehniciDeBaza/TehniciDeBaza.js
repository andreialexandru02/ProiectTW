window.onload = () => {
    setInterval(Photo,10000);
    arr=[
        "url('https://images.wallpapersden.com/image/download/tent-camping-landscape_Zmlsam6UmZqaraWkpJRnamtlrWZpaWU.jpg')",
        "url('http://trumpwallpapers.com/wp-content/uploads/Camping-Wallpaper-01-1920x1080-1.jpg')",
        "url('https://wallpapercave.com/wp/wp2572362.jpg')",
        "url('https://wallpapercave.com/wp/LdTAvbA.jpg')",
        "url('https://wallpapermemory.com/uploads/456/moraine-lake-wallpaper-full-hd-128727.jpg')",
        "url('https://www.pixelstalk.net/wp-content/uploads/2016/08/Mountains-Lake-1080p-Nature-Background.jpg')",
        "url('https://wallpapercave.com/wp/wp7658559.jpg')",
        "url('https://blog.depositphotos.com/wp-content/uploads/2017/07/Soothing-nature-backgrounds-2.jpg.webp')" ]
         
    function Photo(){
       
        randomElement = arr[Math.floor(Math.random() * arr.length)];
        document.body.style.backgroundImage = randomElement;
    }
    let counter=[0,0,0,0,0];
    paragraf1 = document.getElementById("p1");
    paragraf2 = document.getElementById("p2");
    paragraf3 = document.getElementById("p3");
    paragraf4 = document.getElementById("p4");
    paragraf5 = document.getElementById("p5");

   
    header1 = document.getElementById("aer");
    header2 = document.getElementById("adapost");
    header3 = document.getElementById("foc");
    header4 = document.getElementById("apa");
    header5 = document.getElementById("hrana");

    
    document.addEventListener('keypress', (e) => {

        if(e.key=='1'){
           
            console.log(1)
            counter[0]+=1
            paragraf1.style.fontSize="3vh"
            paragraf2.style.fontSize="3vh"
            paragraf3.style.fontSize="3vh"
            paragraf4.style.fontSize="3vh"
            paragraf5.style.fontSize="3vh"
            header1.style.fontSize="4vh"
            header2.style.fontSize="4vh"
            header3.style.fontSize="4vh"
            header4.style.fontSize="4vh"
            header5.style.fontSize="4vh"

            header1.style.fontSize="8vh"
            paragraf1.style.fontSize="5vh"
            
        }
    
   

        if(e.key=='2'){
           
            console.log(2)
            counter[1]+=1
            paragraf1.style.fontSize="3vh"
            paragraf2.style.fontSize="3vh"
            paragraf3.style.fontSize="3vh"
            paragraf4.style.fontSize="3vh"
            paragraf5.style.fontSize="3vh"
            header1.style.fontSize="4vh"
            header2.style.fontSize="4vh"
            header3.style.fontSize="4vh"
            header4.style.fontSize="4vh"
            header5.style.fontSize="4vh"

            header2.style.fontSize="8vh"
            paragraf2.style.fontSize="5vh"
        }

    
        if(e.key=='3'){
           
            console.log(3)
            counter[2]+=1
            paragraf1.style.fontSize="3vh"
            paragraf2.style.fontSize="3vh"
            paragraf3.style.fontSize="3vh"
            paragraf4.style.fontSize="3vh"
            paragraf5.style.fontSize="3vh"
            header1.style.fontSize="4vh"
            header2.style.fontSize="4vh"
            header3.style.fontSize="4vh"
            header4.style.fontSize="4vh"
            header5.style.fontSize="4vh"

            header3.style.fontSize="8vh"
            paragraf3.style.fontSize="5vh"
        }
  

        if(e.key=='4'){
           
            console.log(4)
            counter[3]+=1
            paragraf1.style.fontSize="3vh"
            paragraf2.style.fontSize="3vh"
            paragraf3.style.fontSize="3vh"
            paragraf4.style.fontSize="3vh"
            paragraf5.style.fontSize="3vh"
            header1.style.fontSize="4vh"
            header2.style.fontSize="4vh"
            header3.style.fontSize="4vh"
            header4.style.fontSize="4vh"
            header5.style.fontSize="4vh"

            header4.style.fontSize="8vh"
            paragraf4.style.fontSize="5vh"
        }



        if(e.key=='5'){
           
            console.log(5)
            counter[4]+=1
            paragraf1.style.fontSize="3vh"
            paragraf2.style.fontSize="3vh"
            paragraf3.style.fontSize="3vh"
            paragraf4.style.fontSize="3vh"
            paragraf5.style.fontSize="3vh"
            header1.style.fontSize="4vh"
            header2.style.fontSize="4vh"
            header3.style.fontSize="4vh"
            header4.style.fontSize="4vh"
            header5.style.fontSize="4vh"

            header5.style.fontSize="8vh"
            paragraf5.style.fontSize="5vh"
        }
   
        if(e.key=='Enter'){
            
           
            let i = counter.indexOf(Math.max(...counter));
            let max=Math.max(...counter);
            localStorage.setItem('maxim', max);
            localStorage.setItem('index', i);
            console.log("Saved")
        }
        if(e.key=='r'){
            localStorage.clear();
            console.log("Cleared")
        }
        if(e.key=='k'){
            console.log(paragraf1.getBoundingClientRect())  //getBoundingClientReact
            console.log(getComputedStyle(header1)) // getComputedStyle()
        }
   })
    document.onclick =() =>{
        
        max=parseInt(localStorage.getItem("maxim"));
        i=parseInt(localStorage.getItem("index"))+1;
        console.log(`Textul ${i} a fost apăsat de ${max} ori!`)
        
        
       // console.log(i+1)
    }

    
}
