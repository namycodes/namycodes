import { projects } from "components/data/projects";

export default function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json(projects)
    }
}