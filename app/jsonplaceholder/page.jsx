"use client";

import { useEffect, useState } from "react";

export default function ShowcasePage() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        async function fetchData() {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                const data = await response.json();
                setData(data);
                setLoading(false);
            } catch (error) {
                setError("Fout bij ophalen van data");
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    if (loading) {
        return (
            <main>
                <div className="flex items-center space-x-2">
                    <div className="animate-spin h-5 w-5 border-4 border-blue-500 border-t-transparent rounded-full"></div>
                    <p className="text-blue-500">Data wordt geladen...</p>
                </div>
            </main>
        )
    }

    if (error) {
        return (
            <p className="text-red-500">{error}</p>
        )
    }

    return (
        <main>
            <div className="p-6">

                <h1 className="text-2xl font-bold mb-4">Data</h1>

                <ul>
                    {data.map((user) => (
                        <li key={user.id} className="border p-4 mb-2 rounded-lg bg-white shadow">
                            <h2 className="text-lg font-semibold">{user.name}</h2>
                            <p>{user.company.name}</p>
                        </li>
                    ))}
                </ul>

            </div>
        </main>
    );
}
