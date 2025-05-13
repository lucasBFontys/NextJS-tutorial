"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function ShowcasePage() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get("/efteling.json")
            .then((response) => {
                setData(response.data);
                setLoading(false);
            })
            .catch(() => {
                setError("Fout bij ophalen van data");
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <main>
                <div className="flex items-center space-x-2">
                    <div className="animate-spin h-5 w-5 border-4 border-blue-500 border-t-transparent rounded-full"></div>
                    <p className="text-blue-500">Data wordt geladen...</p>
                </div>
            </main>
        );
    }

    if (error) {
        return <p className="text-red-500">{error}</p>;
    }

    if (!data) {
        return <p className="text-red-500">Geen data beschikbaar</p>;
    }

    return (
        <main className="p-6">
            <h1 className="text-2xl font-bold mb-4">Efteling Informatie (lokale data)</h1>
            <p><strong>Locatie:</strong> {data.locatie}</p>

            <h2 className="text-xl font-semibold mt-4">Openingstijden</h2>
            <ul className="list-disc ml-5">
                {Object.entries(data.openingstijden).map(([dag, tijd]) => (
                    <li key={dag}><strong>{dag}:</strong> {tijd}</li>
                ))}
            </ul>

            <h2 className="text-xl font-semibold mt-4">Attracties</h2>
            <ul>
                {data.attracties.map((attractie) => (
                    <li key={attractie.id} className="border p-4 mb-2 rounded-lg bg-white shadow">
                        <h3 className="text-lg font-semibold">{attractie.naam}</h3>
                        <p><strong>Type:</strong> {attractie.type}</p>
                        <p><strong>Minimale lengte:</strong> {attractie.minimale_lengte}</p>
                        <p><strong>Wachttijd:</strong> {attractie.wachttijd}</p>
                    </li>
                ))}
            </ul>

            <h2 className="text-xl font-semibold mt-4">Contact</h2>
            <p><strong>Telefoon:</strong> {data.contact.telefoon}</p>
            <p><a href={data.contact.website} className="text-blue-500">Website</a></p>
        </main>
    );
}
