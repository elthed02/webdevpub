function Drivers(){
    let driversBox = {
        "Verstappen": ["Max Verstappen", "Verstappen","Red Bull", "33","23", "105","https://www.formula1.com/content/fom-website/en/drivers/max-verstappen/_jcr_content/image.img.320.medium.jpg", "http://www.varldensflaggor.se/bilder/flaggor/nederlandernas-flagga.png", "https://i.pinimg.com/originals/88/9e/4e/889e4e0106ffe4105c297778dd6ff29d.png"],
        "Hamilton": ["Lewis Hamilton", "Hamilton", "Mercedes", "44", "36", "101", "https://www.formula1.com/content/fom-website/en/drivers/lewis-hamilton/_jcr_content/image.img.320.medium.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/250px-Flag_of_the_United_Kingdom.svg.png", "https://listcarbrands.com/wp-content/uploads/2016/02/Mercedes-Benz-min.jpg"],
        "Norris": ["Lando Norris", "Norris", "Mclaren", "4", "21", "56", "https://www.formula1.com/content/fom-website/en/drivers/lando-norris/_jcr_content/image.img.1920.medium.jpg/1616675716914.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/250px-Flag_of_the_United_Kingdom.svg.png", "https://formularapida.net/wp-content/uploads/2019/01/DxG7bOQXgAEul7l.jpg"],
        "Bottas": ["Valtteri Bottas", "Bottas", "Mercedes", "77", "31", "47", "https://www.formula1.com/content/fom-website/en/drivers/valtteri-bottas/_jcr_content/image.img.1920.medium.jpg/1616676580165.jpg", "http://www.varldensflaggor.se/bilder/flaggor/finlands-flagga.png", "https://listcarbrands.com/wp-content/uploads/2016/02/Mercedes-Benz-min.jpg"],
        "Perez": ["Sergio Perez", "Perez", "Red Bull", "11", "31", "44", "https://www.formula1.com/content/fom-website/en/drivers/sergio-perez/_jcr_content/image.img.1920.medium.jpg/1616669035981.jpg", "http://www.varldensflaggor.se/bilder/flaggor/mexikos-flagga.png", "https://i.pinimg.com/originals/88/9e/4e/889e4e0106ffe4105c297778dd6ff29d.png"],
        "Leclerc": ["Charles Leclerc", "Leclerc", "Ferrari", "16", "23", "40", "https://www.formula1.com/content/fom-website/en/drivers/charles-leclerc/_jcr_content/image.img.1920.medium.jpg/1616675563921.jpg", "https://www.varldensflaggor.se/bilder/original/monacos-flagga.png", "https://live.staticflickr.com/2360/2527287278_3b7b9ecbda_b.jpg"],
        "Sainz": ["Carlos Sainz", "Sainz", "Ferrari", "55", "26", "38", "https://www.formula1.com/content/fom-website/en/drivers/carlos-sainz/_jcr_content/image.img.1920.medium.jpg/1616669041261.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1200px-Bandera_de_Espa%C3%B1a.svg.png", "https://live.staticflickr.com/2360/2527287278_3b7b9ecbda_b.jpg"],
        "Ricciardo": ["Daniel Ricciardo", "Ricciardo", "Mclaren", "3", "31", "24", "https://www.formula1.com/content/fom-website/en/drivers/daniel-ricciardo/_jcr_content/image.img.1920.medium.jpg/1616669038845.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/800px-Flag_of_Australia_%28converted%29.svg.png", "https://formularapida.net/wp-content/uploads/2019/01/DxG7bOQXgAEul7l.jpg"],
        "Gasly": ["Pierre Gasly", "Gasly", "AlphaTauri", "10", "25", "16", "https://www.formula1.com/content/fom-website/en/drivers/pierre-gasly/_jcr_content/image.img.1920.medium.jpg/1616676765251.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png", "https://gtswiki.gt-beginners.net/decal/png/56/00/73/8214570189441730056_1.png"],
        "Ocon": ["Esteban Ocon", "Ocon", "Alpine", "31", "24", "12", "https://www.formula1.com/content/fom-website/en/drivers/esteban-ocon/_jcr_content/image.img.1920.medium.jpg/1616675373015.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png", "https://www.carlogos.org/logo/Alpine-logo-1440x900.png"],
        "Vettel": ["Sebastian Vettel", "Vettel", "Aston Martin", "5", "33", "10", "https://www.formula1.com/content/fom-website/en/drivers/sebastian-vettel/_jcr_content/image.img.1920.medium.jpg/1616669052113.jpg", "https://www.tysklandspecialisterna.se/media/k2/items/cache/56ce69667669db80737dec7a457c2044_XL.jpg", "https://upload.wikimedia.org/wikipedia/en/b/bd/Aston_Martin_Lagonda_brand_logo.png"],
        "Stroll": ["Lance Stroll", "Stroll", "Aston Martin", "18", "22", "9", "https://www.formula1.com/content/fom-website/en/drivers/lance-stroll/_jcr_content/image.img.1920.medium.jpg/1616669046322.jpg", "https://www.varldensflaggor.se/bilder/original/kanadas-flagga.png", "https://upload.wikimedia.org/wikipedia/en/b/bd/Aston_Martin_Lagonda_brand_logo.png"]
        
    };

    let grid2 = document.getElementById("grid2-container")

    var temp= new Map();
    for (let key in driversBox){
        temp.set(key, driversBox[key])        //Från William
    }
    
    var map = new Map([...temp].sort((a, b) => b[1][5] - a[1][5]))

    map.forEach(([key,v]) => {    
        let value = driversBox[v]
        let driverFullName = value[0]
        let driverLastName = value[1]
        let driverTeam = value[2]
        let driverNumber = value[3]
        let driverAge = value[4]
        let driverPoints = value[5]
        let driverImage = value[6]
        let driverNationFlag = value[7]
        let teamLogo = value[8]

        let driverGrid = document.createElement("div")
        driverGrid.id = "driverGrid"

        let fullDriverGrid = document.createElement("div")
        fullDriverGrid.id = "fullDriverGrid"

        let numelement = document.createElement("numelement")
        numelement.id = "nummer"
        numelement.textContent = driverNumber
        driverGrid.appendChild(numelement)

        let nameelement = document.createElement("nameelement")
        nameelement.className = "grid2-item"
        nameelement.textContent = driverLastName
        driverGrid.appendChild(nameelement)

        let teamLogoelement = document.createElement("img")
        teamLogoelement.className = "logoId"
        teamLogoelement.src = teamLogo
        teamLogoelement.alt = "Bild på Lagets Logotyp"
        driverGrid.appendChild(teamLogoelement)

        let pointselement = document.createElement("pointselement")
        pointselement.className = "grid2-item"
        pointselement.id = "points"
        pointselement.textContent = "Points: " + driverPoints
        driverGrid.appendChild(pointselement)

        let fullnameelement = document.createElement("fullnameelement")
        fullnameelement.className = "fullName"
        fullnameelement.style.fontWeight = "bolder"
        fullnameelement.textContent = driverFullName
        fullDriverGrid.appendChild(fullnameelement)

        let ageelement = document.createElement("ageelement")
        ageelement.className = "fullName"
        ageelement.style.fontWeight = "bolder"
        ageelement.textContent = "Age: " + driverAge
        fullDriverGrid.appendChild(ageelement)

        let driverimageandnationelement = document.createElement("div")
        fullDriverGrid.appendChild(driverimageandnationelement)
        driverimageandnationelement.style.display = "flex"

        let driverimageelement = document.createElement("img")
        driverimageelement.id = "driverImg"
        driverimageelement.src = driverImage
        driverimageelement.alt = "Bild på föraren"
        driverimageelement.loading = "lazy"
        driverimageandnationelement.appendChild(driverimageelement)

        let drivernationelement = document.createElement("img")
        drivernationelement.id = "nationImg"
        drivernationelement.src = driverNationFlag
        drivernationelement.alt = "Förarens hemlands flagga"
        driverimageandnationelement.appendChild(drivernationelement)

        let teamelement = document.createElement("teamelement")
        teamelement.className = "fullName"
        teamelement.id = "team"
        teamelement.textContent = driverTeam
        fullDriverGrid.appendChild(teamelement)

        let parent = document.createElement("div")
        parent.id = "parent"
        let divider = document.createElement("div")
        divider.id = "divider"

 
        parent.onmouseover = function(){
            fullDriverGrid.style.display = "grid"; 
            divider.style.backgroundColor = "black"; 
            
    }
        parent.onmouseleave = function(){fullDriverGrid.style.display = "none"; divider.style.backgroundColor = "purple"}

        parent.appendChild(driverGrid)
        parent.appendChild(fullDriverGrid)
        parent.appendChild(divider)
        grid2.appendChild(parent)
        

    })
}





window.addEventListener('DOMContentLoaded', Drivers, false);