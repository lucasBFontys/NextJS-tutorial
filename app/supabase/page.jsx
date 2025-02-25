"use client";

import { useEffect, useState } from "react";
import supabase from "@/lib/supabase";

export default function ShowcasePage() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const { data, error } = await supabase
                .from("carnavals_steden")
                .select("*");

            if (error) {
                console.error("Fout bij ophalen van data:", error.message);
                setError("Fout bij ophalen van data");
            } else {
                setData(data);
            }
            setLoading(false);
        }

        fetchData();
    }, []);

    if (loading) {
        return (
            <main className="flex items-center space-x-2">
                <div className="animate-spin h-5 w-5 border-4 border-blue-500 border-t-transparent rounded-full"></div>
                <p className="text-blue-500">Data wordt geladen...</p>
            </main>
        );
    }

    if (error) {
        return <p className="text-red-500">{error}</p>;
    }

    return (

        <main className="p-6" >
            <h1 className="text-2xl font-bold mb-4">Carnavalssteden</h1>

            <ul>
                {data.map((carnavals_steden) => (
                    <li key={carnavals_steden.id} className="border p-4 mb-2 rounded-lg bg-white shadow">
                        <h2 className="text-lg font-semibold">{carnavals_steden.name} ({carnavals_steden.carnavalsnaam})</h2>
                        <p>{carnavals_steden.description}</p>
                    </li>
                ))}
            </ul>
        </main>
    );
}
