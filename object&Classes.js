function solve(input){

class Song {
    constructor(typeList, name, time){
this.typeList = typeList;
this.name=name;
this.time = time;
    }
}
let n = input.shift();
let songs = [];
for (let index = 0; index < n; index++) {
   let currentline = input.shift();
//    syzdawa promenlivi direktno ot text
    let [currType, currName, currTime] = currentline.split('_');
let song = new Song(currType, currName, currTime);
songs.push(song);
}
let wantedList = input.shift();
for (const song of songs) {
    if (song.typeList == wantedList || wantedList == 'all') {
        console.log(song.name);
    }
}


}