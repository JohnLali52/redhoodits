document.addEventListener('DOMContentLoaded', function() {
    const storySection = document.getElementById('story');

    const storyText = `
        Once upon a time, there were three little pigs.
        The first pig built a house of straw. The second pig built a house of sticks.
        But the third little pig built a house of bricks.
        One day, a big bad wolf came and huffed and puffed, and he blew down the houses of straw and sticks.
        But he couldn't blow down the house of bricks, and the three little pigs lived happily ever after.
    `;

    storySection.textContent = storyText;
});
