import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';
import useData from './useData';
import { Genre } from './useGenres';
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

const useGames = (selectedGenre:Genre|null,selctedPlatform:Platform|null) => 
useData<Game>('/games',{
  params:{
    genres:selectedGenre?.id,
    platforms:selctedPlatform?.id}},
[selectedGenre?.id,selctedPlatform?.id])

export default useGames;