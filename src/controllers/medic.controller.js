import { Medic } from "../models/Medic.js";

export async function getMedics(req, res) {
  try {
    const medics = await Medic.findAll({
      attributes: ["id", "name", "speciality", "phone", "image"],
    });
    res.json(medics);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function createMedic(req, res) {
  const { name, speciality, phone, image } = req.body;
  try {
    const newMedic = await Medic.create(
      { name, speciality, phone, image },
      { fields: ["name", "speciality", "phone", "image"] }
    );
    res.json(newMedic);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function getMedic(req, res) {
  const { id } = req.params;
  try {
    const medic = await Medic.findOne({ where: { id } });
    res.json(medic);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const updateMedic = async (req, res) => {
  const { id } = req.params;
  const { name, speciality, phone, image } = req.body;
  try {
    const medic = await Medic.findByPk(id);
    if (medic) {
      medic.name = name;
      medic.speciality = speciality;
      medic.phone = phone;
      medic.image = image;
      await medic.save();
      res.json(medic);
    } else {
      res.status(404).json({ message: "Medic not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export async function deleteMedic(req, res) {
  const { id } = req.params;
  try {
    await Medic.destroy({ where: { id } });
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
