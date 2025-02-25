"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function ShowcasePage() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts?_limit=5")
            .then((response) => {
                setProjects(response.data);
                setLoading(false);
            })
            .catch((error) => {
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
                    {projects.map((project) => (
                        <li key={project.id} className="border p-4 mb-2 rounded-lg bg-white shadow">
                            <h2 className="text-lg font-semibold">{project.title}</h2>
                            <p>{project.body}</p>
                        </li>
                    ))}
                </ul>

            </div>
        </main>
    );
}
