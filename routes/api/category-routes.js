const router = require('express').Router();
const { Category, Product } = require('../../models');

// GET all categories with associated products
router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: Product,
    });
    res.json(categories);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// GET one category by id with associated products
router.get('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const category = await Category.findByPk(id, {
      include: Product,
    });
    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }
    res.json(category);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// POST create a new category
router.post('/', async (req, res) => {
  const { category_name } = req.body;
  try {
    const category = await Category.create({ category_name });
    res.status(201).json(category);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'Bad Request' });
  }
});

// PUT update a category by id
router.put('/:id', async (req, res) => {
  const { category_name } = req.body;
  const id = req.params.id;
  try {
    const [updatedRows] = await Category.update(
      { category_name },
      {
        where: { id },
      }
    );
    if (updatedRows === 0) {
      return res.status(404).json({ error: 'Category not found' });
    }
    res.json({ message: 'Category updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// DELETE a category by id
router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const deletedRows = await Category.destroy({
      where: { id },
    });
    if (deletedRows === 0) {
      return res.status(404).json({ error: 'Category not found' });
    }
    res.json({ message: 'Category deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;