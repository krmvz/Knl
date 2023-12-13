import { StyleSheet, Text, View } from "react-native"
import { WebView } from 'react-native-webview';


const MobileApp = () => {
    return(
        <View>
            <Text>Chapter One♠   </Text>
            <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                }}/>

            <Text>Chapter Two♠</Text>
            <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                }}/>
            <Text>Chapter Three♠</Text>
            <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                }}/>
        </View>
    )
}

export default MobileApp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})