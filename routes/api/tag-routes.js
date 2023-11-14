const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// Get all tags
router.get('/', async (req, res) => {
  try {
    const tags = await Tag.findAll({ include: Product });
    res.json(tags);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get one tag by id
router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const tag = await Tag.findOne({
      include: Product,
      where: { id },
    });
    res.json(tag);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a new tag
router.post('/', async (req, res) => {
  try {
    const { tag_name } = req.body;
    const tag = await Tag.create({ tag_name });
    res.json(tag);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Update tag's name by id
router.put('/:id', async (req, res) => {
  try {
    const { tag_name } = req.body;
    const id = req.params.id;
    await Tag.update({ tag_name }, { where: { id } });
    const updatedTag = await Tag.findByPk(id);
    res.json(updatedTag);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Delete tag by id
router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await Tag.destroy({ where: { id } });
    res.json({ message: 'Tag deleted successfully' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;