export default function Pin(props) {
    return <div key={props.id}>
        <strong>Type: </strong>{props.type} <strong>Name: </strong>{props.name} <strong>Latitude: </strong>{props.latitude} <strong>Longitude: </strong>{props.longitude} <strong>Notes: </strong>{props.notes}
    </div>
}