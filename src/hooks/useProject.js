import { useParams } from 'react-router-dom';
import { projectData } from '../data/projectData';

const useProject = () => {
    const { id } = useParams();

    const project = projectData.find(p => p.id === Number(id));

    return project;
};

export default useProject;