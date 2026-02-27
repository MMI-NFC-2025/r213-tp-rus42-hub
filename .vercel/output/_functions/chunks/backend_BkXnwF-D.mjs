import PocketBase from 'pocketbase';

const db = new PocketBase('http://127.0.0.1:8090');

async function getOffres() {
    try {
        const data = await db.collection('maison').getFullList({
            sort: '-created',
        });
        return data;
    } catch (error) {
        console.log('Une erreur est survenue en lisant la liste des maisons', error);
        return [];
    }
}

async function getOffre(id) {
    try {
        const data = await db.collection('maison').getOne(id);
        return data;
    } catch (error) {
        console.log('Une erreur est survenue en lisant la maison', error);
        return null;
    }
}

async function getImageUrl(record, recordImage) {
    return db.files.getURL(record, recordImage);
}

async function addOffre(house) {
  try {
    await db.collection("maison").create(house);
    return {
      success: true,
      message: "Offre ajoutée avec succès"
    };
  } catch (error) {
    console.log("Une erreur est survenue en ajoutant la maison", error);
    return {
      success: false,
      message: "Une erreur est survenue en ajoutant la maison"
    };
  }
}

async function filterByPrix(min, max) {
    try {
        const all = await db.collection('maison').getFullList({ sort: '-created' });
        return all.filter(m => m.prix >= min && m.prix <= max);
    } catch (error) {
        console.log('Erreur lors du filtrage par prix', error);
        return [];
    }
}

export { addOffre as a, getOffre as b, getImageUrl as c, filterByPrix as f, getOffres as g };
