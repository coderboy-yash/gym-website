export const exerciseOptions = {
  method: "GET",

  headers: {
    'X-RapidAPI-Key': '064909a84bmsh22cc70b40768faep1048c7jsn348039ac84b9',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};
export  const youtubeOptions = {
  method: 'GET',
  
  headers: {
    'X-RapidAPI-Key': '064909a84bmsh22cc70b40768faep1048c7jsn348039ac84b9',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};
export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
