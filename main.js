// Một số bài hát có thể bị lỗi do liên kết bị hỏng. Vui lòng thay thế liên kết khác để có thể phát
// Some songs may be faulty due to broken links. Please replace another link so that it can be played

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const heading=$('header h2')
const cdThumb=$('.cd-thumb')
const audio =$('#audio')
const cd= $('.cd')
const playBtn= $('.btn-toggle-play')
const player= $('.player')
const progress= $('#progress')
const nextBtn=$('.btn-next')
const prevBtn=$('.btn-prev')
const randomBtn=$('.btn-random')
const playlist = $('.playlist')
const cdlyrics=$('.cd-lyrics')

const app = {
    currentIndex:0,
    isPlaying:false,
    isRandom: false,
  
  // (1/2) Uncomment the line below to use localStorage
  // config: JSON.parse(localStorage.getItem(PlAYER_STORAGE_KEY)) || {},
  songs: [
    {
      name: "Chandelier",
      singer: "Raftaar x Fortnite",
      path: './music/song1.mp3',
      image: './image/sia.png',
      lyrics:'Party girls don\'t get hurt Can\'t feel anything, when will I learn I push it down,push it down I\'m the one "for a good time call Phone\'s blowin\' up, ringin\' my doorbell I feel the love, feel the love 1, 2, 3, 1, 2, 3 drink 1, 2, 3, 1, 2, 3 drink 1, 2, 3, 1, 2, 3 drink Throw \'em back, till I lose count I\'m gonna swing from the chandelier From the chandelier I\'m gonna live like tomorrow doesn\'t exist Like it doesn\'t existI\'m gonna fly like a bird through the night Feel my tears as they dry I\'m gonna swing from the chandelier From the chandelier But I\'m holding on for dear life'
// Feel my tears as they dry
// I'm gonna swing from the chandelier
// From the chandelier

// But I'm holding on for dear life
// Won't look down, won't open my eyes
// Keep my glass full until morning light
// 'Cause I'm just holding on for tonight
// Help me, I'm holding on for dear life
// Won't look down, won't open my eyes
// Keep my glass full until morning light
// 'Cause I'm just holding on for tonight
// On for tonight

// Sun is up, I'm a mess
// Gotta get out now, gotta run from this
// Here comes the shame, here comes the shame

// 1, 2, 3, 1, 2, 3 drink
// 1, 2, 3, 1, 2, 3 drink
// 1, 2, 3, 1, 2, 3 drink

// Throw 'em back till I lose count

// I'm gonna swing from the chandelier
// From the chandelier
// I'm gonna live like tomorrow doesn't exist
// Like it doesn't exist
// I'm gonna fly like a bird through the night
// Feel my tears as they dry
// I'm gonna swing from the chandelier
// From the chandelier

// But I'm holding on for dear life
// Won't look down, won't open my eyes
// Keep my glass full until morning light
// 'Cause I'm just holding on for tonight
// Help me, I'm holding on for dear life
// Won't look down, won't open my eyes
// Keep my glass full until morning light
// 'Cause I'm just holding on for tonight
// On for tonight

// On for tonight
// 'Cause I'm just holding on for tonight
// Oh, I'm just holding on for tonight
// On for tonight, on for tonight
// 'Cause I'm just holding on for tonight
// 'Cause I'm just holding on for tonight
// Oh, I'm just holding on for tonight
// On for tonight, on for tonight

    },
    {
      name: "Two Thoundsand and Two",
      singer: "Raftaar x Brobha V",
      path: './music/song2.mp3',
      image: './image/song7.jfif'
     },
    {
      name: "Symphony",
      singer: "Raftaar x Nawazuddin Siddiqui",
      path: './music/song3.mp3',
      image: './image/song3.png'
    },
    {
      name: "Let Her Go",
      singer: "Raftaar",
      path: './music/song4.mp3',
      image: './image/song8.jfif'
    },
    {
      name: "Damn",
      singer: "Raftaar x kr$na",
      path: './music/song5.mp3',
      image: './image/song9.jfif'
    },
    {
      name: "Big Big Girl",
      singer: "Raftaar x Harjas",
      path: './music/song6.mp3',
      image: './image/song6.jfif'
    },
    {
        name: "Counting Star",
        singer: "Raftaar x Harjas",
        path: './music/song7.mp3',
        image: './image/song1.jfif'
      },
    {
    name: "The Night",
    singer: "Raftaar x Harjas",
    path: './music/song8.mp3',
    image: './image/song11.jfif'
    },
    {
        name: "She's Gone",
        singer: "Raftaar x Harjas",
        path: './music/song9.mp3',
        image: './image/song12.jfif'
      },
    {
        name: "No Name",
        singer: "Raftaar x Harjas",
        path: './music/song10.mp3',
        image: './image/song10.jfif'
      },
    {
    name: "Leave the door open",
    singer: "Raftaar x Harjas",
    path: './music/song11.mp3',
    image: './image/song13.jfif'
    },
    {
      name: "Perfect",
      singer: "Raftaar x Harjas",
      path: './music/song12.mp3',
      image: './image/song14.jfif'
      },
    {
      name: "Senorita",
      singer: "Raftaar x Harjas",
      path: './music/song13.mp3',
      image: './image/song15.jfif'
      },
    {
      name: "Lemon tree",
      singer: "Raftaar x Harjas",
      path: './music/song14.mp3',
      image: './image/song16.jfif'
      },
    {
      name: "Waitting for love",
      singer: "Raftaar x Harjas",
      path: './music/song15.mp3',
      image: './image/song17.jfif'
      },
    {
      name: "Dance monkey",
      singer: "Raftaar x Harjas",
      path: './music/song16.mp3',
      image: './image/song18.jfif'
      },
    {
      name: "Someone you loved",
      singer: "Raftaar x Harjas",
      path: './music/song17.mp3',
      image: './image/song19.jfif'
      },
    {
      name: "Thời không sai lệch",
      singer: "Raftaar x Harjas",
      path: './music/song18.mp3',
      image: './image/song20.jfif'
      },
    {
      name: "Giấc mơ không thể đánh thức",
      singer: "Raftaar x Harjas",
      path: './music/song19.mp3',
      image: './image/song21.jfif'
      },
    {
      name: "Yến Vô Hiết",
      singer: "Raftaar x Harjas",
      path: './music/song20.mp3',
      image: './image/song1.jfif'
      },
    {
      name: "Gặp người đúng lúc",
      singer: "Raftaar x Harjas",
      path: './music/song21.mp3',
      image: './image/song11.jfif'
      },
  ],
  start:function(){
      this.defineProperties()
      this.render()
      this.handleEvents()
      this.loadCurrentSong()
    //   this.nextSong()
      
  },
  handleEvents: function(){
    
    const cdWidth = cd.offsetWidth
    const _this= this
    //xử lý cd quay, dừng
    
    
    //xử lý phóng to, thu nhỏ
        document.onscroll = function(){
            
            const scrollTop = window.scrollY;
            const newCDWWidth = cdWidth - scrollTop
            cd.style.width= newCDWWidth>0 ? newCDWWidth+'px':0;
            cd.style.opacity= newCDWWidth/cdWidth;
        }
    //xử lý khi click play
        playBtn.onclick= function(){
            if(_this.isPlaying){
                
                audio.pause()
                
            }else{
                
                audio.play()

                
            }
        }
    //khi song được play
        audio.onplay = function(){
            _this.isPlaying=true
            player.classList.add('playing')
        }
    //khi song bị pause
        audio.onpause = function(){
            _this.isPlaying=false
            player.classList.remove('playing')
        }
    //khi tiến độ bài hát được thay đổi
        audio.ontimeupdate = function(){
            if(audio.duration){
                const progressPercent =Math.floor(audio.currentTime/audio.duration*100)
                progress.value = progressPercent
            }
        }
    //xử lý khi tua song
        progress.onchange = function(e){
            const seekTime= audio.duration/100*e.target.value
            audio.currentTime = seekTime
            }
    //khi next song
    nextBtn.onclick= function(){
        if(_this.isRandom){
            _this.playRandomSong()
        }else{
        _this.nextSong()
        }
        _this.render()
        audio.play()
    }
    //khi prev song
    prevBtn.onclick= function(){
        if(_this.isRandom){
            _this.playRandomSong()
            
        }else{
            _this.prevSong()
        }
        _this.render()
        audio.play()
    }
    //khi bấm random
    randomBtn.onclick= function(){
        _this.isRandom=!_this.isRandom
        randomBtn.classList.toggle('active',_this.isRandom)
    }
    //sự kiện onednd
    audio.onended= function(){
        nextBtn.click()
    }
    //lắng nghe sự kiện
    playlist.onclick= function(e){
      const songNode=e.target.closest('.song:not(.active)')
      //xử lý khi click vào song
      if(songNode|| e.target.closest('.option')){
        if(songNode){
          _this.currentIndex=Number(songNode.dataset.index)
          _this.loadCurrentSong()
          _this.render()
          audio.play()
        }
      }
     
    }
    //sự kiện lời bài hát
    
        //     var audioPlayer = document.getElementById("audio");
        //     var subtitles = document.getElementById("cd-lyrics");
        //     var syncData = [
        //           { "end": "10.325","start": "0.05","text": "Party girls don't get hurt Can't feel anything, when will I learn I push it down, push it down" },
        //           {"end": "20.685","start": "10.328","text": "I'm the one for a good time callPhone's blowin' up, they're ringin' my doorbellI feel the love, feel the love" },
        //           /* ... and so on ... full json is in the demo */
        //         ];
        //     createSubtitle();

        //     function createSubtitle()
        //     {
        //         var element;
        //         for (var i = 0; i < syncData.length; i++) {
        //             element = document.createElement('span');
        //             element.setAttribute("id", "c_" + i);
        //             element.innerText = syncData[i].text + " ";
        //             subtitles.appendChild(element);
        //         }
        //     }

        //     audioPlayer.addEventListener("timeupdate", function(e){
        //         syncData.forEach(function(element, index, array){
        //             if( audioPlayer.currentTime >= element.start && audioPlayer.currentTime <= element.end )
        //                 subtitles.style.background = 'yellow';
        //         });
        //     });
        // (window, document);

       
    },
  defineProperties:function(){
    Object.defineProperty(this, 'currentSong',{
        get:function() {
            return this.songs[this.currentIndex]
        }
    })
  },
  
  loadCurrentSong: function(){
    
    heading.textContent= this.currentSong.name
    cdThumb.style.backgroundImage=`url('${this.currentSong.image}')`
    // cdlyrics.textContent=this.currentSong.lyrics
    audio.src= this.currentSong.path

   
  },
    nextSong: function(){
      this.currentIndex++
      if(this.currentIndex >=this.songs.length){
          this.currentIndex =0
      }
      this.loadCurrentSong()
  },
  prevSong: function(){
    this.currentIndex--
    if(this.currentIndex <0){
        this.currentIndex = this.songs.length-1
    }
    this.loadCurrentSong()
},
playRandomSong: function(){
    // let newIndex; 
    do{
        newIndex = Math.floor(Math.random()*app.songs.length)
    }
    while(newIndex === this.currentIndex)
    // 
    this.currentIndex= newIndex
    this.loadCurrentSong()
},

  render: function () {
    var htmls= this.songs.map((song, index)=>{
        return `
        <div class="song ${index=== this.currentIndex? 'active':''}" data-index="${index}">
            <div class="thumb" style="background-image: url('${song.image}')">
            </div>
            <div class="body">
                <h3 class="title">${song.name}</h3>
                <p class="author">${song.singer}</p>
            </div>
            <div class="option">
                <i class="fas fa-ellipsis-h"></i>
            </div>
        </div>
        `
    })
    $('.playlist').innerHTML = htmls.join('')
   
  },
  
};

app.start();
