class Marker {
constructor(size, color, remaniningInk){
this.size = size;
this.color = color;
this.remaniningInk = remaniningInk;
    }
    write(word){
        const characterCount = word.split('').filter(char=>char!==' ').length
        
        this.remaniningInk -= word.length;
       
        if(characterCount>this.remaniningInk){
            return word.slice(0, this.remaniningInk)
        }
        return word
    }
}

module.exports = Marker
