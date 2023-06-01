import { logos } from "components/data/logos";

export default function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json(logos)
    }
}