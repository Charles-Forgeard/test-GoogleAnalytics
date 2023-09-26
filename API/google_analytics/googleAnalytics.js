import {BetaAnalyticsDataClient} from '@google-analytics/data';

const propertyId = '407848432';

process.env['GOOGLE_APPLICATION_CREDENTIALS']='google_analytics/GA-credentials.json'

const analyticsDataClient = new BetaAnalyticsDataClient();

async function runReport() {
    const [response] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [
        {
          startDate: '2020-03-31',
          endDate: 'today',
        },
      ],
      dimensions: [
        {
          name: 'city',
        },
      ],
      metrics: [
        {
          name: 'activeUsers',
        },
      ],
    });
    return response.rows
  }

export default runReport;