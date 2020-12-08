eel.expose(showData)
function showData(title, thumbnai, views) {
    var data = document.getElementById("data");
    url = document.getElementById("input").value;
    help = document.getElementById("help")
    thumbnail = document.getElementById("thumbnail")
    video_views = document.getElementById("video-views")
    video_title = document.getElementById("video-title")
    eel.sendData(url)
    if (views === undefined || thumbnai === undefined || title === undefined) {
        help.innerHTML = "loading... <br>Please wait Oniii-Chan ><"
    }
    else {
        data.style.visibility = "visible";
        thumbnail.innerHTML = `<img class="thumbnail" src="${thumbnai}" alt="${title}"></img>`
        help.innerHTML = "-Title : " + title + ' ' + " -Views : " + views;
        video_views.innerHTML = `<p><br>Views : <span id="views">${views}</span></p>`
        video_title.innerHTML = `<p>Title : <span id="title">${title}<br></span></p>`

    }
}
eel.expose(downloadVideo)
function downloadVideo() {
    res = String(document.getElementById("res").value);
    url = document.getElementById("input").value;
    help = document.getElementById("help")
    eel.download(url, res)
    help.innerHTML = "Downlaoding... <br>Please wait Oniii-Chan ><"
}
eel.expose(finished)
function finished() {
    help = document.getElementById("help")
    help.innerHTML = "Downlaoding finnished, Feel free to use me again Oniii-Sama"
}