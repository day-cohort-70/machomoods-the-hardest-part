/* Make a function to move to main.js */

import { MoodsImage } from "./MoodsImage.js"
import { MoodBlockName } from "./MoodsName.js"
import { MoodQuotes } from "./MoodsQuotes.js"

export const MoodsBlock = (databaseMoodObject) => {
    // create a variable with empty string
    let blockHTML = `<div class="macho__moods--block">`
    // get moods name from MoodsName, put into variable with the empty string
    blockHTML += MoodBlockName(databaseMoodObject.name)
    // get image from MoodsImage, put into variable with the empty string
    blockHTML += MoodsImage(databaseMoodObject.imageUrl)
    // get quotes from MoodsQuotes
    blockHTML += MoodQuotes(databaseMoodObject.quotes)
        // create section for quote advice
        // create second section for quote list
    
    blockHTML += `</div>`

    return blockHTML
}