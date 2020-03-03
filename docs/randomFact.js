function addRandomFact(){
    const loader = document.querySelector(".loader");
    loader.innerText = produceRandomFact();
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.ceil(max));
}

function produceRandomFact(){
    let mapKey = getRandomInt(10);
    return factMap.get(mapKey);
}

let factMap = new Map();
factMap.set(0, " About a million duplicates of Earth could comfortably fit inside of it, according to NASA’s C. Alex Young, PhD.");
factMap.set(1, " Our Sun is one of over 100 billion stars in the Milky Way galaxy, and the Milky Way is one of over 100 million galaxies in the universe.");
factMap.set(2, " The black hole in the center of the Milky Way galaxy is millions of times the mass of the Sun.");
factMap.set(3, " The planet with the hottest surface temperature is not Mercury, but Venus, because of the Greenhouse Effect of its atmosphere.");
factMap.set(4, " Earth is the only known planet with plate tectonics.");
factMap.set(5, " The Sun’s core releases energy equivalent to 100 billion nuclear bombs per second, and that energy travels thousands of years through its layers before it is emitted as heat and light to power the solar system.");
factMap.set(6, " Only one two-billionths of the Sun’s energy hits the Earth.");
factMap.set(7, " A car ride to the nearest star at 70 miles per hour would last over 356 billion years.");
factMap.set(8, " Ninety-five percent of the matter in the universe is either dark matter or dark energy that can’t be detected.");
factMap.set(9, " Neutron stars, which are leftover from the deaths of massive stars in supernova explosions, are so dense that just a bowlful of neutron star material has more mass than the Moon.");
factMap.set(10, " The other galaxies in the universe are moving away from us, and some are millions of light-years away.");