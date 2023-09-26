import {BetaAnalyticsDataClient} from '@google-analytics/data';
import 'dotenv/config';

const propertyId = process.env['GA_PROPERTY_ID'];

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
        {
          name: 'country',
        }
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