"use client";

import LeaderboardUser from "./LeaderboardUser.js";
import { useEffect, useState } from "react";
import { BsArrowRepeat } from "react-icons/bs";

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

                name = name.toLowerCase();

                // Extract only the numerator (first part of "numerator / denominator")
                let numerator = parseInt(score.split(" / ")[0], 10);

                if (myMap.has(name)) {
                    let prevNumerator = myMap.get(name);
                    myMap.set(name, prevNumerator + numerator);
                } else {
                    myMap.set(name, numerator);
                }
            }
        }

        // Convert Map to an array of objects and sort by score (numerator)
        const sortedData = Array.from(myMap.entries())
            .map(([name, score]) => ({ name, score })) // Store only the numerator
            .sort((a, b) => b.score - a.score); // Sort by highest score

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
        return <BsArrowRepeat className={'animate-spin'}/>;
    }

    if (error) {
        return <div className="text-center text-red-500">Error: {error}</div>;
    }

    return (
        <div className="flex flex-col items-center w-full justify-center bg-[#262626] p-4 px-4">
            <h1 className="text-2xl p-4 font-extralight text-center">Current Leaderboard</h1>
            <div className="w-full max-w-lg overflow-x-auto rounded-xl border border-[#444444] drop-shadow-xl ">
                <div className="table w-full ">
                    <div className="table-header-group">
                        <div className="table-row bg-[#444444]">
                            <div className="table-cell font-semibold text-center text-sm md:text-lg lg:text-xl px-4 py-2">Rank</div>
                            <div className="table-cell font-semibold text-left text-sm md:text-lg lg:text-xl px-4 py-2">Name</div>
                            <div className="table-cell font-semibold text-center text-sm md:text-lg lg:text-xl text-smpx-4 py-2">Score</div>
                        </div>
                    </div>
                    <div className="table-row-group">
                        {userData.length > 0 ? (
                            userData.map((user, index) => (
                                <LeaderboardUser key={index} user={{
                                    rank: index + 1,
                                    name: user.name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
                                    score: user.score,

                                }} pfp={`./Pledges SP25/${user.name}.JPG`} />
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
            <div className={"m-12"} >
                <a target={"_blank"}
                   href={"https://docs.google.com/forms/d/e/1FAIpQLSdycHGGl_wmdq-wueqfU2SdzJ0lJY7Nju3FRsfDW6QZsNET6g/viewform?usp=header"}>
                    <span className={'rounded-xl p-4 bg-[#373737] hover:bg-blue-500 drop-shadow-xl'}>Pledge Point Submission Form</span>
                </a>
            </div>
        </div>
    );
};

export default Leaderboard;
