import ReactApexChart from "react-apexcharts"

function ApexChartEnlace() {

    const options = {
        chart: {
            type: 'bar' //tipo grafico 
        },
        series: [{
            name: 'sales',//nombre de la serie 
            data: [30, 40, 35, 50, 49, 60, 70, 91, 125] //data a graficar
        }],
        xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999] //categoria
        }
    }


    return (
        <div>
            <ReactApexChart
               options={options} // corregido
                series={options.series}
                type='bar'
                height={350} // corregido
            />
        </div>
    )
}

export default ApexChartEnlace
