import { Text, View, Stylesheet, ScrollView } from "react-native";
import Card from "../Card";
import ContactCard from '../ContactCard';

export default function Nearby() {
    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style = {{ paddingRight: 170 }}>
                
                <ContactCard title="Contact Name" location="City, State/Province, Country" />
                <ContactCard title="Contact Name" location="City, State/Province, Country" />
                <ContactCard title="Contact Name" location="City, State/Province, Country" />
                
            </View>
        </ScrollView>
    );
}