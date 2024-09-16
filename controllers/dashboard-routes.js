const router = require('express').Router();
const { Post } = require('../models');
const withAuth = require('../utils/auth');

// GET route for the dashboard, protected by auth middleware
router.get('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('dashboard', { 
      posts, 
      loggedIn: req.session.loggedIn 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST route to create a new blog post
router.post('/new', withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

// PUT route to update a blog post
router.put('/:id', withAuth, async (req, res) => {
  try {
    const updatedPost = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!updatedPost) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE route to delete a blog post
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
