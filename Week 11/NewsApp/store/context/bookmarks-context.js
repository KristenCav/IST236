import { createContext, useState } from "react";

export const BookmarksContext = createContext({
    //IDs goes to an empty list
    //2 functions to hold the basic default value
    ids: [], 
    addFavorite: (id) => {},
    removeFavorite: (id) => {},
})

//Context provider helps handle the context - creates the state var and function calls
//Children is what we are wrapping in the provider
function BookmarksContextProvider({children}) {
    const [bookmarkIds, setBookmarkIds] = useState([])

    function addFavoriteBookmark(id){ 
        setBookmarkIds((currentBookmarkIds) => {
            return [...currentBookmarkIds, id];
        });
    }

    function removeFavoriteBookmark(id) {
        setBookmarkIds((currentBookmarkIds) => {
            return currentBookmarkIds.filter((bookId) => bookId != id);
        });
    }
    //Ties 
    const value = {
        ids: bookmarkIds,
        addFavorite: addFavoriteBookmark,
        removeFavorite: removeFavoriteBookmark
    };

    return <BookmarksContext.Provider value={value}>{children}</BookmarksContext.Provider>
}

export default BookmarksContextProvider;