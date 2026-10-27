import { useParams } from 'react-router-dom';
import { projectData } from '../data/projectData';

const useProject = () => {
    const { title } = useParams();

    const project = projectData.find(p => {
        const formattedTitle = p.title.toLowerCase().replaceAll(' ', '-');
        return formattedTitle === title;
    });

    return project;
};

export default useProject;