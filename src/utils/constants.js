export const LOGO = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const const_photoURL = "https://occ-0-3216-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e";

export const my_photoURL = "https://avatars.githubusercontent.com/u/30930724?u=0d185a7fbf57cb0ed65423102ec387509ba12ea4&v=4";

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: process.env.REACT_APP_TMDB_KEY,  
    }
  };

  export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

  export const BG_IMG_NETFLIX = "https://assets.nflxext.com/ffe/siteui/vlv3/e3e9c31f-aa15-4a8f-8059-04f01e6b8629/web/IN-en-20250113-TRIFECTA-perspective_febfa442-23d9-45f3-937e-72f8b971f7a9_large.jpg";

  export const SUPPORTED_LANGUAGES = [{identifier:"en",name:"English"},{identifier:"mr",name:"मराठी (Marathi)"},{identifier:"de",name:"Deutsch (German)"}];

  export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;