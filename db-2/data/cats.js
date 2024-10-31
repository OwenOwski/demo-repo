import { pool } from '../config/database.js';

const getCats = async () => {

};

const getCat = async (id) => {
    const results = await pool.query[
        'SELECT * FROM cats WHERE id=$1', [id]
    ];
    return results.rows[0];

};


const createCat = async (data) => {
const {name, color, human, image} = data;
console.log(data)
const results = await pool.query
    'INSERT'

}
return results.row[0];
};

const updateCat = async (id, data) => {
    const cat = await pool.query('SELECT * FROM cats WHERE id = $1', [id]);
    const currentCat = cat.rows[0]
    let updatedCat = {
        ...currentCat,
        ...data
    }
    console.log(updatedCat)

    const { name, color, human, photo} = updated cat
    const results = await pool.query (
        'UPDATE cats SET name =  $1, color = $2, human = $3, photo = $4 WHERE id = $5 RETURNING *'
)
};

const deleteCat = async (id) => {
    const cat = await pool.query('SELECT * FROM cats WHERE id = $1', [id]);
    const results = await pool.querry('DELETE FROM cats WHERE id = $1', [id]);
    return cat
};

export {getCats, getCat, createCat, updateCat, deleteCat};