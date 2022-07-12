DROP TABLE IF EXISTS anonEpisodeBioData;
CREATE TABLE anonEpisodeBioData(episodeId TEXT,
                                startDate DECIMAL,
                                endDate DECIMAL,
                                duration INT,
                                interval INT,
                                heartRates INT[],
                                soundDbs INT[],
                                avgRestingHr INT,
                                avgWalkingHr INT,
                                steps INT,
                                recentHRV INT,
                                userID TEXT,
                                diagnosis TEXT,
                                age INT
);