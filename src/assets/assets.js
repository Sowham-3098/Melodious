import bell_icon from './bell.png'
import home_icon from './home.png'
import like_icon from './like.png'
import loop_icon from './loop.png'
import mic_icon from './mic.png'
import next_icon from './next.png'
import play_icon from './play.png'
import pause_icon from './pause.png'
import plays_icon from './plays.png'
import prev_icon from './prev.png'
import search_icon from './search.png'
import shuffle_icon from './shuffle.png'
import speaker_icon from './speaker.png'
import stack_icon from './stack.png'
import zoom_icon from './zoom.png'
import plus_icon from './plus.png'
import arrow_icon from './arrow.png'
import mini_player_icon from './mini-player.png'
import queue_icon from './queue.png'
import volume_icon from './volume.png'
import arrow_right from './right_arrow.png'
import arrow_left from './left_arrow.png'
import spotify_logo from './spotify_logo.png'
import clock_icon from './clock_icon.png'
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'
import img5 from './img5.jpg'
import img6 from './img6.jpg'
import img7 from './img7.jpg'
import img8 from './img8.jpg'
import img9 from './img9.jpg'
import img10 from './img10.jpg'
import img11 from './img11.jpg'
import img12 from './img12.jpg'
import img13 from './img13.jpg'
import img14 from './img14.jpg'
import img15 from './img15.jpg'
import img16 from './img16.jpg'
import song1 from  './song1.mp3'
import song2 from  './song2.mp3'
import song3 from  './song3.mp3'
import song4 from  './song4.mp3'
import song5 from  './song5.mp3'
import song6 from  './song6.mp3'
import song7 from  './song7.mp3'
import genre1 from './genre1.jpg'
import genre2 from './genre2.jpeg'
import genre3 from './genre3.jpg'
import genre4 from './genre4.jpg'
import genre5 from './genre5.jpg'
import genre6 from './genre6.jpg'
import genre7 from './genre7.jpg'
import genre8 from './genre8.jpg'
export const assets = {
    bell_icon,
    home_icon,
    like_icon,
    loop_icon,
    mic_icon,
    next_icon,
    play_icon,
    plays_icon,
    prev_icon,
    search_icon,
    shuffle_icon,
    speaker_icon,
    stack_icon,
    zoom_icon,
    plus_icon,
    arrow_icon,
    mini_player_icon,
    volume_icon,
    queue_icon,
    pause_icon,
    arrow_left,
    arrow_right,
    spotify_logo,
    clock_icon
}

export const albumsData = [
    {   
        id:0,
        name: "Top 50 Global",
        image: img8,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#2a4365"
    },
    {   
        id:1,
        name: "Top 50 India",
        image: img9,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#22543d"
    },
    {   
        id:2,
        name: "Trending India",
        image: img10,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#742a2a"
    },
    {   
        id:3,
        name: "Trending Global",
        image: img16,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#44337a"
    },
    {   
        id:4,
        name: "Mega Hits,",
        image: img11,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#234e52"
    },
    {   
        id:5,
        name: "Happy Favorites",
        image: img15,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#744210"
    }
]
export const genresData = [
    {   
        id: 0,
        name: "Rock Classics",
        image: genre1
        , // replace with actual image import
        desc: "The greatest rock anthems of all time",
        bgColor: "#2a4365"
    },
    {   
        id: 1,
        name: "Pop Hits",
        image: genre2, // replace with actual image import
        desc: "The biggest pop songs right now",
        bgColor: "#e53e3e"
    },
    {   
        id: 2,
        name: "Hip Hop Essentials",
        image: genre3, // replace with actual image import
        desc: "The essential hip hop tracks",
        bgColor: "#2c7a7b"
    },
    {   
        id: 3,
        name: "Jazz Vibes",
        image: genre4, // replace with actual image import
        desc: "Smooth and relaxing jazz tunes",
        bgColor: "#2a4365"
    },
    {   
        id: 4,
        name: "Country Roads",
        image: genre5, // replace with actual image import
        desc: "Top country hits to enjoy",
        bgColor: "#22543d"
    },
    {   
        id: 5,
        name: "Classical Favorites",
        image: genre6, // replace with actual image import
        desc: "Timeless classical masterpieces",
        bgColor: "#742a2a"
    },
    {   
        id: 6,
        name: "Electronic Dance",
        image: genre7, // replace with actual image import
        desc: "High-energy electronic dance tracks",
        bgColor: "#44337a"
    },
    {   
        id: 7,
        name: "Indie Anthems",
        image: genre8, // replace with actual image import
        desc: "The best of indie music",
        bgColor: "#553c9a"
    }
];


export const songsData = [
    {
        id:0,
        name: "Sajni Re",
        image: img1,
        file:song1,
        desc:"Arijit Singh",
        duration:"2:50"
    },
    {
        id:1,
        name: "Choo Lo",
        image: img2,
        file:song2,
        desc:"The Local Train",
        duration:"3:53"
    },
    {
        id:2,
        name: "Hai jamalo (Munjya)",
        image: img3,
        file:song3,
        desc:"Sachin Jiggar",
        duration:"2:29"
    },
    {
        id:3,
        name: "Hukum-Thalaivar Alappara",
        image: img4,
        file:song4,
        desc:"Anirudh Ravichander,Super Subu",
        duration:"3:26"
    },
    {
        id:4,
        name: "Illuminati",
        image: img5,
        file:song5,
        desc:"Sushin Shyam, Dabzee, Vinayak Sasikumar",
        duration:"2:28"
    },
    {
        id:5,
        name: "Arjan Vailly (Animal)",
        image: img7,
        file: song7,
        desc:"Bhupinder Babbal",
        duration:"3:02"
        
    },
    {
        id:6,
        name: "Idhazin Oram-The Innocence of Love",
        image: img6,
        file:song6,
        desc:"Anirudh Ravichander,Ajesh",
        duration:"3:24"
    },
    
];