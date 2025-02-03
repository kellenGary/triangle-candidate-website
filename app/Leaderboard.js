"use client";

import LeaderboardUser from "./LeaderboardUser.js";
import { useEffect, useState } from "react";

const Leaderboard = () => {
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    function filterUserData(data) {
        const myMap = new Map();

        if (Array.isArray(data)) {
            for (let i = 0; i < data.length; i++) {
                let user = data[i];
                let name = user[1];
                let score = user[0];

                let scores = score.split(" / ").map(num => parseInt(num, 10));

                if (myMap.has(name)) {
                    let prevScore = myMap.get(name).split(" / ").map(num => parseInt(num, 10));

                    let numerator = prevScore[0] + scores[0];
                    let denominator = prevScore[1] + scores[1];

                    myMap.set(name, `${numerator} / ${denominator}`);
                } else {
                    myMap.set(name, score);
                }
            }
        }

        // Convert Map to an array of objects and sort by score (numerator)
        const sortedData = Array.from(myMap.entries())
            .map(([name, score]) => {
                const [num, denom] = score.split(" / ").map(n => parseInt(n, 10));
                return { name, score, ratio: num / denom }; // Store ratio for sorting
            })
            .sort((a, b) => b.ratio - a.ratio); // Sort by highest ratio

        setUserData(sortedData);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/leaderboard/');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                filterUserData(data);
            } catch (error) {
                console.error("Error fetching data:", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div className="text-center">Loading...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500">Error: {error}</div>;
    }

    return (
        <div className="flex flex-col items-center w-fit justify-center">
            <h1 className="text-2xl p-8 font-extralight">Leaderboard</h1>
            <div className="w-screen table-auto border-collapse max-w-lg ">
                <div className="table w-full ">
                    <div className="table-header-group border border-gray-700">
                        <div className="table-row ">
                            <div className="table-cell font-semibold text-center px-4 py-2 border border-[#222222]">Rank</div>
                            <div className="table-cell font-semibold text-center px-4 py-2 border border-[#222222]">Name</div>
                            <div className="table-cell font-semibold text-center px-4 py-2 border border-[#222222]">Score</div>
                        </div>
                    </div>
                    <div className="table-row-group">
                        {userData.length > 0 ? (
                            userData.map((user, index) => (
                                <LeaderboardUser key={index} user={{ rank: index + 1, name: user.name, score: user.score }} />
                            ))
                        ) : (
                            <div className="table-row">
                                <div className="table-cell font-semibold text-left p-2">
                                    No data available
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Leaderboard;
