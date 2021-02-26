import React from "react";
import Navigation from "./Navigation";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'



const About = () => {
    return (
        <div>
            <Navigation />
            <div className="flex">
              <div className="flex-1">
                <h1 className="font-bold"> Aboutpage </h1>
                <p >Even voorstellen, mijn naam is Danny Verkerk 
                  en ben Productiemanager bij een groot vleeswarenbedrijf. </p>
                <p>Naast mijn werk heb ik een grote passie voor het sleutelen/customiseren
                  van motoren, en de in en verkoop van jonge Harley Davidson motoren.</p>
                <p>Sinds 2018 ben ik dus DNA Motoren begonnen om meer te doen met mijn hobbie, mijn passie.</p>
                <p>Dus mocht je een jonge occasion zoeken of een motor wilt customizen of 
                  ter reparatie aan wil bieden contact mij dan.</p>
              </div>
              <div id="contact" className="flex-1">
                <h1 className="font-bold">Contact Informatie</h1>
                <ul>
                  <li>Naam bedrijf: DNA Motoren</li>
                  <li>Locatie: Ijsselveld 15</li>
                  <li>Postbus: Postbus 320</li>
                  <li>Plaats: Montfoort</li>
                  <li>Telefoonnummer: 0123-23232312</li>
                </ul>
                <div id="mapid">
                  <MapContainer center={[52.04130380958427, 4.942520425513193]} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[52.04130380958427, 4.942520425513193]}>
                      <Popup>
                        <ul>
                          <li><h1 className="font-bold">DNA Motoren</h1> </li>
                          <li>Locatie: Ijsselveld 15</li>
                          <li>Postbus: Postbus 320</li>
                          <li>Plaats: Montfoort</li>
                          <li>Telefoonnummer: 0123-23232312</li>
                        </ul>
                      </Popup>
                    </Marker>
                  </MapContainer>
                </div>
              </div>
            </div>
          </div>
        );
}

export default About;