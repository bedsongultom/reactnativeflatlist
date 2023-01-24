import React, { Component, Fragment } from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList, TextInput, ActivityIndicator, Image,  TouchableOpacity } from 'react-native';
import Products from '../data/Products';

export default class Search extends Component {
    constructor(){
        super();
        this.state = {
            products: Products,
            keywords:'',
        }
        this.onChangeKeywords = this.onChangeKeywords.bind(this);
    }

    componentDidMount=()=>{
        console.log('search is Mounting');
    }

    onChangeKeywords = (text)=>{
        this.setState({ keywords: text});
    }

    render() {
        const { products, keywords }= this.state;
        return(
            <Fragment>
            <View style={styles.topView}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter Keywords ..."
                    onChangeText={(text)=>this.onChangeKeywords(text)}
                    value={keywords}
                    />
            </View>
            <ScrollView >
                <View style={styles.container}>
                
                    <FlatList
                        data = { products }
                        style={{flex:1}}
                        renderItem={({ item }) =>{
                        return (
                        <View style={styles.listView}>
                            <Image source={item.image}  style={styles.Image} />
                            <View style={{alignItems:"center", flex:1}}>
                                <Text style={styles.title}> {item.id}</Text>
                                <Text style={styles.itemName}> {item.item_name}</Text>                        
                                <Text> {item.price}</Text>   
                            </View>
                            <TouchableOpacity>
                              <View style={styles.trash}><Image source={require('../assets/images/trash.png')}/></View>
                            </TouchableOpacity>  
                        </View>   	
                        )				
                    }}
                    
                    keyExtractor={ item => item.id}
                    />

                </View>
                </ScrollView>
            </Fragment>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 25,
        paddingTop: 0,
        backgroundColor: '#fff',
        
    }, 
    title: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'black',
        fontWeight: 'bold',
        fontFamily: 'BaiJamjuree-Regular',
        alignSelf: 'center',
        //textAlign: 'center'

      },
      itemName: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'black',
        fontWeight: 'bold',
        fontFamily: 'BaiJamjuree-Regular',
        justifyContent:'center',
        alignSelf: 'center',
        paddingStart:10,
        paddingEnd:10,
        //textAlign: 'center'

      },
    listView:{
        margin:5,
        padding:10,
        backgroundColor:"#FFF",
        width:"100%",
        flex:1,
        alignSelf:"center",
        flexDirection:"row",
        borderRadius:5,
        borderWidth:2,
        borderColor: '#DDD',
    },
    Image: {
        width: 50,
        height: 50,
        borderRadius: 2,
    },

    trash: {
        paddingTop: 15,
        alignSelf: 'center'
    },

    textInput:{
        padding: 10,
        borderColor: '#DDD',
        borderWidth:2,
        borderRadius:10,
        height: 50,
    },
    topView: {
        flex: 0,
        justifyContent: 'center',
        padding: 25,
        paddingBottom:4,
        paddingTop:16,
        backgroundColor: '#fff',
        borderTopColor:'#DDD',
        borderBottomColor: '#fff',
        borderWidth:2,
    }, 
});