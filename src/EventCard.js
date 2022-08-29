import React from "react";
import Card from "./Card";
import { ref, getDownloadURL } from "firebase/storage";
import { TouchableOpacity } from "react-native";

export default function EventCard(props) {
    const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const start = new Date(props.event.start), end = new Date(props.event.end);
    let startDate = DAYS[start.getDay()], endDate = "";
    startDate += ", " + MONTHS[start.getMonth()] + " " + start.getDate() + ", ";
    if (start.getDate() != end.getDate() || start.getMonth() != end.getMonth() || start.getFullYear() != end.getFullYear()) {
        endDate += DAYS[end.getDay()];
        endDate += ", " + MONTHS[end.getMonth()] + " " + end.getMonth() + ", ";
    }
    startDate += start.getHours() < 10 ? "0" + start.getHours() : start.getHours();
    endDate += end.getHours() < 10 ? "0" + end.getHours() : end.getHours();
    startDate += ":" + (start.getMinutes() < 10 ? "0" + start.getMinutes() : start.getMinutes());
    endDate += ":" + (end.getMinutes() < 10 ? "0" + end.getMinutes() : end.getMinutes());
    const [img, setImg] = React.useState(null);
    if (props.event.image && !img) {
        getDownloadURL(ref(props.storage, "events/" + props.event.id + "." + props.event.image)).then(url => {
            setImg({ uri: url });
        });
    }
    return (
        <TouchableOpacity 
        activeOpacity={0.5} onPress = {() => props.navigation.navigate("Event Details", { event: props.event, img: img, user: props.user })}>
            <Card height = {props.height} title = {props.event.name} img = {img} time = {startDate + " - " + endDate} style = {props.style} />
        </TouchableOpacity>
    )
}