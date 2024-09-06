function calculateConsumption() {
    const hours = document.getElementById('hours').value;
    const days = document.getElementById('days').value;
    const rate = document.getElementById('rate').value;
    const deviceSelect = document.getElementById('device');
    const devicePower = deviceSelect.options[deviceSelect.selectedIndex].dataset.power;
    const flagSelect = document.getElementById('flag');
    const flagMultiplier = flagSelect.options[flagSelect.selectedIndex].dataset.multiplier;
    const residenceSelect = document.getElementById('residence');
    const residenceMultiplier = residenceSelect.options[residenceSelect.selectedIndex].dataset.multiplier;

    if (hours && days && rate) {
        const consumption = (devicePower * hours * days) / 1000; // consumo em kWh
        const baseCost = consumption * rate; // custo base em R$
        const finalCost = baseCost * flagMultiplier * residenceMultiplier; // custo final em R$

        const room = document.getElementById('room').options[document.getElementById('room').selectedIndex].text;
        const device = deviceSelect.options[deviceSelect.selectedIndex].text;
        const flag = flagSelect.options[flagSelect.selectedIndex].text;
        const residence = residenceSelect.options[residenceSelect.selectedIndex].text;

        document.getElementById('result').innerText = 
            `Cômodo: ${room}\nAparelho: ${device}\nTipo de Residência: ${residence}\nBandeira Tarifária: ${flag}\n` +
            `Consumo mensal: ${consumption.toFixed(2)} kWh\n` +
            `Custo base: R$ ${baseCost.toFixed(2)}\nCusto final: R$ ${finalCost.toFixed(2)}`;
    } else {
        document.getElementById('result').innerText = 'Por favor, preencha todos os campos.';
    }
}
