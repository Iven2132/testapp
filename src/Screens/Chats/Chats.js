//import liraries
import React, { Component, useCallback, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import HeaderComponent from '../../Components/HeaderComponent';
import HorizontalLine from '../../Components/HorizontalLine';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constatns/imagePath';
import strings from '../../constatns/lang';
import navigationStrings from '../../constatns/navigationStrings';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import { moderateScale, moderateScaleVertical, textScale } from '../../styles/responsiveSize';
import styles from './styles';
import SearchBar from "react-native-dynamic-search-bar";

// create a component
const Chats = ({navigation}) => {

    const [data, setData] = useState([])

    const leftCustomView = () => {
        return <TouchableOpacity>
            {data.length > 0 ? <Text>Edit</Text> : <View style={{height: 20}} />}
            <SearchBar
                fontColor="#c6c6c6"
                iconColor="#c6c6c6"
                shadowColor="#282828"
                cancelIconColor="#c6c6c6"
                backgroundColor="#ffff"
                placeholder="Search here"
                onChangeText={(text) => console.log(text)}
                onSearchPress={() => console.log("Search Icon is pressed")}
                onClearPress={() => this.filterList("")}
                onPress={() => alert("onPress")}
            />
        </TouchableOpacity>
    }

    const onPressRight = () => {
       navigation.navigate(navigationStrings.USERS)
    }

    const renderItem = useCallback(({ item, index }) => {
        return (
            <View>
                <Text>Flat item</Text>

            </View>
        )
    }, [data])

    const listEmptyComponent = useCallback(() => {
        return (
            <View style={styles.listEmptyStyle}>
                <View style={{}}>
                    <Text style={styles.commStyle}>
                       
                    </Text>
                </View>
                
            </View>
        )
    }, [data])

    return (
        <WrapperContainer
            containerStyle={{ paddingHorizontal: 0 }}
        >
            <HeaderComponent
                rightPressActive={false}
                centerText={``}
                containerStyle={{ paddingHorizontal: 8 }}
                leftCustomView={leftCustomView}
                isLeftView={true}
                rightImg={imagePath.icEdit}
                onPressRight={onPressRight}
            />

            <FlatList
                data={data}
                renderItem={renderItem}
                ListEmptyComponent={listEmptyComponent}
                contentContainerStyle={{ flexGrow: 1 }}

            />


        </WrapperContainer>
    );
};

export default Chats;