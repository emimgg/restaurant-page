function showAbout() {
    const hours = [
        "Domingo: 7pm a 23pm",
        "Lunes: Cerrado",
        "Martes: 11am a 23pm",
        "Miércoles: 11am a 23pm",
        "Jueves: 11am a 23pm",
        "Viernes: 11am a 23pm",
        "Sabado: 11am a 23pm",
    ]

    const content = document.querySelector("#content");

    const itinerary = document.createElement("div");
    itinerary.classList.add("itinerary");

    const hourTitle = document.createElement("h3");
    hourTitle.classList.add("subtitle");
    hourTitle.textContent = "Horarios";
    const hourList = document.createElement("ul");
    hours.forEach((day) => {
        let newHour = document.createElement("li");
        newHour.classList.add("subtext");
        newHour.textContent = day;
        hourList.appendChild(newHour);
    });
    itinerary.appendChild(hourTitle);
    itinerary.appendChild(hourList);

    const locations = document.createElement("div");
    locations.classList.add("locations");

    const locationsTitle = document.createElement("h3");
    locationsTitle.classList.add("subtitle");
    locationsTitle.textContent = "Encontranos en"

    const locationsList = document.createElement("ul");
    const mainLocation = document.createElement("li");
    mainLocation.classList.add("subtext");
    mainLocation.textContent = "Barrio Las Mercedes, De las Residentas 1438";
    locationsList.appendChild(mainLocation);

    locations.appendChild(locationsTitle);
    locations.appendChild(locationsList);

    const contact = document.createElement("div");
    const contactTitle = document.createElement("h3");
    contactTitle.classList.add("subtitle");
    contactTitle.textContent = "Realizá tu reserva";
    const contactNumber = document.createElement("span");
    contactNumber.textContent = "+595 981 206015"
    contactNumber.classList.add("subtext");

    contact.appendChild(contactTitle);
    contact.appendChild(contactNumber);

    content.appendChild(itinerary);
    content.appendChild(locations);
    content.appendChild(contact);
}

export {
    showAbout,
}