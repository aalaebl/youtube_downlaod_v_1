import eel
from pytube import YouTube


@eel.expose
def sendData(url):
    try:
    # Video Info
        yt = YouTube(url)
        thumbnail  = str(yt.thumbnail_url)
        views = str(yt.views)
        title = str(yt.title)
    # Transfering video infos to js
        eel.showData(title, thumbnail, views)
        print("We got the video")      
    except Exception as e:
        print("Download failed due to: ", e)

@eel.expose
def download(url, res):
    yt = YouTube(url)
    eel.downloadVideo()
    video = yt.streams.filter(file_extension='mp4').order_by('resolution').desc()
    video = video.get_by_resolution(res)
    print("You picked:", video.resolution)
    print(video)
    print("Start downloading for: ", yt.title)
    video.download()
    print("Finnished downloading for: ", yt.title)
    eel.finished()
    exit()
    
eel.init('www')
eel.start("index.html")
