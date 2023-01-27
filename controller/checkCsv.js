import emailChecker from "../emailChecker.js";
import csv from "csv-parser";
import fs from "fs";
  
const checkCsv = async (req, res) => {
  try {
    if (!req.file) {
        return res.status(400).json({ message: "No file provided." });
      }
      // process the csv file
      const results = [];
      fs.createReadStream(req.file.path)
        .pipe(csv())
        .on("data", (data) =>{
            try {
                results.push(data)
            } catch (error) {
            }
        })
        .on("end", async () => {
          try {
            fs.unlinkSync(req.file.path);
            const data = await Promise.all(
                results.map(async ({ email }) => {
                  if(!email){
                    const ed =[];
                    res.json({ed})
                    return
                  }
                  const info = await emailChecker(email);
                  return { email, info };
                })
              );
            res.status(200).json({data});
          } catch (error) {
          }
        });
  } catch (error) {
    res.status(500).json({msg:error});
  }
};
export default checkCsv;
