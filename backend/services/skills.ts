import { BigQuery } from '@google-cloud/bigquery';

const bigquery = new BigQuery({ keyFilename: '' });

export const getSkills = async (req, res) => {
    try {
        console.log(req)

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