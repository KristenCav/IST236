import { View, Text, FlatList } from "react-native";
import { STATES } from "../data/dummy-data";
import StateGridTile from "../components/StateGridTile";



function HomeScreen(props){

    function renderStateItem(itemData){

        function pressHandler(){
            props.navigation.navigate("CampgroundOverviewScreen", {
                stateID: itemData.item.id,
            })
        }

        return(
            <StateGridTile 
                name={itemData.item.name}
                color={itemData.item.color}
                onPress={pressHandler}
            />
        );
    }

    //Build grid view
    //Return a flatlist with data
    return(
        <View>
            <FlatList 
                data={STATES} 
                keyExtractor={(item) => {
                    return item.id
                }}
                renderItem={renderStateItem}
                numColumns={2}
            />
        </View>
    );
}

export default HomeScreen;