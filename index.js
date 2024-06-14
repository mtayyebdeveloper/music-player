// navbar open functions
let navopenicon = document.getElementById("navopen-icon");
let navbar = document.getElementById("nav-bar");
let navbar_open = false;

navopenicon.addEventListener("click", () => {
  navbar_open = !navbar_open;
  navbar.style.display = `${navbar_open ? "block" : "none"}`;
});

// main js contant
let imgs = document.getElementById("imgs");
let playbtn = document.getElementById("playicon");
let songname = document.getElementById("name");
let music = document.getElementById("music");
let backbtn = document.getElementById("backward");
let forbtn = document.getElementById("forward");

// play btn function
let musicstart = false;
let musicplay = () => {
  musicstart = false;
  music.play();
  imgs.classList.add("img-rotate");
  playbtn.classList.replace("fa-play", "fa-pause");
};

let musicstop = () => {
  musicstart = true;
  music.pause();
  imgs.classList.remove("img-rotate");
  playbtn.classList.replace("fa-pause", "fa-play");
};

playbtn.addEventListener("click", () => {
  if (musicstart) {
    musicplay();
  } else {
    musicstop();
  }
});

// forward and backward btn functions
let allsong = [
  {
    songnames:
      "audeos/geceler_song_dj.geceler_song_dj_remix.geceler_kapkara_günler_her_anim_original_song_dj_remix..(360p).mp3",
    songstitle: "Hara hara arbic song",
    images:"img/2.jpg",
  },
  {
    songnames: "audeos/Khayala_Tovuzlu_-_Derdim_2020_(Darkness_at_night)(240p).mp3",
    songstitle: "Arbic song 'Gejla'",
    images:"img/coading1.jpg",
  },
  {
    songnames:
      "audeos/KARAN KHAN with RAHMAN BABA poetry  کرن خان  ما د خدای لپاره يار .mp3ليدلی نه دی",
    songstitle: "Rahman baba",
    images:"img/contact-form1.jpg",
  },
  {
    songnames:
      "audeos/KHKOLI_KHKOLI_DA_SWABI__Pashto_HD_Film__BADMASHI_DA_KHYALA_KAWA_song__Arbaz_Khan_&_Jiya_Butt(128k).mp3",
    songstitle: "Da hkole hkole da swabi",
    images:"img/blog13.jpg",
  },
  {
    songnames: "audeos/dj music.mp3",
    songstitle: "DJ Remix",
    images:"img/tree-2435269_640.jpg",
  },
  {
    songnames: "audeos/banjara.mp3",
    songstitle: "Banjara song",
    images:"img/blog1.jpg",
  },
  {
    songnames: "audeos/dunya da gam.mp3",
    songstitle: "Donya da gam",
    images:"img/tree-736885_1280.jpg",
  },
  {
    songnames: "audeos/bom degy bom.mp3",
    songstitle: "Bom dege Bom Bom Bom",
    images:"img/Picsart_23-05-22_14-10-50-915.jpg",
  },
  {
    songnames: "audeos/dil ko karar.mp3",
    songstitle: "Dil ko karar aya",
    images:"img/Picsart_23-05-18_14-01-10-875.jpg",
  },
  {
    songnames: "audeos/Arbix remix.mp3",
    songstitle: "Arbic remix",
    images:"img/beautiful-people-3954533_640.jpg",
  },
  {
    songnames: "audeos/chor dyaa.mp3",
    songstitle: "Chod deya wo rasta",
    images:"img/blog2.jpg",
  },
  {
    songnames: "audeos/February 22, 2023.mp3",
    songstitle: "Poshto song",
    images:"img/blog3.jpg",
  },
  {
    songnames:
      "audeos/Free_Adventure_Background_Music_for_Travel_Vlog_YouTube_Videos_No_Copyright_Royalty_Free(128k).mp3",
    songstitle: "Background music",
    images:"img/blog14.jpg",
  },
  {
    songnames:
      "audeos/Laung_Laachi_Title_Song_Mannat_Noor__Ammy_Virk,_Neeru_Bajwa,Amberdeep__Latest_Punjabi_Movie_2018(128k).mp3",
    songstitle: "Ao mere lang mere lache",
    images:"img/sunset-1651426_640.jpg",
  },
  {
    songnames:
      "audeos/Main_Tera_Hero__Galat_Baat_Hai_Full_Video_Song__Varun_Dhawan,_Ileana_D'Cruz,_Nargis_Fakhri(128k).mp3",
    songstitle: "Galat baat hai",
    images:"img/3.jpg",
  },
  {
    songnames:
      "audeos/Mere_Mehboob_Qayamat_Hogi__Sad_Songs__Heart_Touching_Love_Story__Aaj_Ruswa_Teri_Galiyon_Mein(128k).mp3",
    songstitle: "Mere mehbob qayamat hoge",
    images:"img/web-ejensy4.jpg",
  },
  {
    songnames:
      "audeos/Mujhko_Barsaat_Bana_Lo_Full_Song_(Audio)_Junooniyat__Pulkit_Samrat,_Yami_Gautam__T-Series(240p).mp3",
    songstitle: "Mujko barsat banado",
    images:"img/website8.jpg",
  },
  {
    songnames:
      "audeos/Nazia_Iqbal_&_Shahsawar_Pashto_Songs_2018__Pashto_music_1080p_music_video(128k).mp3",
    songstitle: "Nezia iqbal poshto song",
    images:"img/website-de.jpg",
  },
  {
    songnames:
      "audeos/Night_in_Dubai_❌_Arabic_❌_Remix_❌_Song_2021_❌_Bass_Bosted_(ALL_Music_MIX)(360p)_mp3.mp3",
    songstitle: "Night in dubai arbix remix",
    images:"img/website-de1.jpg",
  },
  {
    songnames: "audeos/No Love   Slowed+Reverb   AP Bass Boosted.mp3",
    songstitle: "No love song",
    images:"img/website-design-48829.jpg",
  },
  {
    songnames:
      "audeos/Pashto_HD_Film_Zandan_New_Song_-_CHARSYAN_by_Wisal(128k).mp3",
    songstitle: "Charsyan ow malangan poshto song",
    images:"img/website-design-57476.jpg",
  },
  {
    songnames: "audeos/Pashto_saaz_(All_TV)(360p).mp3",
    songstitle: "Poshto mast saz",
    images:"img/website-design-98828.jpg",
  },
  {
    songnames: "audeos/qarara rasha.mp3",
    songstitle: "Ow karara rasha",
    images:"img/website-designer-working.jpg",
  },
  {
    songnames: "audeos/Saanson Ko (LYRICS) - Arijit Singh I  SubhamMix Lyrics.mp3",
    songstitle: "Saanso ko jeny ka sahara mekgaya",
    images:"img/websites12 (2).jpg",
  },
  {
    songnames: "audeos/Sanam_Teri_Kasam_+_Lirik(48k).mp3",
    songstitle: "Sanam taire kasam",
    images:"img/websites12.jpg",
  },
  {
    songnames: "audeos/Randall_-_Wahran_(_remix_)(48k).mp3",
    songstitle: "Randall wahran remix",
    images:"img/3.jpg",
  },
  {
    songnames:
      "audeos/Pashto_songs_2020__Shah_Farooq_And_Nazia_Iqbal__Shrang_Warka_Bangro__song___پشتو_music(128k).mp3",
    songstitle: "Shrang warka bangro la",
    images:"img/blog13.jpg",
  },
  {
    songnames:
      "audeos/TERI_MERI_LYRICS___SHREYA_GHOSHAL,_RAHAT_FATEH_ALI_KHAN__SALMAN_K_,_KAREENA_K(240p)_mp3.mp3",
    songstitle: "Tere mere song",
    images:"img/2.jpg",
  },
  {
    songnames: "audeos/Yara_Taar_Aghe_Kali_Ta_Ma_Raza,,,(128k).mp3",
    songstitle: "Yara tar age kale ta maraza",
    images:"img/blog14.jpg",
  },
  {
    songnames: "audeos/yelili_yelila_song(360p)_mp3.mp3",
    songstitle: "Yelili yelila song",
    images:"img/websites12.jpg",
  },
];

let loadsong = (allsong) => {
  songname.textContent = allsong.songstitle;
  music.src = allsong.songnames;
  imgs.src = allsong.images;
};

songindex = 0;
let nextsongbtn = () => {
  songindex = (songindex + 1) % allsong.length;
  loadsong(allsong[songindex]);
  musicplay();
};

let backsongbtn = () => {
  songindex = (songindex - 1 + allsong.length) % allsong.length;
  loadsong(allsong[songindex]);
  musicplay();
};

forbtn.addEventListener("click", nextsongbtn);
backbtn.addEventListener("click", backsongbtn);
