/**
 * Split ransomeNote string and loop through the element to check is the character exists in magazine string or not
 * If exists replace it will empty string else break the loop and return reponse as false
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 export function canConstruct(ransomNote, magazine) {
    let newRansomNote = ransomNote.split("");
    let canConstructRansomNote = null;
    let newMagazine = magazine
    for (let i =0; i < newRansomNote.length ; i++) {
        if (newMagazine.includes(newRansomNote[i])) {
            newMagazine = newMagazine.replace(newRansomNote[i],"")
            canConstructRansomNote= true
        } else {
            canConstructRansomNote = false
            break;
        }
    }
    return canConstructRansomNote;
}