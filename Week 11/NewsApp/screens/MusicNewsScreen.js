import List from "../components/List/List";
import { NEWS } from "../data/dummy_data";

//Get type from data from News and filter only music type.
//Return list of items
function  MusicNewsScreen() {
  const type = "Music";
  const displayedListings = NEWS.filter((newsItem) => {
    return newsItem.type === type;
  });

  return <List items={displayedListings} />;
}

export default MusicNewsScreen;
