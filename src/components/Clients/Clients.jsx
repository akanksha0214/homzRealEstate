import React from 'react';
import "./Clients.css"
import Client1 from "../../assets/equinix.png";
import Client2 from "../../assets/realty.png";
import Client3 from "../../assets/tower.png";

const clients = [
    { name: 'Client 1', logo: Client1 },
    { name: 'Client 2', logo: Client2 },
    { name: 'Client 3', logo: Client3 },
]


const Clients = () => {
    return (
        <section className='c-wrapper'>
            <h2 style={{justifyContent: "center"}} className="paddings innerWidth flexCenter">Our Clients</h2>
            <div className="paddings innerWidth flexCenter c-container">
                {clients.map((client, index) => (
                    <img key={index} src={client.logo} alt={`${client.name} Logo`} />
                ))}
            </div>
        </section>
    )
}

export default Clients