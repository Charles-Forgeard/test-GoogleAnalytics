const format_GA_response = (GA_response)=>{

    const {dimensionHeaders,metricHeaders,rows} = {...GA_response}

    const formated_data = rows.map(row=>{
        const formated_row = { dimensions: [], metrics: [] }
        dimensionHeaders.forEach((dimensionHeader,i)=>{
            formated_row.dimensions.push({ [dimensionHeader.name]: row.dimensionValues[i].value })
        })
        metricHeaders.forEach((metricHeaders,i)=>{
            formated_row.metrics.push({ [metricHeaders.name]: row.metricValues[i].value })
        })
        return formated_row
    })

    return formated_data
}

export default format_GA_response;