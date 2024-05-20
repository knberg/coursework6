import Specialty from '../models/Specialty.js';


const getAllSpecialties = async () => {
    return Specialty.findAll();
}

export default {
    getAllSpecialties,
};

