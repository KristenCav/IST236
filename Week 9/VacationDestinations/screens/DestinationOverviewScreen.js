import { useLayoutEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { DESTINATIONS, COUNTRY } from "../data/destination_data";
import DestinationItem from "../components/DestinationItem";
import Colors from "../constants/colors";



function DestinationOverviewScreen(props){

    const countryId = props.route.params.countryID;

    //Dynamically display state names in screen title
    useLayoutEffect(() => {
        const country = COUNTRY.find((country) => country.id === countryId);
        props.navigation.setOptions({ title: country ? country.name : null });
    }, [countryId, props.navigation]);

    const displayedDestinations = DESTINATIONS.filter((destinationItem) => {
        return destinationItem.countryId === countryId;
    });

    function renderDestinationItem(itemData){
        const destinationItemProps = {
            name: itemData.item.name,
            imageUrl: itemData.item.imageUrl,
            price: itemData.item.price,
            foundedYear: itemData.item.foundedYear,
            rating: itemData.item.rating,
            listIndex: itemData.index,
            description: itemData.item.description,
        }
        return <DestinationItem {...destinationItemProps} />
    }

    return(
        <View style={styles.container}>
            <FlatList 
                data={displayedDestinations}
                keyExtractor={(item) => item.id}
                renderItem={renderDestinationItem}
            />
        </View>
    );
}

export default DestinationOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
})