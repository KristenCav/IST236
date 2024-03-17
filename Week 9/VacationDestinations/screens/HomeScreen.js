import { View, Text, FlatList } from "react-native";
import { COUNTRY } from "../data/destination_data";
import CountryGridTile from "../components/CountryGridTile";



function HomeScreen(props){

    function renderCountryItem(itemData){

        function pressHandler(){
            props.navigation.navigate("DestinationOverviewScreen", {
                countryID: itemData.item.id,
            })
        }

        return(
            <CountryGridTile 
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
                data={COUNTRY} 
                keyExtractor={(item) => {
                    return item.id
                }}
                renderItem={renderCountryItem}
                numColumns={2}
            />
        </View>
    );
}

export default HomeScreen;