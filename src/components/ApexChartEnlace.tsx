import ReactApexChart from "react-apexcharts"

function ApexChartEnlace({ datagrafico }) {

    const { tipo, series } = datagrafico

    const options = {
        chart: {
            type: 'bar' //tipo grafico 
        },
        series: series,
        xaxis: {
            type: 'datetime',
            labels: { format: 'dd MM' }
            //categoria
        }
    }


    return (
        <div>
            <ReactApexChart
                options={options} // corregido
                series={options.series}
                type={tipo}
                height={350} // corregido
            />
        </div>
    )
}

export default ApexChartEnlace
