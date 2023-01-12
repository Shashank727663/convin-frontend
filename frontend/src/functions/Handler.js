import React from "react";
import axios from "axios";

export const createBucket= async(bucket)=>{
    console.log("Api hit", bucket)
    return await axios.post(' http://localhost:3000/posts',{
        "bucket_name":bucket
    },{
        headers:{
        },
    });



};
export const getallBucket= async()=>{
    return await axios.get(' http://localhost:3000/posts',{
    },{
        headers:{
        },
    });

};

export const addtoCard = async(bucket,artist,url)=>{
    
    return await axios.post('localhost:3000/card/',{
        "bucket_name":bucket,
        "artist":artist,
        "url":url    
    },{
        headers:{
        },
    });

};

export const getallCards= async()=>{
    return await axios.get('localhost:3000/card/',{
    },{
        headers:{
        },
    });

};

export const deletecard= async(id)=>{
    return await axios.delete('localhost:3000/'+id,{
    },{
        headers:{
        },
    });

};

