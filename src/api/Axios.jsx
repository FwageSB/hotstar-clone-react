import axios from 'axios'

export const API_KEY = "16940bd925324fc87a31349f65e8bb22";

const baseUrl = "https://api.themoviedb.org/3/"
export const tmdbInstance = axios.create({
    baseURL: baseUrl,
  });