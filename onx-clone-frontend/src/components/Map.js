import { Component } from "react";

export default class Map extends Component {
    constructor(props) {
        super()
        // this.state = {}
    }

    render() {
        return (
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207559.4085183397!2d-83.8837966788842!3d35.624872678687574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8859521e1372343d%3A0xa04eac8607697ce3!2sGreat%20Smoky%20Mountains!5e0!3m2!1sen!2sus!4v1625526467509!5m2!1sen!2sus" width="800" height="600" title="map" allowfullscreen="" loading="lazy"></iframe>
        )
    }
}
// mapStateToProps to get pins in to display on map somehow