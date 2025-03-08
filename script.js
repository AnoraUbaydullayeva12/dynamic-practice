document.addEventListener("DOMContentLoaded", async () => {
    const ipElement = document.getElementById("ip");
    const cityElement = document.getElementById("city");
    const countryElement = document.getElementById("country");
    const ispElement = document.getElementById("isp");
    const mapElement = document.getElementById("map");

    try {
        // Fetch IP details from ip-api.com
        const response = await fetch("http://ip-api.com/json/");
        const data = await response.json();

        // Update HTML with IP details
        ipElement.textContent = ` ${data.query}`;
        cityElement.textContent = ` ${data.city}`;
        countryElement.textContent = ` ${data.country}`;
        ispElement.textContent = ` ${data.isp}`;

        // Embed Google Maps using lat & lon
        mapElement.src = `https://www.google.com/maps?q=${data.lat},${data.lon}&output=embed`;
    } catch (error) {
        console.error("Error fetching IP data:", error);
    }
});
