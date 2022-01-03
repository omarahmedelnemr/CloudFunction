import * as functions from "firebase-functions"; 
import { stringify } from "querystring";
import 'reflect-metadata';
import { connect } from "./config";
import { History } from "./entity/History";


export const getHistory = functions.https.onRequest(async(request, response)=> {

    const connection = await connect();
    const hisRepo = connection.getRepository(History);

    const allHis = await hisRepo.find();
    response.send({"History":allHis})


});


export const createHistory = functions.https.onRequest(async (request, response)=>{
    const data  = request.query;
    try{
        const connection = await connect();
        const repo = connection.getRepository(History);
        const newHistory =new History();
        newHistory.Equation = data.Equation;


        const saved = await repo.save(newHistory);
        response.send({"HistoryData":saved}) 
    }catch(error){
        response.send(error)
    }
}) 