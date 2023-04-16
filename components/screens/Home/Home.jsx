import { StyleSheet, Text, TextInput, View, Button, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Image } from 'react-native'

import { HomeCss } from '../../styles/Details/Details'
import { TouchableOpacity } from 'react-native'


const Home = () => {
    const [userName, setUserName] = useState("")
    const [name, setName] = useState()
    const [avatar, setAvatar] = useState()
    const [following, setFollowing] = useState()
    const [followers, setFollowers] = useState()
    const [bio, setBio] = useState()
    const [login, setLogin] = useState()
    const [html, setHtml] = useState()

    // handeling user input
    const [search, setSearch] = useState('')

    const [loading, setLoading] = useState(true)
    // console.log(search);

    const handleInput = (text) => {
        setSearch(text)
    }
    // console.log(search)

    const Onsubmit = () => {
        // console.log(search)
        // fetch(`https://jsonplaceholder.typicode.com/users/${search}`)
        //     .then((resp) => resp.json())
        //     .then((result) => {
        //         console.log(result);
        //     })

        fetch(`https://api.github.com/users/${search}`)
            .then((resp) => resp.json())
            .then((result) => {
                // console.log(result)
                setName(result.name)
                setAvatar(result.avatar_url)
                setFollowing(result.following)
                setFollowers(result.followers)
                setLogin(result.login)
                setBio(result.bio)
                setHtml(result.html_url)
                setLoading(false)
            })
    }

    //     // https://api.github.com/users/satyamdhungana01

    //     // https://jsonplaceholder.typicode.com/users

    // useEffect(() => {
    //     fetch(`https://api.github.com/users/satyamdhungana01`)
    //         .then((resp) => resp.json())
    //         .then((result) => {
    //             console.log(result)
    //             setName(result.name)
    //             setAvatar(result.avatar_url)
    //             setFollowing(result.following)
    //             setFollowers(result.followers)
    //             setLogin(result.login)
    //             setBio(result.bio)
    //             setHtml(result.html_url)
    //         })
    // })
    // console.log(avatar)
    if (loading) {
        return (
            <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
                <View style={HomeCss.searchBar}>
                    <TextInput placeholder='Enter Your Github Name Here:' onChangeText={handleInput}
                        style={{ borderColor: "black", borderWidth: 1, width: 280 }} />
                    <TouchableOpacity style={HomeCss.searchBarButton} onPress={Onsubmit}>
                        <Text style={HomeCss.text}>Search</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    } else {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={HomeCss.searchBar}>
                    <TextInput placeholder='Enter Your Github Name Here:' onChangeText={handleInput}
                        style={{ borderColor: "black", borderWidth: 1, width: 280 }} />
                    <TouchableOpacity style={HomeCss.searchBarButton} onPress={Onsubmit}>
                        <Text style={HomeCss.text}>Search</Text>
                    </TouchableOpacity>
                </View>
                <View style={HomeCss.content_cont}>
                    <View style={HomeCss.flex_container}>
                        <Image
                            source={{ uri: avatar }}
                            style={HomeCss.image} />
                        <Text style={HomeCss.headingText}>Hello, {name}</Text>
                    </View>
                    <View style={HomeCss.content_d}>
                        <Text style={HomeCss.headingSecondText}>{login}</Text>
                        <Text style={HomeCss.bioText}>{bio}</Text>
                        <View style={HomeCss.status_}>
                            <Text>Following : {following}</Text>
                            <Text>Followers : {followers}</Text>
                        </View>
                        <TouchableOpacity style={HomeCss.Likebutton}>
                            <Text style={HomeCss.text}>{html}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* <Button
        title='Go to Details Page'
        onPress={() => navigation.navigate('Details')}
    /> */}
            </View >
        )
    }
}

const style = StyleSheet.create({})

export default Home