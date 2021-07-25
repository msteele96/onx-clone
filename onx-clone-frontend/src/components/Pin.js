export default function Pin(props) {
    return <tr>
        Type: {props.type} Name: {props.name} Latitude: {props.latitude} Longitude: {props.longitude} Notes: {props.notes}
    </tr>
}