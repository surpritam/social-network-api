const userData = [
    {
      username: 'lernantino',
      email: 'lernantino@gmail.com',
    },
    {
      username: 'techguy',
      email: 'techguy@example.com',
    },
    {
      username: 'coder123',
      email: 'coder123@example.com',
    },
  ];
  
  const thoughtData = [
    {
      thoughtText: "Here's a cool thought...",
      username: 'lernantino',
      reactions: [
        {
          reactionBody: "Nice thought!",
          username: 'techguy',
        },
        {
          reactionBody: "I agree with you!",
          username: 'coder123',
        },
      ],
    },
    {
      thoughtText: "I'm thinking about tech...",
      username: 'techguy',
      reactions: [
        {
          reactionBody: "Same here!",
          username: 'lernantino',
        },
      ],
    },
    {
      thoughtText: "Coding is life!",
      username: 'coder123',
      reactions: [
        {
          reactionBody: "Absolutely!",
          username: 'techguy',
        },
      ],
    },
  ];
  
  module.exports = { userData, thoughtData };
  