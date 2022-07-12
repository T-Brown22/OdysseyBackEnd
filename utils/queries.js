/**
 * Adds a new batch of episode data into the database
 */
const INSERT_EPISODE_DATA = `INSERT INTO anonEpisodeBioData(episodeId, startDate, endDate, duration, interval, heartRates, soundDbs, avgRestingHr, avgWalkingHr, steps, recentHRV, userID, diagnosis, age  ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)`;


module.exports = {INSERT_EPISODE_DATA}