import ReactApexChart from "react-apexcharts"

function ApexChartEnlace({ datagrafico }) {

    const { tipo, series } = datagrafico

    const options = {
        chart: {
            type: 'bar'  
        },
        series: series,
        xaxis: {
            type: 'datetime',
            labels: { format: 'dd MMM' }
        }
    }


    return (
        <div>
            <ReactApexChart
                options={options} 
                series={options.series}
                type={tipo}
                height={350} 
            />
        </div>
    )
}

export default ApexChartEnlace
