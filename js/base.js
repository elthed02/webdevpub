

function Schema(){
    let schemaBox = {
        "Monaco": ["23 Maj", "Circuit de Monaco", "https://media.xtian.nu/flag/big/monaco.gif",],
        "Azerbadjan": ["6 Juni", "Baku City Circuit", "http://www.varldensflaggor.se/bilder/flaggor/azerbajdzjans-flagga.png",],
        "Turkiet": ["13 Juni", "Intercity Istanbul Park", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/200px-Flag_of_Turkey.svg.png",],
        "Frankrike": ["27 Juni", "Circuit Paul Ricard", "http://www.varldensflaggor.se/bilder/flaggor/frankrikes-flagga.png",],
        "Österrike": ["4 Juli", "Red Bull Ring", "http://www.varldensflaggor.se/bilder/flaggor/osterrikes-flagga.png",],
    };

    let grid = document.getElementById("grid-container")

    for (let key in schemaBox){
        let value = schemaBox[key]
        let datum = value[0]
        let bana = value[1]
        let flagga = value[2]


        let datumelement = document.createElement("datumBox")
        datumelement.id = "datumId"
        datumelement.className = "gridItem"
        datumelement.textContent = datum
        grid.appendChild(datumelement)

        let banaelement = document.createElement("banaBox")
        banaelement.id = "banaId"
        banaelement.className = "gridItem"
        banaelement.textContent = bana
        grid.appendChild(banaelement)

        let flaggaelement = document.createElement("img")
        flaggaelement.id = "flaggId"
        flaggaelement.className = "gridItem"
        flaggaelement.src = flagga
        flaggaelement.alt = "Flaggan tillhörande hemlandet för Grand Prixen"
        grid.appendChild(flaggaelement)

        
    }
}



