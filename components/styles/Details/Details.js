import { Dimensions, StyleSheet } from "react-native";


const width = Dimensions.get("screen")
const height = Dimensions.get("screen")

const primaryColor = "#FFFFFF"

const HomeCss = StyleSheet.create({
    content_cont: {
        // backgroundColor: "white",
        width: width.width * 1,
        padding: 10,
        alignItems: "center",
    },
    image: {
        // width: width.width * 0.2,
        width: 80,
        height: 80,
        // height: height.height * 0.1,
        borderRadius: 50
    },
    content_d: {
        backgroundColor: "khaki",
        padding: 20,
        width: width.width * 0.9,
    },
    content_User: {
        backgroundColor: "#28282B",
        padding: 30,
        width: width.width * 0.9,
    },
    flex_container: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: 15
    },
    headingText: {
        fontSize: 22,
        fontWeight: "700"
    },
    headingSecondText: {
        fontSize: 20,
        fontWeight: "500"
    },
    bioText: {
        fontSize: 18,
        fontWeight: "700"
    },
    status_: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    Likebutton: {
        borderWidth: 2,
        borderColor: "black",
        backgroundColor: "black",
        marginTop: 20,
        width: width.width * 0.8,
        alignItems: "center",
        padding: 10,
        borderRadius: 15
    },
    text: {
        color: "white"
    },
    searchBar: {
        // backgroundColor: "red",
        flexDirection: "row",
        justifyContent: "space-between",
        width: width.width * 0.9,
        padding: 2,
        marginBottom: 10
    },
    searchBarButton: {
        backgroundColor: "black",
        padding: 20,
    },
    listUser: {
        color: primaryColor
    },
    email: {
        fontSize: 18,
        fontWeight: "700",
        color: primaryColor,
    },
    emailData: {
        fontSize: 18,
        fontWeight: "700",
        color: primaryColor
    },
    desc: {
        color: primaryColor,
        marginTop: 10
    }

})

export {
    HomeCss
}