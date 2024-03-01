export const MoodQuotes = (quotesProperty) => {
    
    let quotesHTML = `
    <div class="macho__moods--quote">
        <div class="macho__moods--quote--advice"><strong>Macho Advice: </strong></div><div class="macho__moods--quote--container">
        `

    for (const quote of quotesProperty) {
        quotesHTML += `<div class="macho__moods--quote--list">${quote}</div>`
    }

    quotesHTML += `
    </div>
    </div>
    `

    return quotesHTML
}

/* 
    <div class="macho__moods--quote">
        <div class="macho__moods--quote--advice"></div>
        <div class="macho__moods--quote--list"></div>
    </div>  
*/

