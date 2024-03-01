import { MoodsBlock } from "./MoodsBlock.js"
import { database } from "./database.js"

// import MoodsBlock function

let moodBlockHTML = ``

for (const mood of database) {
    moodBlockHTML += MoodsBlock(mood)
}

const container = document.querySelector('.macho__moods')

container.innerHTML = moodBlockHTML