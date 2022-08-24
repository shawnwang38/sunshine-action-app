import { Text, View, Stylesheet, ScrollView } from "react-native";
import Card from "../Card";

export default function MyEvents() {
    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style = {{ paddingRight: 170 }}>
                <View style = {{ flexDirection: 'row', alignItems: 'center', marginBottom: 6 }}>
                    <Text style = {{ fontFamily: 'OpenSans_400Regular', color: 'grey', fontSize: 15, paddingLeft: 10 }}>Upcoming Events</Text>
                </View>
                <Card img={require('./../../assets/banner.jpeg')} title="Event Name" desc="Event Description" height={0} time="Mon, Jan 1, 00:00 - 24:00" paddingRight={50} />
                <View style = {{ flexDirection: 'row', alignItems: 'center', marginBottom: 6 }}>
                    <Text style = {{ fontFamily: 'OpenSans_400Regular', color: 'grey', fontSize: 15, paddingLeft: 10 }}>Previous Events</Text>
                </View>
                <Card img={require('./../../assets/banner.jpeg')} title="Event Name" desc="Event Description" height={0} time="Mon, Jan 1, 00:00 - 24:00" paddingRight={50} />
                <Card img={require('./../../assets/banner.jpeg')} title="Event Name" desc="Event Description" height={0} time="Mon, Jan 1, 00:00 - 24:00" paddingRight={50}/>
            </View>
        </ScrollView>
    );
}