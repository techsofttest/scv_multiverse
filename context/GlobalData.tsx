"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect
} from "react";

const GlobalDataContext = createContext<any>(null);

export function GlobalDataProvider({ children }: { children: React.ReactNode }) {
    const [data, setData] = useState({ services: [], contacts: {}, pageData: null, loading: true });
    

    useEffect(() => {
        const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

        Promise.all([
            fetch(`${baseUrl}/api/layout`).then(res => res.json()),
            fetch(`${baseUrl}/api/pages`).then(res => res.json())
        ])
            .then(([layoutRes, pagesRes]) => {
                setData({
                    services: layoutRes.services || [],
                    contacts: layoutRes.contacts || null,
                    pageData: pagesRes || null,
                    loading: false
                });
            })
            .catch(() => setData(prev => ({ ...prev, loading: false })));
    }, []);
    return (
        <GlobalDataContext.Provider value={data}>
            {children}
        </GlobalDataContext.Provider>
    );
}

export const useGlobalData = () => useContext(GlobalDataContext);