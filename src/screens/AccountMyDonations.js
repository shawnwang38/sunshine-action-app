import { Text, View, StyleSheet, ScrollView } from "react-native"

function MyDonationsCard() {
    return(
        <View style = {{ shadowColor: 'black', shadowOffset: { width: 2, height: 4 }, shadowRadius: 5, shadowOpacity: 0.3, marginBottom: 20 }}>
        <View style = {{ backgroundColor: 'white', padding: 15, paddingRight: 200 }}>
            <View style = {{ flexDirection: 'row', alignItems: 'center', marginBottom: 6 }}>
                <Text style = {{ fontFamily: 'OpenSans_600SemiBold', color: 'black', fontSize: 16, marginBottom: 6 }}>$XX</Text>
            </View>
            <View style = {{ flexDirection: 'row', alignItems: 'center', marginBottom: 6 }}>
                <Text style = {{ fontFamily: 'OpenSans_400Regular', color: 'gray', fontSize: 14, marginBottom: 10 }}>Donated on 01/01/XX</Text>  
            </View>
        </View>
        </View>
    );
}

export default function MyDonations() {
    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style = {{ flexDirection: 'row', alignItems: 'center', marginBottom: 6 }}>
                <MyDonationsCard />
            </View>
            <View style = {{ flexDirection: 'row', alignItems: 'center', marginBottom: 6 }}>
                <MyDonationsCard />
            </View>
            <View style = {{ flexDirection: 'row', alignItems: 'center', marginBottom: 6 }}>
                <MyDonationsCard />
            </View>
        </ScrollView>

    );
}