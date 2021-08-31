import { NextApiRequest, NextApiResponse } from "next";

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    {id: 1, name: 'hugo'},
    {id: 2, name: 'joana'},
    {id: 3, name: 'marcos'},
    {id: 4, name: 'fernando'},
    {id: 5, name: 'maria'},
    {id: 6, name: 'joao'},
  ]
  return response.json(users)
};
