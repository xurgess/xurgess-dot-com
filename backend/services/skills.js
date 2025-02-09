import { BigQuery } from '@google-cloud/bigquery';

const bigquery = new BigQuery({ keyFilename: 'red-airline-449200-a5-2177d9cb3bb5.json' });

export const getSkills = async (req, res) => {
    try {
        const sqlQuery = `SELECT * FROM XurgessDotCom.skills`;

        const options = {
            query: sqlQuery,
            params: { },
            location: 'US'
        };

        const [job] = await bigquery.createQueryJob(options);
        const [rows] = await job.getQueryResults();

        res.send(rows[0]);
    } catch (error) {
        console.error(`ERROR: ${error.message}`);
        res.status(500).send('Failed to query BigQuery');
    }
};