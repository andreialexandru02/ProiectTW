window.onload = () => {
    setInterval(Photo,5000);
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
        console.log(randomElement);
        document.body.style.backgroundImage = randomElement;
    }

}
