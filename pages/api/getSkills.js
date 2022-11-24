// import { NextApiRequest, NextApiResponse } from "next";
import { groq } from 'next-sanity';
import { sanityClient } from "../../sanity";


const query = groq`
    *[_type=="skill"]
`

export default async function handler(req, res) {
    const skill = await sanityClient.fetch(query);
    res.status(200).json({ skill })
  }