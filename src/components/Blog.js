import React from 'react';
import './Blog.css'; // Add your CSS file for styling

const Blog = () => {
  const posts = [
    {
      id: 3,
      title: 'Blog Post 3: Reflecting on a Summer at EY',
      date: 'January 25, 2025',
      content: 'Sufficient to say that my short tenure at EY has been the most rewarding and eye opening experience I have had to date. ' +
      'To begin with, the people that I met whilst working there were really great for a wide range of reasons. My fellow interns were ' +
      'friendly, inspiring and a pleasure to be around. The consultants a little older than I were extremely welcoming and hard working. ' +
      'The management team were extrremely capable and always pushing me to work harder and step outside of my comfort zone. \n\n Whilst there, ' +
      'I can confidently say that I am proud of the contributions I made to real client facing projects. I did not really expect to have ' +
      'a meaningful impact as just an intern, however my project director Gaurav provided an environment to push myself and do my best. ' +
      'I really am thankful to him for his time and mentorship. \n\n Beyond this, I found the beautiful building on George Street very inspiring to ' +
      'turn up to every day, and the day to day tasks enjoyable. This meaning in my day to day work is something I highly value in my future career.\n\n ' +
      'Who knows were my graduate role will be in the end, but I am very grateful for the experience I have had at EY over the past summer ' +
      'and look forward to what other experiences the near future holds. \n\n Gabriel'
    },
    {
      id: 2,
      title: 'Blog Post 2: The Start of my Personal Finance Journey',
      date: 'July 23, 2024',
      content: 'It\'s no secret that the personal finances of a student are usually not in the best shape they could be in. Mine are no exception. It\'s not for a lack ' +
      'of knowledge or resources, but more so that I viewed my dollar as best serving me now whilst I am studying rather than in the future. ' + 
      'I was of the thought process that sacrificing my current experiences (going out with friends, eating well, travelling) would not be worth ' +
      'the few thousand dollars I would eventually save. In many ways, I still believe this to be true as $1000 right now means a whole lot more to me ' +
      'in my youth than it will in a few years time when I am earning a full-time salary. \n\n ' +
      'Upon reflecting on this, I thought back to a lecturer I had in my second year of university when doing a software engineering course. A few times he mentioned ' +
      'a company he had co-founded called pearler and how it was an accessible way to enter into the stock market. I investigated further, ' +
      'signing up for an account and brushing up on my knowledge of ETF\'s, stocks and bonds. What really caught my attention was a tool they called ' +
      'micro-investing, which allowed me to invest any small sum of money I had into a diversified portfolio. \n\n This was a game changer for me. ' +
      'I came to the realisation that I could infact leverage compound interest and the time I had on my side without removing all the social experiences I enjoyed. ' +
      'I would be able to get the ball rolling on my personal finance journey without having to make any significant sacrifices.\n\n This is all very exciting to me and ' +
      'I very much forward to having more pride in my current financial situation. \n\n Beyond this revelation ' +
      ' I have to admire what a beautiful piece of software pearler is. It is simple, effective and has a refined attention to the user experience. I definitely will be ' +
      'picking up a few pointers from there for my own projects. \n\n Gabriel'
    },
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
