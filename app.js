import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 9443;
 

 

app.use(bodyParser.urlencoded({ extended: true }));


app.post("/add-item", async (req, res) => {
   
    try {
      const result = await axios.post("https://getpantry.cloud/apiv1/pantry/f163b53f-feac-4875-a8a9-464739f8cad2/basket/newBasket92");
      res.json(result);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

 

app.post("/get-item", async (req, res) => {
   
    try {
        const result = await axios.get("https://getpantry.cloud/apiv1/pantry/f163b53f-feac-4875-a8a9-464739f8cad2/basket/newBasket92");
        res.json(result);
      } catch (error) {
        res.status(500).send(error.message);
      }
        
});

app.post("/list-basket", async (req, res) => {
   
    try {
        const result = await axios.get("https://getpantry.cloud/apiv1/pantry/f163b53f-feac-4875-a8a9-464739f8cad2");
        res.json(result);
      } catch (error) {
        res.status(500).send(error.message);
      }
  });

  app.post("/update-item", async (req, res) => {
   
    try {
        const result = await axios.put("https://getpantry.cloud/apiv1/pantry/f163b53f-feac-4875-a8a9-464739f8cad2/basket/newBasket92");
        res.json(result);
      } catch (error) {
        res.status(500).send(error.message);
      }
  });

  app.post("/delete", async (req, res) => {
   
    try {
        const result = await axios.delete("https://getpantry.cloud/apiv1/pantry/f163b53f-feac-4875-a8a9-464739f8cad2/basket/newBasket92");
        res.json(result);
      } catch (error) {
        res.status(500).send(error.message);
      }
  });


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});