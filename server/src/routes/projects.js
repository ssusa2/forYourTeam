/** @format */
import { v4 } from 'uuid';
import { readDB, writeDB } from '../dbController.js';

const getProjects = () => readDB('projects');
const setProjects = (data) => writeDB('projects', data);

const projectsRoute = [
	// {
	// 	method: 'get',
	// 	route: '/introduce',
	// 	handler: ({ query: { cursor = '' } }, res) => {
	// 		const projects = getProjects();
	// 	},
	// },
	{
		// CREATE PROJECT
		method: 'post',
		route: '/introduce',
		handler: ({ body }, res) => {
			console.log('body', body);
			try {
				const projects = getProjects();
				const newProject = {
					id: v4(),
					text: body.text,
					// userId: body.userId,
					// timestamp: Date.now(),
				};
				projects.unshift(newProject);
				setProjects(projects);
				res.send(newProject);
			} catch (err) {
				res.status(500).send({ error: err });
			}
		},
	},
];

export default projectsRoute;
