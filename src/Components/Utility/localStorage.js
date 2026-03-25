  

// Get ideas

// const getIdeas = () => {
//     const storedIdeas = localStorage.getItem('wantedIdeas');

//     if (storedIdeas) {
//         const storedIdeasStr = JSON.parse(storedIdeas);
//         return storedIdeasStr;
//     }
//     return [];
// }







// Add idea
// const setIdeas = (id) => {
    
//         const existingIds = getIdeas();
    
//         // check duplicate
//         if (existingIds.includes(id)) {
//                 alert('You already added the idea');
//                 return;
//             }
        
//             const updatedIdeas = [...existingIds, id];
        
//             localStorage.setItem("wantedIdeas", JSON.stringify(updatedIdeas));
//         };
        
        
        
        
        // get Ideas
        
        const getIdeas = (key) => {
            const storedIdeas = localStorage.getItem(key);
        
            if (storedIdeas) {
                const storedIdeasStr = JSON.parse(storedIdeas);
                return storedIdeasStr;
            }
            return [];
}
        


// save items

const saveIdeas = (key, ideas) => {
    localStorage.setItem(key, JSON.stringify(ideas));
}



// for wanted ideas 
export const getWantedIdeasId =()=> getIdeas('wantedIdeas');

export const isWantedIdeas = (id) => getWantedIdeasId().includes(id);

export const addWantedIdeas = (id) => {
    const ideas = getWantedIdeasId();

    if (!isWantedIdeas(id)) {
        ideas.push(id);
        saveIdeas('wantedIdeas', ideas);
        return
    }
}


// For unWanted Ideas
export const getUnwantedIdeasId =()=> getIdeas('unwantedIdeas');

export const isUnwantedIdeas = (id) => getUnwantedIdeasId().includes(id);

export const addUnwantedIdeas = (id) => {
    const ideas = getUnwantedIdeasId();

    if (!isUnwantedIdeas(id)) {
      ideas.push(id);
      saveIdeas("unwantedIdeas", ideas);
    }
}