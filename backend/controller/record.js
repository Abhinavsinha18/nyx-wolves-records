const Record = require("../model/record.model");

const GetRecords = async (req, res) => {
  try {
    const records = await Record.find();
    res.json(records);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Post Record

const PostRecord = async (req, res) => {
  try {
    const data = new Record(req.body);
    await data.save();
    res.status(201).json({ message: "Record Created", Status: true, data });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete Record

const DeleteRecord = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Record.findByIdAndRemove(id);
    if (!data) {
      return res.status(404).json({ error: "Not found" });
    }
    res.json({ message: "Record deleted" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update Record

const updateRecord = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Record.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json({ message: "Record Updated", Status: true, data });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  GetRecords,
  PostRecord,
  DeleteRecord,
  updateRecord,
};
