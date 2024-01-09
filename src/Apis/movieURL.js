import axios from 'axios';


export default axios.create({
    baseURL: "https://api.themoviedb.org/3",
})

// 1. Theatre
// /discover/movie?primary_release_date.gte=2023-01-31&primary_release_date.lte=2023-12-31

// 2.Popular Movie
// /discover/movie?sort_by= popularity.desc

// 3.highest rated movie R
// /discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc

// 4.Kids
// /discover/movie/?certification_country=US&certification.lte=G&sort_by=popularity.desc

// 5.Drama
// /discover/movie/?with_genres=18&primary_release_year=2023

// Comedie
// /discover/movie/?with_genres=35&with_cast=23659&sort_by-revenue.desc





