import React from 'react';
import './Blog.css'; // Add your CSS file for styling

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'Blog Post 1: Interests - Tech Related & Not',
      date: 'June 12, 2024',
      content: 'When I first started my tech journey, marked by the beginning of uni life, my perception of the space was that it all kind of ' +
      'came under the same umbrella. Oh, how naive I was. I quickly learned that there were, in fact, many umbrellas, each with sub-umbrellas and even those had' +
      ' their own sub-sub-umbrellas. It was all a bit bewildering to be honest. \n\n First I had to pick my degree. Check. Then I had to pick my university. Check. Now I ' +
      ' had to pick my specialisation within all of this? \n\n However, as time went on and I had to experience of a few more courses under my belt, this actually ' +
      'became quite appealing to me. I could pick and choose what I wanted to learn about, do without the particular fields that didn\'t interest me and line ' + 
      ' my career trajectory up in a very particular direction. Great! \n\n At the time of writing this blog, there are a few key areas spanning robotics and software that have piqued my interest. ' +
      ' These are: web development, computer vision, intelligent robots/systems and cloud computing. I\'m sure this list will grow and change as I learn more about the field ' +
      ' and this is by no means an exhaustive list, but for now this gives me a clear direction in where to head next. \n\n Outside of technology, I have a few normal person hobbies' +
      ' that I enjoy. These include cars (both Japanese and European), retro technology (think 90s and 2000s) and craft beer! When I\'m not working or studying, these usually keep me pretty busy.' +
      ' Anyway, that\'s all from me. Until next time! \n\n Gabriel'
    }
    // Add more posts here
  ];

  function formatContent(content) {
    return content.split('\n\n').map((paragraph, index) => (
      <p key={index}>
        {paragraph.split('\n').map((line, lineIndex) => (
          <React.Fragment key={lineIndex}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
    ));
  }

  return (

    
    <div className="blog">
      <h1>Blog</h1>
      {posts.map((post) => (
        <div key={post.id} className="blog-post">
          <h2>{post.title}</h2>
          <p className="blog-date">{post.date}</p>
          <div className="blog-content">{formatContent(post.content)}</div>
        </div>
      ))}
    </div>
  );
};



export default Blog;
