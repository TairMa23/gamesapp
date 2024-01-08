import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client';
import { AxiosRequestConfig, CanceledError } from 'axios';
export interface Platform {
    id: number;
    slug: string;
    name: string;
  }
export interface Game {
    id: number;
    name: string;
    background_image:string;
    platforms:{platform:Platform}[];
    metacritic:number;
}

interface FetchResponse<T> {
    count: number;
    results: T[];
}

const useData = <T>(endpoint:string,requestConfig?:AxiosRequestConfig,deps?:any[]) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {

const controller =new AbortController(); 

        apiClient
            .get<FetchResponse<T>>(endpoint,{
                signal: controller.signal,...requestConfig
            })
            .then(res => setData(res.data.results))
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message)
            });
            return ()=>controller.abort();
    },deps?[...deps]:[]);
 return {data,error}
}

export default useData;