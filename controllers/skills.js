// controllers/skills.js
const skillsData = require('../models/skill');

module.exports = {
  // Index action
  index: (req, res) => {
    res.render('skills/index', { skills: skillsData });
  },

  // Show action
  show: (req, res) => {
    const skillId = req.params.id;
    const skill = skillsData.find(skill => skill.id === skillId);

    if (!skill) {
      res.status(404).send('Skill not found');
      return;
    }

    res.render('skills/show', { skill });
  },
};
