const cors = (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "https://khana-khazana-dun.vercel.app");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Credentials", "true");
  
    // Handle preflight requests
    if (req.method === "OPTIONS") {
      return res.status(200).end();
    }
  
    next();
  };
  
  export default cors;
  