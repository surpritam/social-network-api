const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { userData, thoughtData } = require('./data');

connection.once('open', async () => {
  console.log('Connected to the database');

  // Clear the existing data in the collections
  await User.deleteMany({});
  await Thought.deleteMany({});

  console.log('Existing data cleared');

  // Seed the database with new data
  const users = await User.insertMany(userData);
  const thoughts = await Thought.insertMany(thoughtData);

  console.log('Users and thoughts inserted');

  // Add thoughts to users and reactions to thoughts
  for (const thought of thoughts) {
    const user = users.find((user) => user.username === thought.username);

    if (user) {
      // Add thought to the user's thought array
      await User.findOneAndUpdate(
        { _id: user._id },
        { $push: { thoughts: thought._id } },
        { new: true }
      );
    }

    // Add reactions to the thought
    if (thought.reactions && thought.reactions.length > 0) {
      await Thought.findOneAndUpdate(
        { _id: thought._id },
        { $addToSet: { reactions: { $each: thought.reactions } } },
        { new: true }
      );
    }
  }

  console.log('Thoughts associated with users and reactions added');

  // Add friends to users
  const lernantino = users.find((user) => user.username === 'lernantino');
  const techguy = users.find((user) => user.username === 'techguy');
  const coder123 = users.find((user) => user.username === 'coder123');

  if (lernantino && techguy && coder123) {
    await User.findOneAndUpdate(
      { _id: lernantino._id },
      { $addToSet: { friends: [techguy._id, coder123._id] } },
      { new: true }
    );

    await User.findOneAndUpdate(
      { _id: techguy._id },
      { $addToSet: { friends: [lernantino._id, coder123._id] } },
      { new: true }
    );

    await User.findOneAndUpdate(
      { _id: coder123._id },
      { $addToSet: { friends: [lernantino._id, techguy._id] } },
      { new: true }
    );
  }

  console.log('Friend relationships added');
  process.exit(0);
});
