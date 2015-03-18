if (Feeds.find().count() === 0 ){

  Feeds.insert({
    title: "Approaching Monthly Budget",
    content: "You've spent $3,800 on food this month. You are approaching your monthly budget of $4,000!",
  });

}